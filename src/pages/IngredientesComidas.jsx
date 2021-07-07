import React, { useState, useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ContextRecipe from '../provider/ContextRecipe';

function IngredientesComidas() {
  const history = useHistory();
  const [ingredientes, setIngredientes] = useState([]);
  const { setApiDataFood } = useContext(ContextRecipe);
  useEffect(() => {
    fetch('https://www.themealdb.com/api/json/v1/1/list.php?i=list')
      .then((response) => response.json())
      .then(({ meals }) => {
        const limite = 12;
        const result = meals.slice(0, limite);
        setIngredientes(result);
      });
  }, []);

  const searchByIngredient = ({ name }) => {
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${name}`)
      .then((response) => response.json())
      .then(({ meals }) => {
        const limite = 12;
        const result = meals.slice(0, limite);
        setApiDataFood(result);
      })
      .then(history.push('/comidas'));
  };
  return (
    <>
      <Header />
      <p data-testid="page-title">Explorar Ingredientes</p>
      { ingredientes.map((ingredient, index) => (
        <div
          key={ index }
          data-testid={ `${index}-ingredient-card` }
        >
          <input
            type="image"
            data-testid={ `${index}-card-img` }
            alt="ingredient"
            src={ `https://www.themealdb.com/images/ingredients/${ingredient.strIngredient}-Small.png` }
            width="5%"
            name={ ingredient.strIngredient }
            onClick={ ({ target }) => searchByIngredient(target) }
          />
          <p data-testid={ `${index}-card-name` }>{ingredient.strIngredient}</p>
        </div>
      ))}
      <Footer />
    </>
  );
}

export default IngredientesComidas;
