import React, { useState, useEffect, useContext } from 'react';
import '../css/receitaEmProgresso.css';
import PropTypes from 'prop-types';
import ContextRecipe from '../provider/ContextRecipe';
import shareIcon from '../images/shareIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';

const copy = require('clipboard-copy');

function copyLink(index, setIndex) {
  if (index === setIndex) {
    return (
      <span>Link copiado!</span>
    );
  }
}
function ProgressoBebidas(props) {
  const { match: { params: { id } } } = props;
  const { ApiIdDetalhe,
    setApiIdDetalhe,
    funcHeartColor,
    heartColor, setHeartColor, array, setArray, idHeart } = useContext(ContextRecipe);
  const [shareCopy, setShareCopy] = useState([false, '']);
  const [complete, setComplete] = useState(true);


  const handleComplete = ({value}) => {
    console.log(array)
    setArray([...array, value]);
     setComplete(!complete)
  }

  useEffect(() => {
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then((result) => result.json()).then(({ drinks }) => setApiIdDetalhe(drinks[0]));
  }, [setApiIdDetalhe, id]);
  // const [verified, setVerified] = useState([]);

  useEffect(() => {
    const getLocalFavUse = JSON.parse(localStorage.getItem('favoriteRecipes'));
    if (getLocalFavUse) {
      const filtrLocal = getLocalFavUse.filter((item) => (
        item.id === ApiIdDetalhe.idMeal));
      if (filtrLocal.length === 1) {
        setHeartColor(blackHeartIcon);
      } else {
        setHeartColor(whiteHeartIcon);
      }
    }
  }, [ApiIdDetalhe, setHeartColor]);

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
    { ingredient: ApiIdDetalhe.strIngredient10, measure: ApiIdDetalhe.strMeasure10 },
    { ingredient: ApiIdDetalhe.strIngredient11, measure: ApiIdDetalhe.strMeasure11 },
    { ingredient: ApiIdDetalhe.strIngredient12, measure: ApiIdDetalhe.strMeasure12 },
    { ingredient: ApiIdDetalhe.strIngredient13, measure: ApiIdDetalhe.strMeasure13 },
    { ingredient: ApiIdDetalhe.strIngredient14, measure: ApiIdDetalhe.strMeasure14 },
    { ingredient: ApiIdDetalhe.strIngredient15, measure: ApiIdDetalhe.strMeasure15 },
    { ingredient: ApiIdDetalhe.strIngredient16, measure: ApiIdDetalhe.strMeasure16 },
    { ingredient: ApiIdDetalhe.strIngredient17, measure: ApiIdDetalhe.strMeasure17 },
    { ingredient: ApiIdDetalhe.strIngredient18, measure: ApiIdDetalhe.strMeasure18 },
    { ingredient: ApiIdDetalhe.strIngredient19, measure: ApiIdDetalhe.strMeasure19 },
    { ingredient: ApiIdDetalhe.strIngredient20, measure: ApiIdDetalhe.strMeasure20 }];

  const buttonAvaliable = () => {
    const ingreTela = document.getElementsByClassName('ingredientes').length;
    if (ingreTela !== array.length || ingreTela === 0) {
      return true;
    }
    return false;
  };
  const renderIngredient = (ingre, index) => {
  if (ingre.ingredient === null
          || ingre.ingredient === ''
          || ingre.ingredient === undefined) {
      return null;
    }
    return (
      <div className="ingredientes">
        <div
          key={ index }
          data-testid={ `${index}-ingredient-step` }
        >
          <p>{ingre.ingredient}</p>
          <input
            type="checkbox"
            name={ ingre.ingredient }
            value={ ingre.ingredient }
            id={ ingre.ingredient }
            onClick={ ({ target }) => handleComplete(target)}
          />
          <label htmlFor={ ingre.ingredient }>{ ingre.measure }</label>
        </div>
      </div>
    );
  };

  return (
    <div className="in-progree-page">
      <h3 className="first-title">Recipe in Progress</h3>
      <div className="recipe-photo-father">
        <img
          className="recipe-photo"
          src={ ApiIdDetalhe.strDrinkThumb || ApiIdDetalhe.strMealThumb }
          data-testid="recipe-photo"
          alt="Thumbnail"
        />
      </div>
      <div className="recipe-name-father">
        <p className="recipe-name" data-testid="recipe-title">
          { ApiIdDetalhe.strDrink || ApiIdDetalhe.strMeal}
        </p>
      </div>
      <div className="icons-progress">
        <input
          type="image"
          src={ shareIcon }
          alt="share"
          data-testid="share-btn"
          onClick={ () => setShareCopy(true) || copy((`http://localhost:3000/bebidas/${id}`)) }
        />
        {shareCopy ? copyLink(shareCopy[1]) : null}

        {/* botão de favoritar */}
        <input
          type="image"
          label="favorite"
          src={ heartColor }
          onClick={ () => funcHeartColor(ApiIdDetalhe, id) }
          alt="heart"
          width="25px"
          data-testid="favorite-btn"
        />
     
        <h5 data-testid="recipe-category">
          {ApiIdDetalhe.strAlcoholic ? ApiIdDetalhe.strAlcoholic : ApiIdDetalhe.strCategory}
        </h5>
       </div>
      <h4>Ingredientes</h4>
      {ingredients.map((ingre, index) => renderIngredient(ingre, index))}

      {/* texto da categoria */}
      <h4>Instruções</h4>
      <p className="instrucao-text" data-testid="instructions">{ApiIdDetalhe.strInstructions}</p>

      {/* botão para finalizar */}
      <div className="start-recipe-btn-father-progress">
        <button className="start-recipe-btn-progress"
          data-testid="finish-recipe-btn"
          label="Finalizar a Receita"
          type="button"
          disabled={ buttonAvaliable() }
          onClick={ {} }
        >
          Finalizar Receita
        </button>
      </div>

    </div>
  );
}

ProgressoBebidas.propTypes = {
  match: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default ProgressoBebidas;
