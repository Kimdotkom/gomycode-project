import React from 'react'
import AnnonceCard from '../../Components/AnnonceCard/AnnonceCard'

const Home = ({filtredAnnonces}) => {
  return (
    <div>
        <h1>Home...</h1>

        <div className="productlist">
            {filtredAnnonces.length > 0 ? (
              filtredAnnonces.map((el) => (
                <AnnonceCard product={el} key={el.id} />
              ))
            ) : (
              <p>No result</p>
            )}
          </div>
    </div>
  )
}

export default Home