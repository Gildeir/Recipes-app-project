import React from 'react';
import Header from '../components/Header';

function ReceitasFavoritas() {
  const localGetFav = JSON.parse(localStorage.getItem('favoriteRecipes'));
  return (
    <>
      <Header />
      <p data-testid="page-title">
        {localGetFav.map((favorites, index) => <p key={ index }>{favorites.id}</p>)}
      </p>
    </>
  );
}

export default ReceitasFavoritas;
