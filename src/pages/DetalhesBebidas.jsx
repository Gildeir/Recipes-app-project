import React, { useContext, useState } from 'react';
// import { Link } from 'react-router-dom';
import ContextRecipe from '../provider/ContextRecipe';
import shareIcon from '../images/shareIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';

function DetalhesBebidas(props) {
  const [heartColor, setHeartColor] = useState(whiteHeartIcon);

  const changeColorHeart = () => {
    if (heartColor === whiteHeartIcon) {
      setHeartColor(blackHeartIcon);
    }
    setHeartColor(whiteHeartIcon);
  };

  const { apiDataDrink } = useContext(ContextRecipe);
  const { match: { params: { id } } } = props;
  const itemFilter = apiDataDrink.filter((item) => item.idDrink === id);
  const six = 6;
  const itemSlice = itemFilter.slice(0, six);
  const ingredients = [itemFilter.strIngredient1,
    itemFilter.strIngredient2,
    itemFilter.strIngredient3,
    itemFilter.strIngredient4,
    itemFilter.strIngredient5,
    itemFilter.strIngredient6,
    itemFilter.strIngredient7,
    itemFilter.strIngredient8,
    itemFilter.strIngredient9,
    itemFilter.strIngredient10,
    itemFilter.strIngredient11,
    itemFilter.strIngredient12,
    itemFilter.strIngredient13,
    itemFilter.strIngredient14,
    itemFilter.strIngredient15];

  console.log(itemFilter);
  return (
    <section>
      <p data-testid="page-title">DetalhesBebidas</p>
      <img
        src={ itemFilter.strDrinkThumb }
        data-testid="recipe-photo"
        alt="foto bebida"
      />
      <p data-testid="recipe-title">{itemFilter.strDrink}</p>
      <img src={ shareIcon } alt="share" data-testid="share-btn" />
      <input
        type="img"
        label="favorite"
        src={ heartColor }
        onClick={ () => changeColorHeart() }
      />
      <p data-testid="recipe-category">{itemFilter.strCategory}</p>
      <ol>
        {ingredients.map((ingredient, index) => (
          <li
            key={ index }
            data-testid={ `${index}-ingredient-name-and-measure` }
          >
            {ingredient}
          </li>))}
      </ol>
      <p data-testid="instructions">{itemFilter.strInstructions}</p>
      <iframe
        width="560"
        height="315"
        src={ ingredients.strVideo }
        data-testid="video"
        title="YouTube video player"
        allow="accelerometer; autoplay;
        clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      />
      <ol>
        {itemSlice.map((drink, index) => (
          <li key={ index } data-testid={ `${index}-recomendation-card` }>
            <img src={ drink.strDrinkThumb } alt="foto bebida RECOMENDADA" />
            <p>{drink.strAlcoholic}</p>
            <p>{drink.strDrink}</p>
          </li>))}
      </ol>
      <button type="button" data-testid="start-recipe-btn">INICIAR RECEITA</button>
    </section>

  );
}

export default DetalhesBebidas;
