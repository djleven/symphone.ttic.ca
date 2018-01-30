<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;
use App\Entity\Todo;
use App\Entity\User;
use Doctrine\Common\Collections\ArrayCollection;

/**
 * @ORM\Entity(repositoryClass="App\Repository\ProjectRepository")
 * @ORM\Table(name="projects")
 */
class Project extends Entity
{
    /**
     * @ORM\Id @ORM\Column(type="integer") @ORM\GeneratedValue
     * 
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=60)
     *
     */
    private $title;

    /**
     * @ORM\Column(type="string", length=255)
     *
     */
    private $description;

    /**
     * @ORM\Column(type="string", length=60)
     *
     */
    private $status;

    /**
     * @var Todo[]|ArrayCollection
     *
     * @ORM\OneToMany(targetEntity="Todo", mappedBy="project", cascade={"remove"})
     */
    public $todos;

    /**
     * @ORM\Column(type="datetime")
     * @var DateTime
     */
    protected $created;

    /**
     * @ORM\Column(type="datetime", columnDefinition="TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP")
     * @var DateTime
     */
    protected $updated;


    /**
     * @var User[]|ArrayCollection
     *
     * @ORM\ManyToMany(targetEntity="User", inversedBy="projectsMember")
     */
    private $users;

    /**
     * Many Projects per One Owner
     * @ORM\ManyToOne(targetEntity="User", inversedBy="owned_projects")
     * @ORM\JoinColumn(name="owner_id", referencedColumnName="id")
     */
    private $owner;

    /**
     * @ORM\Column(type="integer")
     * 
     * 
     */
    private $owner_id;

    public function __construct()
    {
        $this->todos = new \Doctrine\Common\Collections\ArrayCollection();
        $this->users = new \Doctrine\Common\Collections\ArrayCollection();
        $this->created = new \DateTime();
    }

    /**
     * Returns the Project id.
     *
     * @return int
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * Returns the Project title.
     *
     * @return string
     */
    public function getTitle()
    {
        return $this->title;
    }

    /**
     * Sets the Project title.
     *
     * @param string
     */
    public function setTitle($title)
    {
        $this->title = $title;
    }

    /**
     * Returns the Project description.
     *
     * @return string
     */
    public function getDescription()
    {
        return $this->description;
    }

    /**
     * Sets the Project description.
     *
     * @param string
     */
    public function setDescription($description)
    {
        $this->description = $description;
    }

    /**
     * Returns the owner (User) of the Project.
     *
     * @return Project
     */
    public function getOwner(): User
    {
        return $this->owner;
    }

    /**
     * Sets the owner (User) of the Project.
     *
     * @param Project
     */
    public function setOwner(User $owner)
    {
        $this->owner = $owner;
    }
    /**
     * Returns the Project owner User id.
     *
     * @return int
     */
    public function getowner_id()
    {
        return $this->owner_id;
    }

    /**
     * Returns the Todos belonging to the Project.
     *
     * @return Collection|Todos[]
     */
    public function getTodos()
    {
        return $this->todos;
    }

    /**
     * Returns the Project status.
     *
     * @return string
     */
    public function getStatus()
    {
        return $this->status;
    }

    /**
     * Sets the Project status.
     *
     * @param string
     */
    public function setStatus($status)
    {
        $this->status = $status;
    }

    /**
     * Returns the Users belonging to the project.
     *
     * @return (Users|string)[]
     */
    public function getUsers()
    {
        return $this->users;
    }

    /**
     * Set the Users belonging to the project.
     *
     * @return (Users|string)[]
     */
    public function setUsers()
    {
        return $this->users;
    }
}
