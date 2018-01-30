<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;
use App\Entity\Project;
use App\Entity\User;
use Doctrine\Common\Collections\ArrayCollection;

/**
 * @ORM\Entity(repositoryClass="App\Repository\TodoRepository")
 * @ORM\Table(name="todos")
 */
class Todo extends Entity
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
     * Many Todos per One Owner
     * @ORM\ManyToOne(targetEntity="User", inversedBy="owned_todos")
     * @ORM\JoinColumn(name="owner_id", referencedColumnName="id")
     */
    private $owner;

    /**
     * @ORM\Column(type="integer")
     * 
     * 
     */
    private $owner_id;

    /**
     * Many Todos per One Project
     * @ORM\ManyToOne(targetEntity="Project", inversedBy="todos")
     * @ORM\JoinColumn(name="project_id", referencedColumnName="id")
     */

    private $project;

    /**
     * @ORM\Column(type="integer")
     * 
     */

    private $project_id;

    /**
     * @var Todo[]|ArrayCollection
     *
     * @ORM\OneToMany(targetEntity="Update", mappedBy="todo", cascade={"remove"})
     */
    public $updates;


    public function __construct()
    {
        $this->updates = new \Doctrine\Common\Collections\ArrayCollection();
        $this->created = new \DateTime();
    }

    /**
     * Returns the Todo id.
     *
     * @return int
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * Returns the Todo title.
     *
     * @return string
     */
    public function getTitle()
    {
        return $this->title;
    }

    /**
     * Sets the Todo title.
     *
     * @param string
     */
    public function setTitle($title)
    {
        $this->title = $title;
    }

    /**
     * Returns the Todo description.
     *
     * @return string
     */
    public function getDescription()
    {
        return $this->description;
    }

    /**
     * Sets the Todo description.
     *
     * @param string
     */
    public function setDescription($description)
    {
        $this->description = $description;
    }

    /**
     * Returns the owner (User) of the Todo.
     *
     * @return User
     */
    public function getOwner(): User
    {
        return $this->owner;
    }

    /**
     * Sets the owner (User) of the Todo.
     *
     * @param User
     */
    public function setOwner(User $owner)
    {
        $this->owner = $owner;
    }

    /**
     * Returns the Todo owner User id.
     *
     * @return int User id
     */
    public function getowner_id()
    {
        return $this->owner_id;
    }

    /**
     * Returns the Todo Project.
     *
     * @return Project
     */
    public function getProject(): Project
    {
        return $this->project;
    }

    /**
     * Sets the Todo Project.
     *
     * @param Project
     */

    public function setProject(Project $project)
    {
        $this->project = $project;
    }

    /**
     * Returns the Todo Project id.
     *
     * @return int Project id
     */

    public function getProject_id()
    {
        return $this->project_id;
    }

    /**
     * Returns the Todo status.
     *
     * @return string
     */
    public function getStatus()
    {
        return $this->status;
    }

    /**
     * Sets the Todo status.
     *
     * @param string
     */
    public function setStatus($status)
    {
        $this->status = $status;
    }

    /**
     * Returns the Updates belonging to the Project.
     *
     * @return Collection|Updates[]
     */
    public function getUpdates()
    {
        return $this->updates;
    }

}
