import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import ContextRecipe from './ContextRecipe';
import { Comidas, Bebidas, ChangeColorHeart } from './ApiFunctions';
import blackHeartIcon from '../images/blackHeartIcon.svg';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';

function RecipeProvider({ children }) {
  const [heartColor, setHeartColor] = useState(whiteHeartIcon);
  const [ApiIdDetalhe, setApiIdDetalhe] = useState({});
  const location = useLocation();
  const [login, setLogin] = useState({
    email: '',
    password: '',
  });
  const [apiDataFood, setApiDataFood] = useState([]);
  const [apiDataDrink, setApiDataDrink] = useState([]);
  const [userClick, setUserClick] = useState('');
  const [itemDigitado, setItemDigitado] = useState('');
  const [categoryBtn, setCategoryBtn] = useState([]);
  const [resultApiID, setResultApiID] = useState({});
  const [array, setArray] = useState([]);
  const [idHeart, setIdHeart] = useState('');


  useEffect(() => {
    // botôes de categoria comida
    if (location.pathname === '/comidas') {
      fetch('https://www.themealdb.com/api/json/v1/1/list.php?c=list')
        .then((response) => response.json())
        .then(({ meals }) => {
          const limite = 5;
          const result = meals.slice(0, limite);
          setCategoryBtn(result);
        });
    }
    // botôes de categoria bebidas
    if (location.pathname === '/bebidas') {
      fetch('https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list')
        .then((response) => response.json())
        .then(({ drinks }) => {
          const limite = 5;
          const result = drinks.slice(0, limite);
          const categories = [...result, result[3] = {strCategory: "Other / Unknown"}];
          setCategoryBtn(result);
        });
    }
  }, [location.pathname]);

  const searchAPI = () => {
    if (location.pathname === '/comidas') {
      Comidas(itemDigitado, userClick).then(({ meals }) => {
        setApiDataFood(meals);
        if (meals !== null) {
          const limite = 12;
          const result = meals.slice(0, limite);
          setApiDataFood(result);
        }
      });
    }
    if (location.pathname === '/bebidas') {
      Bebidas(itemDigitado, userClick).then(({ drinks }) => {
        setApiDataDrink(drinks);
        if (drinks !== null) {
          const limite = 12;
          const result = drinks.slice(0, limite);
          setApiDataDrink(result);
        }
      }).catch(() => setApiDataDrink(null));
    }
  };

  const heart = {
    heartColor,
    setHeartColor,
  };

  const funcHeartColor = (ApiIdDetalhe, id) => {
    ChangeColorHeart(heart, ApiIdDetalhe, id, location.pathname);
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
    resultApiID,
    setResultApiID,
    setApiDataFood,
    setApiDataDrink,
    heartColor,
    setHeartColor,
    ApiIdDetalhe,
    setApiIdDetalhe,
    funcHeartColor,
    array, 
    setArray,
    idHeart,
    setIdHeart,
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
