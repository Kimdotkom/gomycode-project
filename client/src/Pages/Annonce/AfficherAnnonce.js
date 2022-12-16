import React, { useEffect, useState } from "react";
import { Button, Card, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {  useNavigate, useParams } from "react-router-dom";
import { deleteAnnonce } from "../../JS/Actions/Actions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "@fortawesome/fontawesome-free-solid";
import { getOneAnnonce } from "../../JS/Actions/Actions";
import "./AfficherAnnonce.css";
import { MDBIcon } from "mdb-react-ui-kit";


const AnnonceDetails = () => {
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

  // const createdAt = annonce.createdAt;
  // const updatedAt = annonce.updatedAt;

  const { _id } = useParams();
  const annonce = useSelector((state) => state.AnnonceReducer);
  console.log(annonce);
  useEffect(() => {
    dispatch(getOneAnnonce(_id));
  }, [_id]);

  const navigate= useNavigate();

  return (
    <div className="card-detail">
      <h1 className="title">Annonce Details</h1>
      <Button variant="outlined" onClick={()=>navigate(-1)}><FontAwesomeIcon icon="fa-solid fa-backward" />Go back</Button>

      <Card
        style={{
          width: "600px",
          marginLeft: "auto",
          marginRight: "auto",
          marginBottom: "300px",
          marginTop:"50px"
        }}
        className="card"
      >
        <Card.Img
          variant="top"
          src="https://t4.ftcdn.net/jpg/04/70/29/97/360_F_470299797_UD0eoVMMSUbHCcNJCdv2t8B2g1GVqYgs.jpg"
        />
        <Card.Body>
          <Card.Title>{_id}</Card.Title>
          <Card.Text></Card.Text>
          <Card.Text> DT</Card.Text>
          <Card.Text>Created at </Card.Text>
          <Card.Text>Modified at </Card.Text>

          <Card.Text>Posted By </Card.Text>
          <div className="actions-btn">
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
              <Button variant="danger">
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

export default AnnonceDetails;
