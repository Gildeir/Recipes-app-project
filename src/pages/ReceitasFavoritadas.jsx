import React from 'react';
import { Link } from 'react-router-dom';
import profileIcon from '../images/profileIcon.svg';
import shareIcon from '../images/shareIcon.svg';
// import Header from '../components/Header';

function ReceitasFavoritadas() {
  const localGetFav = JSON.parse(localStorage.getItem('favoriteRecipes'));
  return (
    <>
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
      <ol>
        {localGetFav.map((item, index) => (
          <li key={ index }>
            <img width="50 px" alt="recipe-img" src={ item.image } />
            <p>{ item.name }</p>
            <p>{ item.alcoholicOrNot }</p>
            <input
              type="image"
              src={ shareIcon }
              alt="share"
              data-testid={ `${index}-horizontal-share-btn` }
              onClick={ {} }
            />
            <button
              type="button"
              onClick={ {} }
            >
              Desfavoritar
            </button>
          </li>))}
      </ol>
    </>
  );
}

export default ReceitasFavoritadas;
