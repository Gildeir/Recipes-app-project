import React, { useState, useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';
import ContextRecipe from '../provider/ContextRecipe';
import ChangeTitle from './ChangeTitle';

import '../css/header.css';

function Header() {
  const { setUserClick,
    searchAPI,
    setItemDigitado,
    itemDigitado, userClick } = useContext(ContextRecipe);
  const [enableSearch, setEnableSearch] = useState(false);
  const location = useLocation();

  const handleSearch = () => {
    if (enableSearch === true) {
      setEnableSearch(false);
    }
    if (enableSearch === false) {
      setEnableSearch(true);
    }
  };

  function handleFilter({ target: { value } }) {
    setUserClick(value);
  }

  ChangeTitle();

  const filterSearch = ({ value }) => {
    setItemDigitado(value);
    if (userClick === 'Primeira letra' && itemDigitado.length > 0) {
      console.log('entrou no if');
      global.alert('Sua busca deve conter somente 1 (um) caracter');
    }
  };

  const alertZeroFound = async () => {
    await searchAPI();
  };

  const searchBtn = () => {
    if (location.pathname === '/comidas') {
      return (
        <input
          type="image"
          src={ searchIcon }
          data-testid="search-top-btn"
          alt="search icon"
          onClick={ () => handleSearch() }
        />
      );
    }
    if (location.pathname === '/bebidas') {
      return (
        <input
          type="image"
          src={ searchIcon }
          data-testid="search-top-btn"
          alt="search icon"
          onClick={ () => handleSearch() }
        />
      );
    }
  };

  return (
    <div>

      <header className="header_bar">
        <section>
          <Link to="/perfil">
            <input
              type="image"
              alt="profile icon"
              src={ profileIcon }
              data-testid="profile-top-btn"
            />
          </Link>

          {/* <h3 data-testid="page-title">Comidas</h3> */}
          {ChangeTitle()}
          {searchBtn()}

          {enableSearch === true ? <input
            type="text"
            data-testid="search-input"
            label="inputIngredients"
            alt="search input"
            onChange={ ({ target }) => filterSearch(target) }
          /> : null }
          <br />

          <label htmlFor="Ingrediente" className="radiobtn-header">
            {' '}
            Ingrediente
            <input
              className="radiobtn-header"
              type="radio"
              data-testid="ingredient-search-radio"
              name="food"
              value="Ingrediente"
              label="Ingrediente"
              onChange={ handleFilter }
            />
          </label>
          <label htmlFor="Nome" className="radiobtn-header">
            {' '}
            Nome
            <input
              type="radio"
              data-testid="name-search-radio"
              name="food"
              value="busca por nome"
              label="Nome"
              onChange={ handleFilter }
            />
          </label>
          <label htmlFor="Letra" className="radiobtn-header">
            Letra
            <input
              type="radio"
              data-testid="first-letter-search-radio"
              name="food"
              value="Primeira letra"
              label="Letra"
              onChange={ handleFilter }
            />
          </label>
          <Button
            variant="dark"
            type="button"
            data-testid="exec-search-btn"
            label="Buscar"
            onClick={ () => alertZeroFound() }
          >
            Buscar
          </Button>

        </section>
      </header>
    </div>
  );
}

export default Header;
