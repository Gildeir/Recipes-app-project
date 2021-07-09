import React, { useContext, useState, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Carousel } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
// import ContextRecipe from '../provider/ContextRecipe';
import shareIcon from '../images/shareIcon.svg';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';
import ContextRecipe from '../provider/ContextRecipe';
import '../css/barraRolagem.css';

function DetalhesBebidas(props) {
  const history = useHistory();
  const { match: { params: { id } } } = props;
  const [recomandation, setRecomandation] = useState([]);
  const { heartColor, setHeartColor,
    ApiIdDetalhe,
    setApiIdDetalhe, funcHeartColor, setIdHeart, idHeart } = useContext(ContextRecipe);
  const location = useLocation();
  setIdHeart(location.pathname);
  console.log(`eu sou idHeart: ${idHeart}`);

  useEffect(() => {
    const getLocalFavUse = JSON.parse(localStorage.getItem('favoriteRecipes'));
    if (getLocalFavUse) {
      const filtrLocal = getLocalFavUse.filter((item) => (
        item.id === ApiIdDetalhe.idDrink));
      if (filtrLocal.length === 1) {
        setHeartColor(blackHeartIcon);
      } else {
        setHeartColor(whiteHeartIcon);
      }
    }
  }, [ApiIdDetalhe, setHeartColor]);

  useEffect(() => {
    fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=')
      .then((response) => response.json()).then(({ meals }) => setRecomandation(meals));
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then((result) => result.json()).then(({ drinks }) => setApiIdDetalhe(drinks[0]));
  }, [id, setApiIdDetalhe]);

  const six = 6;
  const ingredients = [
    { ingredient: ApiIdDetalhe.strIngredient1, measure: ApiIdDetalhe.strMeasure1 },
    { ingredient: ApiIdDetalhe.strIngredient2, measure: ApiIdDetalhe.strMeasure2 },
    { ingredient: ApiIdDetalhe.strIngredient3, measure: ApiIdDetalhe.strMeasure3 },
    { ingredient: ApiIdDetalhe.strIngredient4, measure: ApiIdDetalhe.strMeasure4 },
    { ingredient: ApiIdDetalhe.strIngredient5, measure: ApiIdDetalhe.strMeasure5 },
    { ingredient: ApiIdDetalhe.strIngredient6, measure: ApiIdDetalhe.strMeasure6 },
    { ingredient: ApiIdDetalhe.strIngredient7, measure: ApiIdDetalhe.strMeasure7 },
    { ingredient: ApiIdDetalhe.strIngredient8, measure: ApiIdDetalhe.strMeasure8 },
    { ingredient: ApiIdDetalhe.strIngredient9, measure: ApiIdDetalhe.strMeasure9 },
    { ingredient: ApiIdDetalhe.strIngedient10, measure: ApiIdDetalhe.strMeasure10 },
    { ingredient: ApiIdDetalhe.strIngedient11, measure: ApiIdDetalhe.strMeasure11 },
    { ingredient: ApiIdDetalhe.strIngredient12, measure: ApiIdDetalhe.strMeasure12 },
    { ingredient: ApiIdDetalhe.strIngredient13, measure: ApiIdDetalhe.strMeasure13 },
    { ingredient: ApiIdDetalhe.strIngredient14, measure: ApiIdDetalhe.strMeasure14 },
    { ingredient: ApiIdDetalhe.strIngredient15, measure: ApiIdDetalhe.strMeasure15 }];

  const historyURL = () => (
    history.push(`${history.location.pathname}/in-progress`));

  const renderIngredient = (ingre, index) => {
    if (ingre.ingredient === null
      || ingre.ingredient === ''
      || ingre.ingredient === undefined) {
      return null;
    }
    return (
      <li
        key={ index }
        data-testid={ `${index}-ingredient-name-and-measure` }
      >
        {ingre.ingredient}
        {' '}
        {ingre.measure}
      </li>);
  };

  return (
    <section>
      <h3>DetalhesBebidas</h3>
      <img
        src={ ApiIdDetalhe.strDrinkThumb }
        data-testid="recipe-photo"
        alt="foto bebida"
        width="100px"
      />
      <p data-testid="recipe-title">{ApiIdDetalhe.strDrink}</p>
      <img src={ shareIcon } alt="share" data-testid="share-btn" />
      <input
        type="image"
        label="favorite"
        src={ heartColor }
        onClick={ () => funcHeartColor(ApiIdDetalhe, id) }
        alt="heart"
        width="25px"
        data-testid="favorite-btn"
      />
      <p data-testid="recipe-category">{ApiIdDetalhe.strAlcoholic}</p>
      <ol>
        {ingredients.map((ingre, index) => (renderIngredient(ingre, index)))}
      </ol>
      <p data-testid="instructions">{ApiIdDetalhe.strInstructions}</p>

      <Carousel>
        {!recomandation
          ? <p>Carregando...</p>
          : recomandation.slice(0, six).map((drink, index) => (
            <Carousel.Item
              key={ index }
              data-testid={ `${index}-recomendation-card` }
            >
              <img
                className="carousel_image"
                src={ drink.strMealThumb }
                width="50px"
                alt="foto comida RECOMENDADA"
              />
              <p>{drink.strArea}</p>
              <p data-testid={ `${index}-recomendation-title` }>{drink.strMeal}</p>

              <img
                className="carousel_image"
                src={ drink.strMealThumb }
                width="50px"
                alt="foto comida RECOMENDADA"
              />
              <p>{drink.strArea}</p>
              <p data-testid={ `${index}-recomendation-title` }>{drink.strMeal}</p>
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

DetalhesBebidas.propTypes = {
  match: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default DetalhesBebidas;
