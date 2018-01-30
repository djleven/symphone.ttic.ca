<?php

namespace App\Controller;

use Silex\Application;
use Symfony\Component\HttpFoundation\RequestStack;
use App\Entity\Update;
use Doctrine\ORM\EntityManager;
use App\Form\UpdateType;
use App\Base\EntityController;

class UpdateController extends EntityController

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
        $this->orm_em = $orm_em;
        $this->user = $this->app['user'];
        $this->entity_class = 'Update';
        $this->entity_name = 'update';
        $this->main_index_url = '/' . $this->entity_name;
        $this->main_index_bind = 'todos';
        $this->entity = $this->getRequestedEntity();
    }

    /**
     * Get Entity collection
     *
     * @return Collection|Update[]
     */
    public function getEntityCollection()

    {
        $collection = $this->user->getOwnedUpdates();

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
        $form = $this->app['form.factory']->create(UpdateType::class, $entity);

        return $form;
    }

    /**
     * handleForm() hook for Entity specific requests to be executed before saving to db
     *
     * @return null
     */
    public function on_save_hook($entity, $relatedObject = NULL) 
    {
        if ($entity->getTodo_id() === null) {
            $entity->setTodo($relatedObject);
        }
        return;
    }

}
