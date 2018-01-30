<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\UpdateRepository")
 * @ORM\Table(name="updates")
 */
class Update extends Entity
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
     * Many Updates per One User
     * @ORM\ManyToOne(targetEntity="User")
     * 
     */
    private $owner;

    /**
     * @ORM\Column(type="integer")
     * 
     */
    private $owner_id;

    /**
     * Many Updates per One Todo
     * @ORM\ManyToOne(targetEntity="Todo", inversedBy="updates")
     * @ORM\JoinColumn(name="todo_id", referencedColumnName="id")
     */
    private $todo;

    /**
     * @ORM\Column(type="integer")
     * 
     */
    private $todo_id;

    public function __construct()
    {
        $this->created = new \DateTime();
    }

    /**
     * Returns the Update id.
     *
     * @return int
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * Returns the Update title.
     *
     * @return string
     */
    public function getTitle()
    {
        return $this->title;
    }

    /**
     * Sets the Update title.
     *
     * @param string
     */
    public function setTitle($title)
    {
        $this->title = $title;
    }

    /**
     * Returns the Update description.
     *
     * @return string
     */
    public function getDescription()
    {
        return $this->description;
    }

    /**
     * Sets the Update description.
     *
     * @param string
     */
    public function setDescription($description)
    {
        $this->description = $description;
    }

    /**
     * Returns the owner (User) of the Update.
     *
     * @return User
     */
    public function getOwner(): User
    {
        return $this->user;
    }

    /**
     * Sets the owner (User) of the Update.
     *
     * @param User
     */
    public function setOwner(User $owner)
    {
        $this->owner = $owner;
    }

    /**
     * Returns the Update owner User id.
     *
     * @return int User id
     */
    public function getowner_id()
    {
        return $this->owner_id;
    }

    /**
     * Returns the Todo of the Update.
     *
     * @return Todo
     */
    public function getTodo(): Todo
    {
        return $this->todo;
    }

    /**
     * Sets the Todo of the Update.
     *
     * @param Todo
     */
    public function setTodo(Todo $todo)
    {
        $this->todo = $todo;
    }

    /**
     * Returns the Update Todo id.
     *
     * @return int
     */
    public function getTodo_id()
    {
        return $this->todo_id;
    }

    /**
     * Returns the Update status.
     *
     * @return string
     */
    public function getStatus()
    {
        return $this->status;
    }

    /**
     * Sets the Update status.
     *
     * @param string
     */
    public function setStatus($status)
    {
        $this->status = $status;
    }

}
