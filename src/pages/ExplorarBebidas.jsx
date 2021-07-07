import React from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

function ExplorarBebidas() {
  const history = useHistory();
  const meSurpreenda = () => {
    fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php')
      .then((response) => response.json())
      .then(({ drinks }) => history.push(`/bebidas/${drinks[0].idDrink}`));
  };
  return (
    <>
      <p data-testid="page-title">Explorar Bebidas</p>
      <Header title="Explorar Bebidas" />
      <button
        type="button"
        data-testid="explore-by-ingredient"
        label="Por Ingredientes"
        onClick={ () => history.push('bebidas/ingredientes') }
      >
        Por Ingredientes
      </button>

      <button
        type="button"
        data-testid="explore-surprise"
        label="Me Surpreenda!"
        onClick={ () => meSurpreenda() }
      >
        Me Surpreenda!
      </button>
      <Footer />
    </>
  );
}

export default ExplorarBebidas;
