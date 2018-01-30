<?php

namespace App\Repository;

use Symfony\Component\Security\Core\User\UserProviderInterface;
use Symfony\Component\Security\Core\User\UserInterface;
use Symfony\Component\Security\Core\Exception\UnsupportedUserException;
use Symfony\Component\Security\Core\Exception\UsernameNotFoundException;
use Doctrine\DBAL\Connection;
use Silex\Application;
use App\Entity\User;

/**
 * UserProvider Interface
 * @see http://api.symfony.com/master/Symfony/Component/Security/Core/User/UserProviderInterface.html
 * from jasongrimes' work https://github.com/jasongrimes/silex-simpleuser/blob/master/src/SimpleUser/UserManager.php
 */
class UserProvider implements UserProviderInterface
{

    /** @var Connection */
    protected $conn;

    /** @var \Silex\Application */
    protected $app;

    /**
     * Class constructor
     * @param Connection $conn
     * @param Application $app
     */
    public function __construct(Connection $conn, Application $app)
    {
        $this->conn = $conn;
        $this->app = $app;
    }
    /**
     * Loads the user for the given username or email address.
     *
     * @param string $username The username
     * @return UserInterface
     * @throws UsernameNotFoundException if the user is not found
     */
    public function loadUserByUsername($username)
    {
        $user = $this->app['entity_manager']->getRepository('App\Entity\User')
            ->findOneBy(array('username' => $username));
        if (!$user) {
            throw new UsernameNotFoundException(sprintf('Username "%s" does not exist.', $username));
        }
        return $user;
    }
    /**
     * Refreshes the user for the account interface.
     *
     * It is up to the implementation to decide if the user data should be
     * totally reloaded (e.g. from the database), or if the UserInterface
     * object can just be merged into some internal array of users / identity
     * map.
     *
     * @param UserInterface $user
     * @return UserInterface
     * @throws UnsupportedUserException if the account is not supported
     */
    public function refreshUser(UserInterface $user)
    {
        if (!$user instanceof User) {
            throw new UnsupportedUserException(sprintf('Instances of "%s" are not supported.', get_class($user)));
        }

        $this->app['session']->set('user', $this->getUserSessionData($user));

        return $this->loadUserByUsername($user->getUsername());
    }
    /**
     * Whether this provider supports the given user class
     *
     * @param string $class
     * @return Boolean
     */
    public function supportsClass($class)
    {
        return $class === 'App\Entity\User';
    }
    // ----- End UserProviderInterface -----

    /**
     * Get a User instance for the currently logged in User, if any.
     *
     * @return UserInterface|null
     */
    public function getCurrentUser()
    {

        $token = $this->app['security.token_storage']->getToken();

        if ($token) {
            return $token->getUser();
        }
        return null;
    }

    /**
     * Get User Data for Session
     *
     * @param User $user
     * @return array
     */
    public function getUserSessionData(User $user)
    {

        $session_user = array(
            'id' => $user->getId(),
            'username' => $user->getUsername(),
        );

        return $session_user;
    }
}
