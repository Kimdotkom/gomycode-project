import React, { useState } from "react";
import { Button, Card, Modal } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./AnnonceCard.css";
import { deleteAnnonce } from "../../JS/Actions/Actions";
import { useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "@fortawesome/fontawesome-free-solid";
import { MDBIcon } from "mdb-react-ui-kit";

const AnnonceCard = ({ annonce }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const converTime = (time) => {
    return new Date(time).toLocaleDateString("fr-fr", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });
  };

  const createdAt = annonce.createdAt;
  const updatedAt = annonce.updatedAt;

 

  return (
    <div>
      <Card
        style={{ width: "18rem" }}
        className="card"
      >
        <Card.Img
          variant="top"
          src="https://t4.ftcdn.net/jpg/04/70/29/97/360_F_470299797_UD0eoVMMSUbHCcNJCdv2t8B2g1GVqYgs.jpg"
        />
        <Card.Body>
          <Card.Title>{annonce.name}</Card.Title>
          <Card.Text>{annonce.description}</Card.Text>
          <Card.Text><MDBIcon fas icon="money-bill" />{annonce.prix} DT</Card.Text>
          <Card.Text><MDBIcon far icon="clock" /> {converTime(createdAt)}</Card.Text>
          {/* <Card.Text>Modified at {converTime(updatedAt)}</Card.Text> */}

          <Card.Text><MDBIcon fas icon="user-alt" /> </Card.Text>

          <div className="actions-btn">

          <div className="more-btn">
          <a onClick={() => navigate(`/get-one/${annonce._id}`)}>
             <MDBIcon fas icon="search-plus" /> More
          </a>
          </div>

          <div className="edit-btn">
          <a onClick={() => navigate(`/update-annonce/${annonce._id}`)}>
          <MDBIcon fas icon="edit" /> Edit
          </a>
          </div>

          <div className="delete-btn">
          <a variant="danger" onClick={handleShow}>
             <MDBIcon fas icon="trash" /> Delete
          </a>
          </div>

          </div>

          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Delete Annonce</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              Are you sure you want to delete this annonce ?
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button
                variant="danger"
                onClick={() => {
                  dispatch(deleteAnnonce(`${annonce._id}`));
                }}
              >
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

export default AnnonceCard;
