import React from 'react'
import { useFavorites } from '../../hooks/useLocalStorage';
import Card from "../../componenets/Card/Card";
import Header from '../Header/Header';

export default function Favorites() {
  const [favorites] = useFavorites();

  return (
    <>
      <Header />
      <h1 className="text-center my-2">Your Favorites</h1>
      <div className="container">
        <div className="row">
          {favorites.map((favorite, i) => (
            <div className="col-lg-4 col-md-6 col-sm-12 mb-4" key={favorite.id}>
              <Card name={favorite.name}
                image={favorite.image}
                genres={favorite.genres}
                id={favorite.id}
              />
            </div>
          ))}

        </div>

      </div>
    </>
  )
}
