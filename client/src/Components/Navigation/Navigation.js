import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Container, Form, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import {logout} from "../../JS/Actions/Actions";
import logo from "../../logo/logo.png";
import "./Navigation.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '@fortawesome/fontawesome-free-solid'

const Navigation = ({inputSearch, setInputSearch}) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.AuthReducer.user);
  const isAuth = useSelector((state) => state.AuthReducer.isAuth);

  const handleChange=(e)=>{
    setInputSearch(e.target.value)
   }
  
  return (
    <div>
      <Navbar bg="light" expand="lg" fixed="top">
        <Container>
        <a  href="/"><img className="logo" src={logo} alt="logo" /></a>
          <Navbar.Brand className="me-auto" href="/">oto.tn</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
                      <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              onChange={handleChange}
            />
            <Button variant="outline-success">Search</Button>
          </Form>
          </Nav>
          <Nav className="ml-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/get-annonces">Annonces</Nav.Link>
            
            <Nav.Link href="/users">Users</Nav.Link>
           
            

            

            {/* {isAuth ? (
              <Link to="/login"><Button onClick={() => {dispatch(logout())}}>Logout</Button></Link>) : 
              (<div><Link to="/login">
              <Button>Login</Button>
            </Link>
            <Link to="/register">
              <Button>Register</Button>
            </Link></div>)
            } */}

            {isAuth ? 
            (<><Nav.Link href="/add-annonce">Add Annonce</Nav.Link>
            <NavDropdown title={user && user.name} id="basic-nav-dropdown" >
              <NavDropdown.Item href="/profile"><FontAwesomeIcon icon="fa-solid fa-user" /> My profile</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/login"><Button onClick={() => {dispatch(logout())}}><FontAwesomeIcon icon="fa-solid fa-right-from-bracket" />Logout</Button></NavDropdown.Item>
            </NavDropdown></>) : 
                          (<div><Link to="/login">
                          <Button>Login</Button>
                        </Link>
                        <Link to="/register">
                          <Button>Register</Button>
                        </Link></div>)
            }

          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navigation;
