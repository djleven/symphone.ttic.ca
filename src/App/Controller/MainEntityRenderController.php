<?php

namespace App\Controller;

use Silex\Application;
use App\Base\EntityRenderInterface;
use App\Base\EntityController;
use App\Controller\Helper\TemplateNamingFactory;
use Doctrine\ORM\EntityManager;

class MainEntityRenderController implements EntityRenderInterface

{
    /** @var \Silex\Application */
    protected $app;

    /** @var \App\Controller\TodoController | \App\Controller\ProjectController */
    protected $entity_controller;

    /** @var \App\Controller\Helper\TemplateNamingFactory */
    protected $templates;

    /** @var \Doctrine\ORM\EntityManager */
    protected $orm_em;

    /**
     * Class constructor
     *
     * @param Application $app
     * @param TodoController | ProjectController $entity_controller
     * @param TemplateNamingFactory $templates
     * @param EntityManager $orm_em
     */
    public function __construct(Application $app, $entity_controller, TemplateNamingFactory $templates, EntityManager $orm_em)
    {
        $this->app = $app;
        $this->ent_ctrl = $entity_controller;
        $this->template = $templates;
        $this->orm_em = $orm_em;
    }

    /**
     * User entities index view.
     *
     * @return string twig template
     */
    public function indexAction()
    {

        $elements = $this->ent_ctrl->getIndexTwigElements();

        if($this->ent_ctrl->entity_class === 'Project'){

            $entity = $this->ent_ctrl->getNewEntity();
            $form = $this->ent_ctrl->getEntityForm($entity);
            $handleForm = $this->ent_ctrl->handleForm($form, $entity, 'added');

            $elements['form'] = $form->createView();
            if($handleForm) {

            return $this->app->redirect($this->app['url_generator']->generate($this->ent_ctrl->entity_name, array('id' => $handleForm)));
            }

        }
        return $this->app['twig']->render($this->template->getIndexViewTemplate(), $elements);
    }

    /**
     * User Entities index as JSON
     *
     * @return string JSON response
     */
    public function indexActionJSON()
    {
        return $this->ent_ctrl->getindexActionJSON();
    }

    /**
     * Entity single view with new child Entity form
     *
     * @return string|\Symfony\Component\HttpFoundation\RedirectResponse Twig
     */
    public function singleAction()
    {
        $elements = $this->ent_ctrl->getSingleTwigElements();

        $child_ent_ctrl = $this->ent_ctrl->getNewChildEntityController();
        $entity = $child_ent_ctrl->getNewEntity();

        $form = $child_ent_ctrl->getEntityForm($entity);
        $handleForm = $child_ent_ctrl->handleForm($form, $entity, 'added', $this->ent_ctrl->entity);

        $elements['form'] = $form->createView();

        if($handleForm && $child_ent_ctrl->entity_class !== 'Update') {
            return $this->app->redirect($this->app['url_generator']->generate($child_ent_ctrl->entity_name, array('id' => $handleForm)));
        }

        return $this->app['twig']->render($this->template->getSingleViewTemplate(), $elements);
    }

    /**
     * Entity single view in raw JSON
     *
     * @return string JSON response
     */
    public function viewActionAPI()

    {
        $entity = $this->ent_ctrl->getAPIContent($this->ent_ctrl->entity);

        return $this->app->json($entity);
    }

    /**
     * Entity single view in JSON inline
     *
     * @return string Twig
     */
    public function viewActionJSON()

    {
        $elements = $this->ent_ctrl->getBasicTwigElements();
        $elements['entity'] = $this->viewActionAPI();
        return $this->app['twig']->render($this->template->getSingleViewTemplateJSON(), $elements);
    }

    /**
     * Entity edit view
     *
     * @return string Twig
     */
    public function singleEditAction()
    {
        $form = $this->ent_ctrl->getEntityForm();
        $this->ent_ctrl->handleForm($form, $this->ent_ctrl->entity, 'edited');

        $elements = $this->ent_ctrl->getSingleTwigElements();
        $elements['form'] = $form->createView();

        return $this->app['twig']->render($this->template->getSingleEditTemplate(), $elements);
    }

    /**
     * Delete an Entity
     *
     * @return \Symfony\Component\HttpFoundation\RedirectResponse
     */
    public function deleteAction()
    {
        $this->orm_em->remove($this->ent_ctrl->entity);
        $this->orm_em->flush();
        $message = 'The '. $this->ent_ctrl->entity_name . ' has been removed!';
        $this->ent_ctrl->hasMessage($message);

        return $this->ent_ctrl->mainIndexRedirect();    
    }

}

