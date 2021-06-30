import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import ContextRecipe from './ContextRecipe';

function RecipeProvider({ children }) {
  const [login, setLogin] = useState({
    email: '',
    password: '',
  });
  const [apiData, setApiData] = useState([]);
  const [userClick, setUserClick] = useState('');
  const [itemDigitado, setItemDigitado] = useState('');
  console.log(apiData);
  console.log(itemDigitado);
  console.log(userClick);
  const location = useLocation();

  const searchAPI = () => {
    if (location.pathname === '/comidas') {
      if (userClick === 'Ingrediente') {
        fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${itemDigitado}`)
          .then((response) => response.json()).then((response) => setApiData(response));
      }
      if (userClick === 'busca por nome') {
        fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?s=${itemDigitado}`)
          .then((response) => response.json()).then((response) => setApiData(response));
      }
      if (userClick === 'Primeira letra') {
        fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?f=${itemDigitado}`)
          .then((response) => response.json()).then((response) => setApiData(response));
      }
    }
    if (location.pathname === '/bebidas') {
      if (userClick === 'Ingrediente') {
        fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${itemDigitado}`)
          .then((response) => response.json()).then((response) => setApiData(response));
      }
      if (userClick === 'busca por nome') {
        fetch(`www.thecocktaildb.com/api/json/v1/1/search.php?s=${itemDigitado}`)
          .then((response) => response.json()).then((response) => setApiData(response));
      }
      if (userClick === 'Primeira letra') {
        fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${itemDigitado}`)
          .then((response) => response.json()).then((response) => setApiData(response));
      }
    }
  };

  const values = {
    login,
    setLogin,
    setUserClick,
    apiData,
    searchAPI,
    setItemDigitado,
  };

  return (
    <ContextRecipe.Provider value={ values }>
      {children}
    </ContextRecipe.Provider>
  );
}

RecipeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default RecipeProvider;
