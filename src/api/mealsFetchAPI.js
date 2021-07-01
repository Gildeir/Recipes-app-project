async function mealsFetchAPI() {
  const endpoint = 'https://www.themealdb.com/api/json/v1/1/filter.php?i=';
  const mealJSON = await fetch(endpoint);
  const meal = await mealJSON.json();
  return meal.meals;
}

export default mealsFetchAPI;
