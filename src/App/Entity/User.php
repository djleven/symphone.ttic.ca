<?php

namespace App\Entity;

use Symfony\Component\Security\Core\User\UserInterface;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity
 * @ORM\Table(name="users")
 */
class User extends Entity implements UserInterface
{

    /**
     * @ORM\Id @ORM\GeneratedValue @ORM\Column(type="integer")
     *
     */
    private $id;
    /**
     * @ORM\Column(type="string", length=255, unique=true)
     *
     */
    private $username;
    /**
     * @ORM\Column(type="string", length=255)
     *
     */
    private $password;

    /**
     * @var Group[]|ArrayCollection
     *
     * @ORM\ManyToMany(targetEntity="Project", mappedBy="users")
     */
    private $projectsMember;

    /**
     * @var Group[]|ArrayCollection
     *
     * @ORM\OneToMany(targetEntity="Project", mappedBy="owner")
     */
    private $owned_projects;

    /**
     * @var Group[]|ArrayCollection
     *
     * @ORM\OneToMany(targetEntity="Todo", mappedBy="owner")
     */
    private $owned_todos;

    /**
     * @var Group[]|ArrayCollection
     *
     * @ORM\OneToMany(targetEntity="Update", mappedBy="author")
     */
    private $owned_updates;


    public function __construct()
    {

        $this->projects = new \Doctrine\Common\Collections\ArrayCollection();
        $this->owned_projects = new \Doctrine\Common\Collections\ArrayCollection();
        $this->owned_todos = new \Doctrine\Common\Collections\ArrayCollection();
        $this->owned_updates = new \Doctrine\Common\Collections\ArrayCollection();
        $this->created = new \DateTime();
    }

    /**
     * Returns the user id.
     *
     * @return int
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * Returns the user name.
     *
     * @return string
     */
    public function getName()
    {
        return $this->username;
    }

    /**
     * Returns the username used to authenticate the user.
     *
     * @return string
     */
    public function getUsername()
    {
        return $this->username;
    }

    /**
     * Returns the password used to authenticate the user.
     *
     * @return string
     */
    public function getPassword()
    {
        return $this->password;
    }

    /**
     * Returns the roles granted to the user.
     *
     * @return (Role|string)[]
     */
    public function getRoles()
    {
        return array('ROLE_USER');
    }

    /**
     * Returns the salt that was originally used to encode the password.
     *
     * This can return null if the password was not encoded using a salt.
     *
     * The default configuration of this here extension will return null.
     *
     * @return string|null
     */
    public function getSalt()
    {

    }

    /**
     * Removes sensitive data from the user.
     *
     * This is important if, at any given point, sensitive information like the plain-text password is stored on this object.
     *
     * The default configuration of this here extension enforces encoded passwords using the sha512 algorithm.
     */
    public function eraseCredentials()
    {

    }

    /**
     * Returns the Projects where the User is a member.
     *
     * @return Collection|Projects[]
     */
    public function getProjectsMember()
    {
        return $this->projects;
    }

    /**
     * Returns the Projects of the User.
     *
     * @return Collection|Projects[]
     */
    public function getOwnedProjects()
    {
        return $this->owned_projects;
    }

    /**
     * Returns the Todos of the User.
     *
     * @return Collection|Todos[]
     */
    public function getOwnedTodos()
    {
        return $this->owned_todos;
    }

    /**
     * Returns the Updates of the User.
     *
     * @return Collection|Updates[]
     */
    public function getOwnedUpdates()
    {
        return $this->owned_updates;
    }

}
