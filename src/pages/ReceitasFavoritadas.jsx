import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import profileIcon from '../images/profileIcon.svg';
import shareIcon from '../images/shareIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';
// import Header from '../components/Header';

const copy = require('clipboard-copy');

function copyLink(index, setIndex) {
  if (index === setIndex) {
    return (
      <span>Link copiado!</span>
    );
  }
}

function ReceitasFavoritadas() {
  const [shareCopy, setShareCopy] = useState([false, '']);
  const [estado, setEstado] = useState('');
  const localGetFav = JSON.parse(localStorage.getItem('favoriteRecipes'));
  const history = useHistory();
  console.log(estado);
  const retiraFav = (id) => {
    const newFavs = JSON.stringify(localGetFav.filter((itens) => itens.id !== id));
    localStorage.setItem('favoriteRecipes', newFavs);
    history.push(`${history.location.pathname}`);
  };

  const handleFilter = () => {
    const filtered = localGetFav.filter((item) => item.type === estado);
    if (estado !== '') {
      return (
        filtered.map((item, index) => (
          <li key={ index }>
            <Link
              to={ item.type === 'comida'
                ? `/comidas/${item.id}` : `/bebidas/${item.id}` }
            >
              <img
                width="50 px"
                alt="recipe-img"
                data-testid={ `${index}-horizontal-image` }
                src={ item.image }
              />
              <p data-testid={ `${index}-horizontal-name` }>{ item.name }</p>
            </Link>
            <p data-testid={ `${index}-horizontal-top-text` }>{item.alcoholicOrNot}</p>
            <p data-testid={ `${index}-horizontal-top-text` }>
              {item.area}
              {' '}
              -
              {' '}
              {item.category}
            </p>
            <input
              type="image"
              src={ shareIcon }
              alt="share"
              data-testid={ `${index}-horizontal-share-btn` }
              onClick={ () => setShareCopy([true, index]) || copy(`http://localhost:3000/${item.type}s/${item.id}`) }
            />
            {shareCopy ? copyLink(index, shareCopy[1]) : null}
            <input
              type="image"
              src={ blackHeartIcon }
              alt="share"
              data-testid={ `${index}-horizontal-favorite-btn` }
              onClick={ () => retiraFav(item.id) }
            />
          </li>))
      );
    }
    return (
      localGetFav.map((item, index) => (
        <li key={ index }>
          <Link
            to={ item.type === 'comida'
              ? `/comidas/${item.id}` : `/bebidas/${item.id}` }
          >
            <img
              width="50 px"
              alt="recipe-img"
              data-testid={ `${index}-horizontal-image` }
              src={ item.image }
            />
            <p data-testid={ `${index}-horizontal-name` }>{ item.name }</p>
          </Link>
          <p data-testid={ `${index}-horizontal-top-text` }>{item.alcoholicOrNot}</p>
          <p data-testid={ `${index}-horizontal-top-text` }>
            {item.area}
            {' '}
            -
            {' '}
            {item.category}
          </p>
          <input
            type="image"
            src={ shareIcon }
            alt="share"
            data-testid={ `${index}-horizontal-share-btn` }
            onClick={ () => setShareCopy([true, index]) || copy(`http://localhost:3000/${item.type}s/${item.id}`) }
          />
          {shareCopy ? copyLink(index, shareCopy[1]) : null}
          <input
            type="image"
            src={ blackHeartIcon }
            alt="share"
            data-testid={ `${index}-horizontal-favorite-btn` }
            onClick={ () => retiraFav(item.id) }
          />
        </li>))
    );
  };

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
        onClick={ () => setEstado('') }
      >
        All
      </button>

      <button
        label="Food"
        type="button"
        data-testid="filter-by-food-btn"
        onClick={ () => setEstado('comida') }
      >
        Food
      </button>

      <button
        label="Drinks"
        type="button"
        data-testid="filter-by-drink-btn"
        onClick={ () => setEstado('bebida') }
      >
        Drinks
      </button>
      <ol>
        {localGetFav && handleFilter()}
      </ol>
    </>
  );
}

export default ReceitasFavoritadas;
