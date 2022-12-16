import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUserAnnonces } from '../../JS/Actions/Actions';
import AnnonceCard from '../AnnonceCard/AnnonceCard';
import '../AnnonceList/AnnonceList.css';

const MyAnnonces = () => {
const dispatch = useDispatch();

const load = useSelector(state => state.annonceReducer.load);

const myAnnoncesList = useSelector(state => state.annonceReducer.myAnnonces)

useEffect(() => {
 dispatch(getUserAnnonces())
}, [dispatch]);



  return (
    <div className='list'>
      <h1>My Annonces</h1>
      <div className='cards'>
      {load ? <i className="fa fa-spinner fa-spin">Loading</i>
      : myAnnoncesList.map((el) => <AnnonceCard annonce = {el} key= {el._id} />
      
       )}
      </div>
    </div>
  )
}

export default MyAnnonces ;