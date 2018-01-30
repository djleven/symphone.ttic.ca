<?php

namespace App\Base;

use App\Entity\Entity;
use Symfony\Component\Form\Form;

abstract class EntityController extends BaseController

{
    /**
     * Get Set Entity root namespace
     *
     * @return string|null
     */
    public function getRootNamespace()

    {
        return "App\\Entity\\";
    }

    /**
     * Get namespace path of Entity
     *
     * @return string|null
     */
    public function getEntityNamespace()

    {
        $namespace = $this->getRootNamespace() . $this->entity_class;

        return $namespace;
    }

    /**
     * Get a new Entity instance
     *
     * @return Entity|null
     */
    public function getNewEntity()

    {
        $entity = $this->getEntityNamespace();

        return new $entity;
    }

    /**
     * Get requested Entity object if it exists
     *
     * @return Entity|null
     */
    public function getRequestedEntity($id = 'id')

    {
        if ($this->request->get($id)){
            $entity_id = $this->request->get($id);
            $entity = $this->orm_em->find($this->getEntityNamespace(), $entity_id);

            if ($entity) {

                return $entity;
            }
        }
        return;
    }

    /**
     * Entity collection as JSON
     *
     * @return string JSON response
     */
    public function getIndexActionJSON()
    {
        $entities = $this->getEntityCollection();
        if ($entities->isEmpty()) {

            return $this->app->json([]);
        }
        foreach($entities as $entity) {

            $api[] = $this->getAPIContent($entity);
        }

        return $this->app->json($api);
    }

    /**
     * Get Entity basic (identification) Twig data
     *
     * @return array
     */
    public function getBasicTwigElements()
    {
        $elements = array(
            'Entity' => $this->entity_class,
            'entity_type' => $this->entity_name
        );

        return $elements;
    }

    /**
     * Get Entity index view Twig data
     *
     * @return array
     */
    public function getIndexTwigElements()
    {

        $elements = $this->getBasicTwigElements();
        $elements['entities'] = $this->getIndexActionJSON()->getContent();

        return $elements;
    }

    /**
     * Update database upon succesfull submission for both add new and edit entity requests.
     *
     * @param Form $form
     * @param Entity $entity
     * @param string $msg
     * @return null|int $entity id
     */
    public function handleForm(Form $form, Entity $entity, $msg = 'saved', $relatedObject = null)
    {
        $form->handleRequest($this->request);

        if ($form->isSubmitted()) {

            //$this->handleErrors($form);

            if ($form->isValid()) {
                $form->getData();
 
                if ($entity->getowner_id() === null) {
                    $entity->setOwner($this->user);
                }
                $this->on_save_hook($entity, $relatedObject);
                $this->orm_em->persist($entity);
                $this->orm_em->flush();
                $this->hasMessage("The $this->entity_name has been $msg");

            return $entity->getId();
            }
        }
            return ;
    }


    /**
     * Get form submission errors
     *
     * Not being used at the moment - using symfony forms' built in error messaging for user feedback
     *
     * @param Form $form
     * @return null
     */
    public function handleErrors(Form $form)
    {
        $errors = $this->app['validator']->validate($form);

        if (count($errors) > 0) {
            $x = 1;
            foreach ($errors as $error) {
                $err[] = $x . ': ' . $error->getMessage();
                $x++;
            }

            $msg = implode(" ",$err);
            //do something with errors
            //ex log them somewhere or show to user:
            //$this->hasMessage($msg);
        }

        return;
    }

    /**
     * handleForm() hook for Entity specific requests to be executed before saving to db
     *
     * @return null
     */
    public function on_save_hook($entity, $relatedObject = null)
    {

    }

}
