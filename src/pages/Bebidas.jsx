import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
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
              <div>
                <Link to={ `/bebidas/${iten.idDrink}` }>
                  <img
                    data-testid={ `${index}-card-img` }
                    src={ iten.strDrinkThumb }
                    width="50px"
                    alt="drink"
                  />
                  <p data-testid={ `${index}-card-name` }>{ iten.strDrink }</p>
                </Link>
              </div>
            </li>)) : <p>Carregando...</p>}
      </ol>
      <Footer />
    </>
  );
}

export default Bebidas;
