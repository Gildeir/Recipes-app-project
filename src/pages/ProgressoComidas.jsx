import React, { /* useState, */ useContext } from 'react';
import ContextRecipe from '../provider/ContextRecipe';
import shareIcon from '../images/shareIcon.svg';
// import heartColor from '../images/heartColor.svg';
import ingredientRecie from '../api/IngredientRecie';

// const copy = require('clipboard-copy');

function ProgressoComidas() {
  const { resultApiID } = useContext(ContextRecipe);
  // const [verify, setVerify] = useState([]);
  console.log(ingredientRecie());

  // botão de verificação de receitas
  // function handleClickVerify(index) {
  //   setVerify(verify.includes(index)
  //     ? verify.filter((check) => check !== index) : [index, ...verify]);
  // }

  return (
    <>
      {/* imagem da comida */}
      <img
        src={ resultApiID.strMealThumb || resultApiID.strDrinkThumb }
        data-testid="recipe-photo"
        alt="Thumbnail"
      />

      {/* título da comida */}
      <h1
        data-testid="recipe-title"
      >
        { resultApiID.strMealThumb || resultApiID.strDrinkThumb }
      </h1>

      {/* botão de compartilhar */}
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
        // src={ /* heartColor */ }
        // onClick={ () => changeColorHeart() }
        alt="heart"
        width="25px"
        data-testid="favorite-btn"
      />

      {/* texto da categoria */}
      <h5
        data-testid="recipe-category"
      >
        {resultApiID.strAlcoholic ? resultApiID.strAlcoholic : resultApiID.strCategory}

      </h5>

      {/* verificação de ingredientes  -data-testid=${index}-ingredient-step */}
      <h2>Ingredientes</h2>

      {ingredientRecie().map((ingre, index) => (
        <li
          key={ index }
          data-testid={ `${index}-ingredient-name-and-measure` }
        >
          {ingre.ingredient}
          {ingre.measure}
        </li>))}

      {/* {ingredientRecie().map((ingredient, index) => (
        <div
          key={ index }
          data-testid={ `${index}-ingredient-step` }
        >
          <input
            verify={ verify.includes(index) }
            type="checkbox"
            name={ ingredient }
            value={ ingredient }
            id={ ingredient }
            onClick={ () => handleClickVerify() }
          />
          <label htmlFor={ ingredient }>{ ingredient }</label>
        </div>
      ))} */}

      {/* texto da categoria */}
      <h2>Instruções</h2>
      <p data-testid="instructions">{resultApiID.strInstructions}</p>

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

export default ProgressoComidas;
