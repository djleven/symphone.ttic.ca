<?php

namespace App\Base;


interface EntityRenderInterface

{
    /**
     * Entity index view
     *
     */
    public function indexAction();

    /**
     * Entity single view
     *
     */
    public function singleAction();

    /**
     * Entity edit view
     *
     */
    public function singleEditAction();

    /**
     * Delete an entity
     *
     */
    public function deleteAction();

}
