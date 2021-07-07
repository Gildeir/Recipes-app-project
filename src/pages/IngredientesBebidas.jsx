import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

function IngredientesBebidas() {
  const [ingredientes, setIngredientes] = useState([]);

  useEffect(() => {
    fetch('https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list')
      .then((response) => response.json())
      .then(({ drinks }) => {
        const limite = 12;
        const result = drinks.slice(0, limite);
        setIngredientes(result);
      });
  }, []);

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
            width="100%"
            name={ ingredient.strIngredient }
            onClick={ {} }
          />
          <p data-testid={ `${index}-card-name` } />
        </div>
      ))}
      <Footer />
    </>
  );
}

export default IngredientesBebidas;
