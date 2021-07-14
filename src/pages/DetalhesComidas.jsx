import React, { useContext, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
// import { Carousel } from 'react-bootstrap';
import ContextRecipe from '../provider/ContextRecipe';
// import RecomendationFood from '../components/RecomendationFood';
// import { Link } from 'react-router-dom';
// import ContextRecipe from '../provider/ContextRecipe';
import shareIcon from '../images/shareIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import '../css/paginaDetalhe.css';

function DetalhesComidas(props) {
  const { heartColor, setHeartColor,
    ApiIdDetalhe, setApiIdDetalhe, funcHeartColor } = useContext(ContextRecipe);
  const { match: { params: { id } } } = props;
  const history = useHistory();
  const [recomandation, setRecomandation] = useState([]);

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
    fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=')
      .then((response) => response.json()).then(({ drinks }) => setRecomandation(drinks));
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then((result) => result.json()).then(({ meals }) => setApiIdDetalhe(meals[0]));
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
    history.push(`${history.location.pathname}/in-progress`)
  );

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
        {' '}
      </li>);
  };

  const youtube = () => (
    ApiIdDetalhe.strYoutube !== undefined
      ? ApiIdDetalhe.strYoutube.split('watch?v=').join('embed/') : '');

  return (
    <div className="detalhes">
      <section>
        <h3 className="tituloDetalhes">Detalhe Comida</h3>
        <div className="card">
          <img
            className="image-bebida"
            src={ ApiIdDetalhe.strMealThumb }
            data-testid="recipe-photo"
            alt="foto bebida"
            width="100px"
          />
          <p data-testid="recipe-title">{ApiIdDetalhe.strMeal}</p>
        </div>
        <div className="icons">
          <img
            className="shareImg"
            src={ shareIcon }
            alt="share"
            data-testid="share-btn"
          />
          <input
            type="image"
            label="favorite"
            src={ heartColor }
            onClick={ () => funcHeartColor(ApiIdDetalhe, id) }
            alt="heart"
            width="25px"
            data-testid="favorite-btn"
          />
          <p data-testid="recipe-category">{ApiIdDetalhe.strCategory}</p>
        </div>
        <div className="ol-list">
          <ol>
            {ingredients.map((ingre, index) => (renderIngredient(ingre, index)))}
          </ol>
          <ol data-testid="instructions">{ApiIdDetalhe.strInstructions}</ol>
        </div>

        <iframe
          className="iframe"
          width="100%"
          src={ youtube() }
          data-testid="video"
          title="YouTube video player"
        />
        <ol>
          <div className="carrousel">
            {recomandation.slice(0, six).map((drink, index) => (
              <li key={ index } data-testid={ `${index}-recomendation-card` }>
                <img
                  className="carousel_image"
                  src={ drink.strDrinkThumb }
                  alt="foto comida RECOMENDADA"
                />
                <p>{drink.strAlcoholic}</p>
                <p data-testid={ `${index}-recomendation-title` }>{drink.strDrink}</p>
              </li>))}
          </div>
        </ol>
      </section>
      <div className="button-iniciar-receita">
        <button
          className="start-recipe-btn"
          type="button"
          data-testid="start-recipe-btn"
          label="Iniciar Receita"
          onClick={ historyURL }
        >
          INICIAR RECEITA
        </button>
      </div>
    </div>

  );
}

DetalhesComidas.propTypes = {
  match: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default DetalhesComidas;
