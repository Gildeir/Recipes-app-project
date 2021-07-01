import React, { useContext } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ContextRecipe from '../provider/ContextRecipe';

function Bebidas() {
  const { apiDataDrink } = useContext(ContextRecipe);
  return (
    <>
      <Header />
      <ol>
        {apiDataDrink
          ? apiDataDrink.map((iten, index) => (
            <li
              data-testid={ `${index}-recipe-card` }
              key={ index }
            >
              <img
                data-testid={ `${index}-card-img` }
                src={ iten.strDrinkThumb }
                width="50px"
                alt="drink"
              />
              <p data-testid={ `${index}-card-name` }>{ iten.strDrink }</p>
            </li>)) : <p>Carregando...</p>}
      </ol>
      <Footer />
    </>
  );
}

export default Bebidas;
