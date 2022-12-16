import React from "react";
import { Button, Card } from "react-bootstrap";
import { useSelector } from "react-redux";
import "./Profile.css";

const Profile = () => {
  const user = useSelector((state) => state.AuthReducer.user);
  return (
    <div>
      <h1>Profile</h1>

      <Card style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Circle-icons-profile.svg/2048px-Circle-icons-profile.svg.png"
        />
        <Card.Body>
          <Card.Title>Hello {user && user.name}</Card.Title>
          <Card.Text>Email: {user && user.email}</Card.Text>
          <Card.Text>Phone: {user && user.phone}</Card.Text>

          <Button variant="primary">Update Informations</Button>
          <Button variant="primary" href="/MyAnnonces">Mes Annonces</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Profile;
