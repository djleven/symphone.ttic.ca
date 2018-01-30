<?php

namespace App\Controller;

use Silex\Application;
use Symfony\Component\HttpFoundation\RequestStack;
use App\Entity\Todo;
use Doctrine\ORM\EntityManager;
use App\Form\TodoType;
use App\Base\EntityController;
use App\Entity\Update;

class TodoController extends EntityController

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
        $this->entity_class = 'Todo';
        $this->entity_name = 'todo';
        $this->child_entity_name = 'update';
        $this->main_index_url = '/' . $this->entity_name;
        $this->main_index_bind = 'todos';
        $this->entity = $this->getRequestedEntity();
    }

    /**
     * Get Entity collection
     *
     * @return Collection|Todos[]
     */
    public function getEntityCollection()

    {
        $collection = $this->user->getOwnedTodos();

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
        $form = $this->app['form.factory']->create(TodoType::class, $entity);

        return $form;
    }

    /**
     * Get new child Entity controller
     *
     * @return UpdateController
     */
    public function getNewChildEntityController()

    {
        return new \App\Controller\UpdateController($this->app, $this->requestStack, $this->orm_em);
    }

    /**
     * Get Entity API content
     *
     * @param Todo $todo
     * @return array
     */
    public function getAPIContent(Todo $todo)
    {
        $getBaseUrl = $this->request->getSchemeAndHttpHost();
        $api = array(
            'id' => $todo->getId(),
            'title' => $todo->getTitle(),
            'status' => $todo->getStatus(),
            'description' => $todo->getDescription(),
            'project' => $todo->getProject()->getTitle(),
            'project_url' => $getBaseUrl . '/project/'. $todo->getProject()->getId(),
            'url' => $getBaseUrl . $this->main_index_url . '/' . $todo->getId(),
            'edit' => $getBaseUrl . $this->main_index_url . '/edit/' . $todo->getId(),
            'delete' => $this->main_index_url . '/delete/' . $todo->getId(),
            'created' => $todo->getCreatedDateTime(),
            'updated' => $todo->getUpdatedDateTime(),
            'updates' => $this->getChildAPIContent($todo),
        );

        return $api;
    }

    /**
     * Get Update API content
     *
     * @param Todo $todo
     * @return array
     */
    public function getChildAPIContent(Todo $todo)
    {
        $updates = $todo->getUpdates();

        if ($updates->isEmpty()) {

            return [];
        }

        foreach($updates as $update) {

            $api[] = $this->getBaseAPIContent($update);
        }

        return $api;
    }

    /**
     * Get Update as child API content
     *
     * @param Update $entity
     * @return array
     */
    public function getBaseAPIContent(Update $entity)
    {

        $api = array(
            'id' => $entity->getId(),
            'title' => $entity->getTitle(),
            'status' => $entity->getStatus(),
            'description' => $entity->getDescription(),
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

    /**
     * handleForm() hook for Entity specific requests to be executed before saving to db
     *
     * @return null
     */
    public function on_save_hook($entity, $relatedObject = NULL) 
    {
        if ($entity->getProject_id() === null) {
            $entity->setProject($relatedObject);
        }
        return;
    }

}
