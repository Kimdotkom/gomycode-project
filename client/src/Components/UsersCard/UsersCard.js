import React, { useState } from "react";
import { Button, Card, Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { deleteUser } from "../../JS/Actions/Actions";
import './UsersCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '@fortawesome/fontawesome-free-solid'

const UsersCard = ({user}) => {
  const dispatch = useDispatch();

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  return (
    <div>
      <Card style={{ width: "18rem" }} className="card">
        <Card.Img variant="top" src="https://t4.ftcdn.net/jpg/04/70/29/97/360_F_470299797_UD0eoVMMSUbHCcNJCdv2t8B2g1GVqYgs.jpg" />
        <Card.Body>
          <Card.Title>{user.name}</Card.Title>
          <Card.Text>{user.email}</Card.Text>
          <Card.Text>{user.role}</Card.Text>
          <Card.Text>{user.phone}</Card.Text>
          
          
          <Button variant="danger" onClick={handleShow}><FontAwesomeIcon icon="fa-solid fa-trash" /> Delete</Button>


          <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Delete User</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete this user ?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="danger" onClick={() => {dispatch(deleteUser(`${user._id}`))}}>
          <FontAwesomeIcon icon="fa-solid fa-trash" />
            Delete
          </Button>
        </Modal.Footer>
      </Modal>


        </Card.Body>
      </Card>
    </div>
  );
};

export default UsersCard;
