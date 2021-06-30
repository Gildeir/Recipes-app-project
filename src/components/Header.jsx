import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';
import ContextRecipe from '../provider/ContextRecipe';
import ChangeTitle from './ChangeTitle';

function Header() {
  const { setUserClick,
    searchAPI,
    setItemDigitado,
    itemDigitado, userClick, apiDataFood, apiDataDrink } = useContext(ContextRecipe);
  // const { pathname } = useLocation();
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

  ChangeTitle();

  const filterSearch = ({ value }) => {
    setItemDigitado(value);
    if (userClick === 'Primeira letra' && itemDigitado.length > 0) {
      console.log('entrou no if');
      // eslint-disable-next-line no-alert
      alert('Sua busca deve conter somente 1 (um) caracter');
    }
  };
  console.log(apiDataDrink);
  const alertZeroFound = async () => {
    const alert = 'Sinto muito, não encontramos nenhuma receita para esses filtros.';
    await searchAPI();
    if (apiDataFood || apiDataDrink === null) {
      console.log('entrei no if do null');
      alert(alert);
    }
  };

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
        {ChangeTitle()}

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
          onChange={ ({ target }) => filterSearch(target) }
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
          onClick={ () => alertZeroFound() }
        />
      </section>
    </header>
  );
}

export default Header;
