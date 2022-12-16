import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAnnonces } from '../../JS/Actions/Actions';
import AnnonceCard from '../AnnonceCard/AnnonceCard';
import FilterAnnonce from '../FilterAnnonce/FilterAnnonce';
import './AnnonceList.css';

const AnnonceList = ({ filtredAnnonces }) => {
const dispatch = useDispatch();
const listAnnonces = useSelector(state=> state.annonceReducer.listAnnonces);
const load = useSelector(state => state.annonceReducer.load);
const [inputSearch, setInputSearch] = useState("");


useEffect(() => {
 dispatch(getAnnonces())
 
}, [dispatch]);



  return (
    <div className='list'>
      <h1 className='title' >Liste des Annonces</h1>

      <FilterAnnonce inputSearch={inputSearch} setInputSearch={setInputSearch} />
      
      <div className='cards'>
      {/* {load ? <i className="fa fa-spinner fa-spin">Loading</i>
      : inputSearch ==="" ?  listAnnonces.map((el) => <AnnonceCard annonce = {el} key= {el._id} />) :
      listAnnonces.filter(
        (annonce) =>
          annonce.title.toUpperCase()
            .includes(inputSearch.toUpperCase().trim()) 
      ).map((el) => <AnnonceCard annonce = {el} key= {el._id} />
      
       )} */}
                   {filtredAnnonces.length > 0 ? (
              filtredAnnonces.map((el) => (
                <AnnonceCard annonce={el} key={el.id} />
              ))
            ) : (
              <p>No result</p>
            )}
      </div>
    </div>
  )
}

export default AnnonceList ;