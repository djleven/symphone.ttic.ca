<?php

namespace App\Controller;

use Silex\Application;
use Symfony\Component\HttpFoundation\RequestStack;
use App\Entity\Project;
use App\Entity\Todo;
use Doctrine\ORM\EntityManager;
use App\Form\ProjectType;
use App\Form\TodoType;
use App\Base\EntityController;

class ProjectController extends EntityController

{
    /** @var \Silex\Application */
    protected $app;

    /** @var RequestStack */
    protected $requestStack;

    /** @var \Doctrine\ORM\EntityManager */
    protected $orm_em;

    /**
     * Class constructor
     * @param Application $app
     * @param RequestStack $requestStack
     * @param EntityManager $orm_em
     */
    public function __construct(Application $app, RequestStack $requestStack, EntityManager $orm_em)
    {
        $this->app = $app;
        $this->request = $requestStack->getCurrentRequest();
        $this->requestStack = $requestStack;
        $this->orm_em = $orm_em;
        $this->user = $this->app['user'];
        $this->entity_class = 'Project';
        $this->entity_name = 'project';
        $this->child_entity_name = 'todo';
        $this->main_index_url = '/' . $this->entity_name;
        $this->main_index_bind = 'projects';
        $this->entity = $this->getRequestedEntity();
    }

    /**
     * Get Entity collection
     *
     * @return Collection|Project[]
     */
    public function getEntityCollection()

    {
        $collection = $this->user->getOwnedProjects();

        return $collection;
    }

    /**
     * Get Entity form
     *
     * @return Form
     */
    public function getEntityForm($entity = null)

    {
        if ($entity === null) {
            $entity = $this->entity;
        }
        $form = $this->app['form.factory']->create(ProjectType::class, $entity);

        return $form;
    }

    /**
     * Get new child Entity controller
     *
     * @return TodoController
     */
    public function getNewChildEntityController()

    {
        return new \App\Controller\TodoController($this->app, $this->requestStack, $this->orm_em);
    }

    /**
     * Get Entity API content
     *
     * @param Project $project
     * @return array
     */
    public function getAPIContent(Project $project)
    {
        $getBaseUrl = $this->request->getSchemeAndHttpHost();
        $api = array(
            'id' => $project->getId(),
            'title' => $project->getTitle(),
            'status' => $project->getStatus(),
            'description' => $project->getDescription(),
            'url' => $getBaseUrl . $this->main_index_url . '/' . $project->getId(),
            'edit' => $getBaseUrl . $this->main_index_url . '/edit/' . $project->getId(),
            'delete' => $this->main_index_url . '/delete/' . $project->getId(),
            'created' => $project->getCreatedDateTime(),
            'updated' => $project->getUpdatedDateTime(),
            'todos' => $this->getChildAPIContent($project),
        );

        return $api;
    }

    /**
     * Get Todo API basic content
     *
     * @param Project $project
     * @return array
     */
    public function getChildAPIContent(Project $project)
    {
        $todos = $project->getTodos();

        if ($todos->isEmpty()) {

            return [];
        }

        foreach($todos as $todo) {

            $api[] = $this->getBaseAPIContent($todo);
        }
        return $api;
    }

    /**
     * Get Todo as child API content
     *
     * @param Todo $entity
     * @return array
     */
    public function getBaseAPIContent(Todo $entity)
    {
        $api = array(
            'id' => $entity->getId(),
            'title' => $entity->getTitle(),
            'status' => $entity->getStatus(),
            'description' => $entity->getDescription(),
            'url' => $this->request->getSchemeAndHttpHost() . '/' . $this->child_entity_name . '/' . $entity->getId(),
            'created' => $entity->getCreatedDateTime(),
            'updated' => $entity->getUpdatedDateTime(),
        );

        return $api;
    }

    /**
     * Get Entity single view Twig data
     *
     * @return array
     */
    public function getSingleTwigElements()
    {
        $basic_elements = $this->getBasicTwigElements();
        $elements['entity'] = $this->getAPIContent($this->entity);
        $elements = array_merge($elements, $basic_elements);

        return $elements;
    }

}
