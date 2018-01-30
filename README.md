Symphone.ttic.ca - A Light Project Management App
==========================

### Application
Symphone.ttic.ca is a simple app that allows users to add and manage tasks (todos) and projects.

### Screenshots

#### Projects:
![Todos](/web/img/projects.png?raw=true "Projects index")

#### Todos:
![Todos](/web/img/todos.png?raw=true "Todos index")

#### Todos Nested View:
![TodoNestedView](/web/img/nestedtodos.png?raw=true "Todo Nested View")

#### Project Nested View:
![ProjectNestedView](/web/img/projects-nested.png?raw=true "Project Nested View")

#### Project Single View:
![ProjectSingleView](/web/img/project-single-view.png?raw=true "Project Single View")

#### Todo Single View:
![TodoSingleView](/web/img/todo-single-view.png?raw=true "Todo Single View")

#### Filter Search:
![FilterSearch](/web/img/SearchFilter.png?raw=true "FilterSearch")

#### Index API:
![IndexAPI](/web/img/index-api.png?raw=true "IndexAPI")

#### Project API:
![ProjectAPI](/web/img/project-api.png?raw=true "ProjectAPI")


### Requirements
* php 5.5.9+ (5.6 for PHPUnit)
* a mysql database

### Installation

```sh
from the project root file:

php composer.phar install

cp config/db.php.dist config/db.php

Enter your database connection credentials in the file config/db.php.

1-) To create the db schema:
vendor/bin/doctrine orm:schema-tool:update --force

2-) To populate the db (add users)
vendor/bin/doctrine dbal:import resources/fixtures.sql 

(.htaccess file provided is for Apache + mod_rewrite)

```
Credentials:
* username: **user1**
* password: **user1**

### Documentation
This app is based on [Silex](http://silex.sensiolabs.org/), a  micro-framework in turn based on the Symfony2 Components.
Documentation here: http://silex.sensiolabs.org/documentation

### Credits
Silex2
Symfony2
VueTables2
Doctrine
and see the composer.json file!
Symphone.ttic.ca from the Greek word "Συμφωνητικά", meaning agreement(s), and a passing reference to the Symfony framework at work as well.

