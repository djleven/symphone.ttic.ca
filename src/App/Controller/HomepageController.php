<?php

namespace App\Controller;

use Silex\Application;
use Symfony\Component\HttpFoundation\Request;

class HomepageController extends \App\Base\BaseController
{

    /**
     * Homepage view
     * @param RequestStack $requestStack
     * @param Application $app
     * @return string Twig template
     */
    public function indexAction()
    {

        return $this->app['twig']->render('index.html');
    }
}
