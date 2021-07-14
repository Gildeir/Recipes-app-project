import React, { useState, useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ContextRecipe from '../provider/ContextRecipe';
import '../css/comidaBebida.css';

function IngredientesBebidas() {
  const history = useHistory();
  const [ingredientes, setIngredientes] = useState([]);
  const { setApiDataDrink } = useContext(ContextRecipe);
  useEffect(() => {
    fetch('https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list')
      .then((response) => response.json())
      .then(({ drinks }) => {
        const limite = 12;
        const result = drinks.slice(0, limite);
        setIngredientes(result);
      });
  }, []);

  const searchByIngredient = ({ name }) => {
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${name}`)
      .then((response) => response.json())
      .then(({ drinks }) => {
        const limite = 12;
        const result = drinks.slice(0, limite);
        setApiDataDrink(result);
      })
      .then(history.push('/bebidas'));
  };

  return (
    <>
      <Header />
      <p className="title" data-testid="page-title">Explorar Ingredientes</p>
      <ol>
        { ingredientes.map((ingredient, index) => (
          <li
            className="liPrincipal"
            key={ index }
            data-testid={ `${index}-ingredient-card` }
          >
            <input
              type="image"
              data-testid={ `${index}-card-img` }
              alt="ingredient"
              src={ `https://www.thecocktaildb.com/images/ingredients/${ingredient.strIngredient1}-Small.png` }
              width="160px"
              name={ ingredient.strIngredient1 }
              onClick={ ({ target }) => searchByIngredient(target) }
            />
            <p data-testid={ `${index}-card-name` }>{ingredient.strIngredient1}</p>
          </li>
        ))}
      </ol>
      <div className="espaco" />
      <Footer />
    </>
  );
}

export default IngredientesBebidas;
