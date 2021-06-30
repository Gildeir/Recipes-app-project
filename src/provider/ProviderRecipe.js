import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import ContextRecipe from './ContextRecipe';

function RecipeProvider({ children }) {
  const [login, setLogin] = useState({
    email: '',
    password: '',
  });
  const [apiDataFood, setApiDataFood] = useState([]);
  const [apiDataDrink, setApiDataDrink] = useState([]);
  const [userClick, setUserClick] = useState('');
  const [itemDigitado, setItemDigitado] = useState('');

  useEffect(() => {
    fetch('https://www.themealdb.com/api/json/v1/1/filter.php?i=butter')
      .then((response) => response.json())
      .then(({ meals }) => setApiDataFood(meals));
    fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=lemon')
      .then((response) => response.json())
      .then(({ drinks }) => setApiDataDrink(drinks));
  }, []);

  const location = useLocation();

  const searchAPI = () => {
    if (location.pathname === '/comidas') {
      console.log(location.pathname);
      if (userClick === 'Ingrediente') {
        fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${itemDigitado}`)
          .then((response) => response.json()).then(({ meals }) => {
            const limite = 12;
            const result = meals.slice(0, limite);
            setApiDataFood(result);
          });
      }
      if (userClick === 'busca por nome') {
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${itemDigitado}`)
          .then((response) => response.json()).then(({ meals }) => setApiDataFood(meals));
      }
      if (userClick === 'Primeira letra') {
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${itemDigitado}`)
          .then((response) => response.json()).then(({ meals }) => setApiDataFood(meals));
      }
    }
    if (location.pathname === '/bebidas') {
      if (userClick === 'Ingrediente') {
        fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${itemDigitado}`)
          .then((response) => response.json())
          .then(({ drinks }) => {
            const limite = 12;
            const result = drinks.slice(0, limite);
            setApiDataDrink(result);
          }).catch(() => setApiDataDrink(null));
      }
      if (userClick === 'busca por nome') {
        fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${itemDigitado}`)
          .then((response) => response.json())
          .then(({ drinks }) => {
            const twelve = 12;
            const result = drinks.slice(0, twelve);
            setApiDataDrink(result);
          });
      }
      if (userClick === 'Primeira letra') {
        fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${itemDigitado}`)
          .then((response) => response.json())
          .then(({ drinks }) => {
            const limit = 12;
            const result = drinks.slice(0, limit);
            setApiDataDrink(result);
          }).catch(() => setApiDataDrink(null));
      }
    }
  };

  const values = {
    login,
    setLogin,
    userClick,
    setUserClick,
    apiDataFood,
    apiDataDrink,
    searchAPI,
    itemDigitado,
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
