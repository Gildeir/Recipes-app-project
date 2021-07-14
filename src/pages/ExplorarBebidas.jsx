import React from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../css/explorarBebidas.css';

function ExplorarBebidas() {
  const history = useHistory();
  const meSurpreenda = () => {
    fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php')
      .then((response) => response.json())
      .then(({ drinks }) => history.push(`/bebidas/${drinks[0].idDrink}`));
  };

  return (
    <>
      <Header title="Explorar Bebidas" />
      <div className="background-explore-drink">
        <h3 data-testid="page-title" className="title-explore-drink">Explorar Bebidas</h3>
        <div className="all-buttons-explore-drink">
          <Button
            className="button-explore-drink"
            variant="dark"
            type="button"
            data-testid="explore-by-ingredient"
            label="Por Ingredientes"
            onClick={ () => history.push('bebidas/ingredientes') }
          >
            Por Ingredientes
          </Button>

          <Button
            className="button-explore-drink"
            variant="dark"
            type="button"
            data-testid="explore-surprise"
            label="Me Surpreenda!"
            onClick={ () => meSurpreenda() }
          >
            Me Surpreenda!
          </Button>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ExplorarBebidas;
