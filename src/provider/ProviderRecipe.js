import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import ContextRecipe from './ContextRecipe';

function RecipeProvider({ children }) {
  const location = useLocation();
  const [login, setLogin] = useState({
    email: '',
    password: '',
  });
  const [apiDataFood, setApiDataFood] = useState([]);
  const [apiDataDrink, setApiDataDrink] = useState([]);
  const [userClick, setUserClick] = useState('');
  const [itemDigitado, setItemDigitado] = useState('');
  const [categoryBtn, setCategoryBtn] = useState('');

  useEffect(() => {
    fetch('https://www.themealdb.com/api/json/v1/1/filter.php?i=butter')
      .then((response) => response.json())
      .then(({ meals }) => setApiDataFood(meals));
    fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=lemon')
      .then((response) => response.json())
      .then(({ drinks }) => setApiDataDrink(drinks));
    // botôes de categoria comida
    if (location.pathname === '/comidas') {
      fetch('https://www.themealdb.com/api/json/v1/1/list.php?c=list')
        .then((response) => response.json())
        .then(({ meals }) => {
          const limite = 5;
          const result = meals.slice(0, limite);
          setCategoryBtn(result);
        }).catch(() => setCategoryBtn(null));
    }
    // botôes de categoria bebidas
    if (location.pathname === '/bebidas') {
      fetch('https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list')
        .then((response) => response.json())
        .then(({ drinks }) => {
          const limite = 5;
          const result = drinks.slice(0, limite);
          setCategoryBtn(result);
        }).catch(() => setCategoryBtn(null));
    }
  }, []);

  const searchAPI = () => {
    if (location.pathname === '/comidas') {
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
    categoryBtn,
    setCategoryBtn,
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
