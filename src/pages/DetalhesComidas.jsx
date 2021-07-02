import React, { useContext, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Carousel } from 'react-bootstrap';
import ContextRecipe from '../provider/ContextRecipe';
// import RecomendationFood from '../components/RecomendationFood';
// import { Link } from 'react-router-dom';
// import ContextRecipe from '../provider/ContextRecipe';
import shareIcon from '../images/shareIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';

import '../css/barraRolagem.css';

function DetalhesComidas(props) {
  const { resultApiID, setResultApiID } = useContext(ContextRecipe);
  const { match: { params: { id } } } = props;
  const history = useHistory();
  const [heartColor, setHeartColor] = useState(whiteHeartIcon);
  const [recomandation, setRecomandation] = useState([]);

  const changeColorHeart = () => {
    if (heartColor === blackHeartIcon) {
      setHeartColor(whiteHeartIcon);
    }
    if (heartColor === whiteHeartIcon) {
      setHeartColor(blackHeartIcon);
    }
  };
    // https://www.thecocktaildb.com/api/json/v1/1/search.php?s=;
  useEffect(() => {
    fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=')
      .then((response) => response.json()).then(({ drinks }) => setRecomandation(drinks));
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then((result) => result.json()).then(({ meals }) => setResultApiID(meals[0]));
  }, []);

  const six = 6;
  const ingredients = [
    { ingredient: resultApiID.strIngredient1, measure: resultApiID.strMeasure1 },
    { ingredient: resultApiID.strIngredient2, measure: resultApiID.strMeasure2 },
    { ingredient: resultApiID.strIngredient3, measure: resultApiID.strMeasure3 },
    { ingredient: resultApiID.strIngredient4, measure: resultApiID.strMeasure4 },
    { ingredient: resultApiID.strIngredient5, measure: resultApiID.strMeasure5 },
    { ingredient: resultApiID.strIngredient6, measure: resultApiID.strMeasure6 },
    { ingredient: resultApiID.strIngredient7, measure: resultApiID.strMeasure7 },
    { ingredient: resultApiID.strIngredient8, measure: resultApiID.strMeasure8 },
    { ingredient: resultApiID.strIngredient9, measure: resultApiID.strMeasure9 },
    { ingredient: resultApiID.strIngredient10, measure: resultApiID.strMeasure10 },
    { ingredient: resultApiID.strIngredient11, measure: resultApiID.strMeasure11 },
    { ingredient: resultApiID.strIngredient12, measure: resultApiID.strMeasure12 },
    { ingredient: resultApiID.strIngredient13, measure: resultApiID.strMeasure13 },
    { ingredient: resultApiID.strIngredient14, measure: resultApiID.strMeasure14 },
    { ingredient: resultApiID.strIngredient15, measure: resultApiID.strMeasure15 },
    { ingredient: resultApiID.strIngredient16, measure: resultApiID.strMeasure16 },
    { ingredient: resultApiID.strIngredient17, measure: resultApiID.strMeasure17 },
    { ingredient: resultApiID.strIngredient18, measure: resultApiID.strMeasure18 },
    { ingredient: resultApiID.strIngredient19, measure: resultApiID.strMeasure19 },
    { ingredient: resultApiID.strIngredient20, measure: resultApiID.strMeasure20 }];

  const historyURL = () => (history.push(`${history.location.pathname}/in-progress`));

  return (
    <section>
      <p data-testid="page-title">Detalhe Comida</p>
      <img
        src={ resultApiID.strMealThumb }
        data-testid="recipe-photo"
        alt="foto bebida"
        width="100px"
      />
      <p data-testid="recipe-title">{resultApiID.strMeal}</p>
      <img src={ shareIcon } alt="share" data-testid="share-btn" />
      <input
        type="image"
        label="favorite"
        src={ heartColor }
        onClick={ () => changeColorHeart() }
        alt="heart"
        width="25px"
        data-testid="favorite-btn"
      />
      <p data-testid="recipe-category">{resultApiID.strCategory}</p>
      <ol>
        {ingredients.map((ingre, index) => (
          <li
            key={ index }
            data-testid={ `${index}-ingredient-name-and-measure` }
          >
            {ingre.ingredient}
            {ingre.measure}
          </li>))}
      </ol>
      <p data-testid="instructions">{resultApiID.strInstructions}</p>
      <iframe
        width="560"
        height="315"
        src={ resultApiID.strYoutube }
        data-testid="video"
        title="YouTube video player"
      />

      <Carousel>
        {recomandation.slice(0, six).map((drink, index) => (
          <Carousel.Item key={ index } data-testid={ `${index}-recomendation-card` }>
            <img
              className="carousel_image"
              src={ drink.strDrinkThumb }
              width="50px"
              alt="foto comida RECOMENDADA"
            />
            <p>{drink.strAlcoholic}</p>
            <p data-testid={ `${index}-recomendation-title` }>{drink.strDrink}</p>

            <img
              className="carousel_image"
              src={ drink.strDrinkThumb }
              width="50px"
              alt="foto comida RECOMENDADA"
            />
            <p>{drink.strAlcoholic}</p>
            <p data-testid={ `${index}-recomendation-title` }>{drink.strDrink}</p>

            {/* <RecomendationFood key={ index } drink={ drink } /> */}
          </Carousel.Item>))}
      </Carousel>

      <button
        className="start-recipe-btn"
        type="button"
        data-testid="start-recipe-btn"
        label="Iniciar Receita"
        onClick={ historyURL }
      >
        INICIAR RECEITA
      </button>
    </section>

  );
}

DetalhesComidas.propTypes = {
  match: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default DetalhesComidas;
