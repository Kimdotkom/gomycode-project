import { useState } from "react";
import { Button, Form, Container} from "react-bootstrap";
import {useDispatch} from 'react-redux';
import { addAnnonce} from "../../JS/Actions/Actions";
import {Link} from 'react-router-dom';
import logo from '../../logo/logo.png';


const AddAnnonce = () => {
  
  const dispatch = useDispatch();
const [newAnnonce, setNewAnnonce] = useState({name :"", description :"", prix :0 , images :""})



const handleChange = (e) =>{
  setNewAnnonce({...newAnnonce, [e.target.name] : e.target.value})
}

const add = () =>{
  dispatch(addAnnonce(newAnnonce))
}

  return (
    <Container id="main-container" className="d-grid h-100">
      
      <Form id="add-annonce-form" className="text-center w-100" >

        <img className="mb-4 logo-m" src={logo} alt="logo" />

        <h1 className="mb-3 fs-3 fw-normal">Add Annonce</h1>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Annonce Title</Form.Label>
          <Form.Control type="text" placeholder="Enter Annonce Title" name="name" onChange={handleChange}/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Description</Form.Label>
          <Form.Control type="text" placeholder="Annonce Description" name="description" onChange={handleChange}/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPrice">
          <Form.Label>Price (Dt)</Form.Label>
          <Form.Control type="number" placeholder="Price" name="price" onChange={handleChange}/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Label>Image</Form.Label>
          <Form.Control type="text" placeholder="Annonce Image" name="image" onChange={handleChange}/>
        </Form.Group>

        <Link to='/get-annonces'>
        <Button variant="primary" type="submit" onClick={()=> add()}>
          Add
        </Button>
        </Link>

      </Form>
    </Container>
  );
};

export default AddAnnonce;
