import { Form, Button } from "react-bootstrap";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getUsers } from "../../JS/Actions/Actions";

const AddUser = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Register</h1>

      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter Your Name" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter Your Email" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Label>Phone</Form.Label>
          <Form.Control type="number" placeholder="Enter Your Phone Number" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Register
        </Button>
      </Form>
    </div>
  );
};

export default AddUser;
