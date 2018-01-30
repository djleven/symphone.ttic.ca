<?php

namespace App\Controller\Helper;


class TemplateNamingFactory

{

    /** @var string */
    protected $file_name;

    /** @var string */
    protected $extension;

    /**
     * Class constructor
     * @param $file_name
     * @param $extension
     */
    public function __construct($file_name, $extension = '.html')
    {

        $this->file_name = $file_name;
        $this->extension = $extension;
        $this->index = $this->getIndexViewTemplate();
        $this->single = $this->getSingleViewTemplate();
        $this->singleJSON = $this->getSingleViewTemplateJSON();
        $this->edit = $this->getSingleEditTemplate();

    }

    /**
     * Get / Set entity index template
     *
     * @return string|null
     */
    public function getIndexViewTemplate()

    {
        $template = $this->file_name . 's' . $this->extension;

        return $template;
    }

    /**
     * Get / Set entity single view template
     *
     * @return string|null
     */
    public function getSingleViewTemplate()

    {
        $template = $this->file_name . $this->extension;

        return $template;
    }


    /**
     * Get / Set entity single view json inline template
     *
     * @return string|null
     */
    public function getSingleViewTemplateJSON()

    {
        $template = 'json' . $this->extension;

        return $template;
    }

    /**
     * Get / Set entity single edit template
     *
     * @return string|null
     */
    public function getSingleEditTemplate()

    {
        $template = 'edit-entity' . $this->extension;

        return $template;
    }

    /**
     * Get / Set entity single view template
     *
     * @return string|null
     */
    public function getSingleAddTemplate()

    {
        $template = 'add' . $this->extension;

        return $template;
    }
}
