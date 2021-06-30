import React, { useState, useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';
import ContextRecipe from '../provider/ContextRecipe';

function Header(props) {
  const { setUserClick, searchAPI, setItemDigitado } = useContext(ContextRecipe);
  const { pathname } = useLocation();
  const [enableSearch, setEnableSearch] = useState(false);

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

  function changeTitle() {
    if (pathname === '/comidas') {
      return <h3 data-testid="page-title">Comidas</h3>;
    }
    if (pathname === '/perfil') {
      return <h3 data-testid="page-title">Perfil</h3>;
    }
    if (pathname === '/bebidas') {
      return <h3 data-testid="page-title">Bebidas</h3>;
    }
    if (pathname === '/explorar') {
      return <h3 data-testid="page-title">Explorar</h3>;
    }
  }

  return (
    /* - Tem os data-testids `profile-top-btn`, `page-title` e `search-top-btn` */
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
        {changeTitle()}

        <input
          type="image"
          src={ searchIcon }
          data-testid="search-top-btn"
          alt="search icon"
          onClick={ () => handleSearch() }
        />
        {enableSearch === true ? <input
          type="text"
          data-testid="search-input"
          label="inputIngredients"
          alt="search input"
          onChange={ (event) => setItemDigitado(event.target.value) }
        /> : null }
        <br />
        <label htmlFor="Ingrediente">
          {' '}
          Ingrediente
          <input
            type="radio"
            data-testid="ingredient-search-radio"
            name="food"
            value="Ingrediente"
            label="Ingrediente"
            onChange={ handleFilter }
          />
        </label>
        <label htmlFor="Nome">
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
        <label htmlFor="Letra">
          {' '}
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
          type="button"
          data-testid="exec-search-btn"
          label="Buscar"
          onClick={ () => searchAPI() }
        />
      </section>
    </header>
  );
}

export default Header;
