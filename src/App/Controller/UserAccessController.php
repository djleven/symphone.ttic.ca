<?php

namespace App\Controller;

use App\Controller;

class UserAccessController

{

    /** @var int */
    protected $entity_owner_id;

    /** @var int */
    protected $userid;


    /**
     * Class constructor
     * @param int $entity_owner_id
     * @param int $userid
     */
    public function __construct($entity)
    {
        $this->entitycontroller = $entity;
        $this->main_index_bind = $this->entitycontroller->main_index_bind;
        $this->entity_name = $this->entitycontroller->entity_name;

    }

    /**
     * Check rules for access (introduced for multiple user ACL )
     *
     * @return Boolean
     */
    public function hasReadAccessRights()

    {

        $credentials = $this->isEntityOwner();
        return $this->isVerdict($credentials);

    }

    /**
     * Check rules for access (introduced for multiple user ACL)
     *
     * @return Boolean
     */
    public function hasWriteAccessRights()

    {

        $credentials = $this->isEntityOwner();
        return $this->isVerdict($credentials);

    }

    /**
     * Check if user is entity owner
     *
     * @return Boolean
     */
    public function isEntityOwner()

    {

         if ($this->entitycontroller->entity) {

            return $this->entitycontroller->user->getID() === $this->entitycontroller->entity->getowner_id();
            }
         // if the requested entity does not exist return false
        return false;

    }


    /**
     * Check if user is entity owner
     *
     * @return Boolean
     */
    public function isVerdict($credentials)

    {

         if (!$credentials) {
            // if requested entity does not exist we still return a non-authorized message, no need to reveal non-existence
            $message = "You are not authorized to view this $this->entity_name!";

            $this->entitycontroller->hasMessage($message);

            return $this->entitycontroller->mainIndexRedirect();     
        }

        return;

    }

}
