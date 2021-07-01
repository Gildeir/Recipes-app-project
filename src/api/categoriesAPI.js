const setCategories = {
  meals: 'https://www.themealdb.com/api/json/v1/1/list.php?c=list',
  drinks: 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list',
};

async function categoriesAPI(type) {
  const tempType = type;
  const categoriesIsFive = 5;
  const categoriesJSON = await fetch(setCategories[tempType]);
  const categories = await categoriesJSON.json();
  return categories[tempType].slice(0, categoriesIsFive);
}

export default categoriesAPI;
