
import React, {useState} from "react";
import { Button, Form, Container } from "react-bootstrap";
import { login } from "../../JS/Actions/Actions";
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import logo from '../../logo/logo.png';
import './Login.css';


const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [user, setUser] = useState({});

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleUser = (e) => {
    e.preventDefault();
    dispatch(login(user));
    
    navigate("/profile");
  };

  return (
    <Container id="main-container" className="d-grid h-100">


      <Form id="sign-in-form" className="text-center w-100" >
        
      <img className="mb-4 logo-m" src={logo} alt="logo" />

      <h1 className="mb-3 fs-3 fw-normal">Please sign in</h1>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control type="email" size="lg" placeholder="Email address" autoComplete="email" name='email' onChange={handleChange}/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control type="password" size="lg" placeholder="Password" autoComplete="current-password" name='password' onChange={handleChange}/>
        </Form.Group>

        <Form.Group className="mb-3 d-flex justify-content-center" controlId="formBasicCheckbox">
          <Form.Check label="Remember me" />
        </Form.Group>
        
        <div className="d-grid">
        <Button variant="primary" size="lg" type="submit" onClick={handleUser}>
          Sign in
        </Button>
        </div>
      <p className="mt-5 text-muted">&copy; 2022-2023</p>
      </Form>

      </Container>
  );
};

export default Login;
