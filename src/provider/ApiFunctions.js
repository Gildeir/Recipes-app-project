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
