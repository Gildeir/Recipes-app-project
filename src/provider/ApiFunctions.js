import blackHeartIcon from '../images/blackHeartIcon.svg';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';

export const Comidas = (itemDigitado, userClick) => {
  if (userClick === 'Ingrediente') {
    return fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${itemDigitado}`)
      .then((response) => response.json());
  }
  if (userClick === 'busca por nome') {
    return fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${itemDigitado}`)
      .then((response) => response.json());
  }
  if (userClick === 'Primeira letra') {
    return fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${itemDigitado}`)
      .then((response) => response.json());
  }
};

export const Bebidas = (itemDigitado, userClick) => {
  if (userClick === 'Ingrediente') {
    return fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${itemDigitado}`)
      .then((response) => response.json());
  }
  if (userClick === 'busca por nome') {
    return fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${itemDigitado}`)
      .then((response) => response.json());
  }
  if (userClick === 'Primeira letra') {
    return fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${itemDigitado}`)
      .then((response) => response.json());
  }
};

export const changeColorHeart = (heartColor, setHeartColor, ApiIdDetalhe, id) => {
  const getLocalFav = JSON.parse(localStorage.getItem('favoriteRecipes'));
  if (heartColor === blackHeartIcon) {
    setHeartColor(whiteHeartIcon);
      const filterLocal = getLocalFav.filter((itens) => itens.id !== id);
      if (getLocalFav.length === 1) {
        localStorage.setItem('favoriteRecipes', JSON.stringify([]));
      } else {
        localStorage.setItem('favoriteRecipes', JSON.stringify(filterLocal));
      }

  }
  if (heartColor === whiteHeartIcon) {
    setHeartColor(blackHeartIcon);
    if (getLocalFav === null || getLocalFav === []) {
      localStorage.setItem('favoriteRecipes', JSON.stringify(
        [{ id: ApiIdDetalhe.idDrink,
          type: 'bebida',
          area: '',
          category: ApiIdDetalhe.strCategory,
          alcoholicOrNot: ApiIdDetalhe.strAlcoholic,
          name: ApiIdDetalhe.strDrink,
          image: ApiIdDetalhe.strDrinkThumb,
        }],
      ));
    } else {
      localStorage.setItem('favoriteRecipes', JSON.stringify(
        [...getLocalFav,
          { id: ApiIdDetalhe.idDrink,
            type: 'bebida',
            area: '',
            category: ApiIdDetalhe.strCategory,
            alcoholicOrNot: ApiIdDetalhe.strAlcoholic,
            name: ApiIdDetalhe.strDrink,
            image: ApiIdDetalhe.strDrinkThumb,
          }],
      ));
    }
  }
};