import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';

function Header() {
  const [enableSearch, setEnableSearch] = useState(false);
  const [userClick, setUserClick] = useState('');
  console.log(userClick);
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

        <h3 data-testid="page-title">Comidas</h3>

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
          value="ingrediente"
          label="inputIngredients"
          alt="search input"
          onChange={ {} }
        /> : null }
        <br />

        <input
          type="radio"
          data-testid="ingredient-search-radio"
          name="food"
          value="ingredients"
          label="name"
          onChange={ handleFilter }
        />

        <input
          type="radio"
          data-testid="name-search-radio"
          name="food"
          value="searchByName"
          label="name"
          onChange={ handleFilter }
        />

        <input
          type="radio"
          data-testid="first-letter-search-radio"
          name="food"
          value="searchByFirstLetter"
          label="letter"
          onChange={ handleFilter }
        />
        <Button
          type="button"
          data-testid="exec-search-btn"
          label="search"
          onClick={ {} }
        />
      </section>
    </header>
  );
}

export default Header;
