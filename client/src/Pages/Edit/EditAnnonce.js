import React, { useState } from 'react'
import {Form, Button} from 'react-bootstrap';
import {Link, useMatch, useNavigate} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import { editAnnonce } from '../../JS/Actions/Actions';

const EditAnnonce = () => {
  const dispatch = useDispatch();
  const [newAnnonce, setNewAnnonce] = useState({name :"", description :"", prix :""})

  const navigate = useNavigate();
  const match = useMatch('/update-annonce/:id');

  const handleChange=(e) =>{
    setNewAnnonce({...newAnnonce, [e.target.name]: e.target.value})
  }

  const edit =() =>{
    dispatch(editAnnonce(match.params.id , newAnnonce))
    navigate(-1)
  }

  return (
    <div>
      <h1>Edit Annonce</h1>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Annonce Title</Form.Label>
          <Form.Control type="text" placeholder="Edit Annonce Title" name="name" 
          value={newAnnonce.name}
          onChange={handleChange}/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Description</Form.Label>
          <Form.Control type="text" placeholder="Edit Annonce Description" name="description" 
          value={newAnnonce.description}
          onChange={handleChange}/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Prix</Form.Label>
          <Form.Control type="number" placeholder="Edit The price" name="prix" 
          value={newAnnonce.prix}
          onChange={handleChange}/>
        </Form.Group>

        <Link to='/get-annonces'>
        <Button variant="primary" type="submit" onClick={()=> edit()}>
          Edit
        </Button>
        </Link>

      </Form>

    </div>
  )
}

export default EditAnnonce