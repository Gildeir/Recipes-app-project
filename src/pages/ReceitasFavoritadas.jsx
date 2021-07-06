import React from 'react';
import { Link } from 'react-router-dom';
import profileIcon from '../images/profileIcon.svg';

function ReceitasFavoritadas() {
  // const localGetFav = JSON.parse(localStorage.getItem('favoriteRecipes'));
  return (
    <>
      <header title="Receitas Favoritas" />
      <Link to="/perfil">
        <input
          type="image"
          alt="profile icon"
          src={ profileIcon }
          data-testid="profile-top-btn"
        />
      </Link>
      <p data-testid="page-title">Receitas Favoritas</p>

      <button
        label="All"
        type="button"
        data-testid="filter-by-all-btn"
        onClick={ {} }
      >
        All
      </button>

      <button
        label="Food"
        type="button"
        data-testid="filter-by-food-btn"
        onClick={ {} }
      >
        Food
      </button>

      <button
        label="Drinks"
        type="button"
        data-testid="filter-by-drink-btn"
        onClick={ {} }
      >
        Drinks
      </button>
    </>
  );
}

export default ReceitasFavoritadas;
