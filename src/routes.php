<?php

use Symfony\Component\HttpFoundation\Request;
use Silex\Application;

// ---------- Homepage -----------

// --- Register homepage route ---
$app->get('/', 'Controller.HomepageController:indexAction')->bind('home');

// --- homepage Controller ---
$app['Controller.HomepageController'] = function ($app) {
    return new App\Controller\HomepageController($app, $app['request_stack']);
};


// ------ ENTITIES ------

// --- Entity befores --- 
// Check if the requested entity exists and if the use has the proper access rights

$ifReadAccess = function (Request $request, Application $app) {

    $entity =  new $app['requested_entity.controller']($app, $app['request_stack'], $app['entity_manager']);
    $acl =  new App\Controller\UserAccessController($entity);
    $acl->hasReadAccessRights();
};

$ifWriteAccess = function (Request $request, Application $app) {

    $entity =  new $app['requested_entity.controller']($app, $app['request_stack'], $app['entity_manager']);
    $acl =  new App\Controller\UserAccessController($entity);
    $acl->hasWriteAccessRights();
};

// --- Register todo routes ---

// Index routes
$app->match('/todo', 'entity.single.controller:indexAction')->bind('todos');
$app->get('/todo/api/index', 'entity.single.controller:indexActionJSON');

// Single view routes
$app->match('/todo/{id}', 'entity.single.controller:singleAction')->bind('todo')->before($ifReadAccess);
$app->get('/todo/{id}/json', 'entity.single.controller:viewActionJSON')->before($ifReadAccess);
$app->get('/todo/{id}/api', 'entity.single.controller:viewActionAPI')->before($ifReadAccess);

// Single edit routes
$app->post('/todo/delete/{id}', 'entity.single.controller:deleteAction')->before($ifWriteAccess);
$app->match('/todo/edit/{id}', 'entity.single.controller:singleEditAction')->before($ifWriteAccess);

// --- Register project routes ---

// Index routes
$app->match('/project', 'entity.single.controller:indexAction')->bind('projects');
$app->get('/project/api/index', 'entity.single.controller:indexActionJSON');

// Single view routes
$app->match('/project/{id}', 'entity.single.controller:singleAction')->bind('project')->before($ifReadAccess);
$app->get('/project/{id}/json', 'entity.single.controller:viewActionJSON')->before($ifReadAccess);
$app->get('/project/{id}/api', 'entity.single.controller:viewActionAPI')->before($ifReadAccess);

// Single edit routes
$app->post('/project/delete/{id}', 'entity.single.controller:deleteAction')->before($ifWriteAccess);
$app->match('/project/edit/{id}', 'entity.single.controller:singleEditAction')->before($ifWriteAccess);


// --- Entity Controller routing ---

$app['entity.single.controller'] = function ($app) {

    $entity =  new $app['requested_entity.controller']($app, $app['request_stack'], $app['entity_manager']);
    $templates =  new \App\Controller\Helper\TemplateNamingFactory($entity->entity_name);
    return $controller = new App\Controller\MainEntityRenderController($app, $entity, $templates, $app['entity_manager']);
};


// ----------- USERS -----------

// --- Register user routes ---
$app->get('/login', 'Controller.UserController:loginAction')->bind('login');
$app->get('/logout', 'Controller.UserController:logoutAction');

// --- User Controller ---
$app['Controller.UserController'] = function ($app) {
    return new App\Controller\UserController($app, $app['request_stack']);
};

