import React, { /* useState, */ useContext } from 'react';
import PropTypes from 'prop-types';
import ContextRecipe from '../provider/ContextRecipe';
import shareIcon from '../images/shareIcon.svg';
// import heartColor from '../images/heartColor.svg';
import ingredientRecie from '../api/IngredientRecie';

// const copy = require('clipboard-copy');

function ProgressoComidas(props) {
  const { match: { params: { id } } } = props;
  const { ApiIdDetalhe, funcHeartColor, heartColor } = useContext(ContextRecipe);
  // const [verified, setVerified] = useState([]);
  console.log(ingredientRecie());

  return (
    <>
      <img
        src={ ApiIdDetalhe.strMealThumb || ApiIdDetalhe.strDrinkThumb }
        data-testid="recipe-photo"
        alt="Thumbnail"
      />
      <h1 data-testid="recipe-title">
        { ApiIdDetalhe.strMealThumb || ApiIdDetalhe.strDrinkThumb }
      </h1>
      <input
        type="image"
        src={ shareIcon }
        alt="share"
        data-testid="share-btn"
        onClick={ {} } // clipboard
      />

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
      <h2>Ingredientes</h2>
      {ingredientRecie().map((ingredient, index) => (
        <div
          key={ index }
          data-testid={ `${index}-ingredient-step` }
        >
          <input
            type="checkbox"
            name={ ingredient }
            value={ ingredient }
            id={ ingredient }
            onClick={ ({ target }) => console.log(target) }
          />
          <label htmlFor={ ingredient }>{ ingredient }</label>
        </div>
      ))}

      {/* texto da categoria */}
      <h2>Instruções</h2>
      <p data-testid="instructions">{ApiIdDetalhe.strInstructions}</p>

      {/* botão para finalizar */}
      <button
        data-testid="finish-recipe-btn"
        label="Finalizar a Receita"
        type="button"
        onClick={ {} }
      >
        Finalizar Receita
      </button>

    </>
  );
}

ProgressoComidas.propTypes = {
  match: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default ProgressoComidas;
