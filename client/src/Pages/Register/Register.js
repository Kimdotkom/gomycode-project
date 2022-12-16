import React, { useState } from 'react'
import { Button, Form, Container } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { register } from '../../JS/Actions/Actions';
import logo from '../../logo/logo.png';
import './Register.css';

const Register = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [newUser, setNewUser] = useState({});

  const handleChange = (e) =>{
    setNewUser({...newUser, [e.target.name] : e.target.value})
  }

  const handleUser = (e) =>{
    e.preventDefault()
    dispatch(register(newUser))
    navigate('/')
  }

  return (
    <Container id="main-container" className="d-grid h-100">
      
      <Form id="register-form" className="text-center w-100" >

      <img className="mb-4 logo-m" src={logo} alt="logo" />

      <h1 className="mb-3 fs-3 fw-normal">Please register</h1>

        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Control type="text" placeholder="Name" name='name' onChange={handleChange}/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control type="email" placeholder="Email address" name='email' onChange={handleChange}/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPhone">
          <Form.Control type="number" placeholder="Phone Number" name='phone' onChange={handleChange}/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control type="password" placeholder="Password" name='password' onChange={handleChange}/>
        </Form.Group>

        <div className="d-grid">
        <Button variant="primary" type="submit" onClick={handleUser}>
          Register
        </Button>
        </div>

      </Form>
    </Container>
  )
}

export default Register