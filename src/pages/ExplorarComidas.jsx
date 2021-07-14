import React from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../css/explorarComidas.css';

function ExplorarComidas() {
  /* Ao clicar no botão "Me Surpreenda!" da tela de explorar comidas a rota muda para a página de detalhes de uma comida aleatória obtida através do endpoint https://www.themealdb.com/api/json/v1/1/random.php;
Ao clicar no botão "Me Surpreenda!" da tela de explorar bebidas a rota muda para a página de detalhes de uma bebida aleatória obtida através do endpoint https://www.thecocktaildb.com/api/json/v1/1/random.php. */
  const history = useHistory();
  const meSurpreenda = () => {
    fetch('https://www.themealdb.com/api/json/v1/1/random.php')
      .then((response) => response.json())
      .then(({ meals }) => history.push(`/comidas/${meals[0].idMeal}`));
  };
  return (
    <>
      <Header title="Explorar Comidas" />
      <div className="background-explore-food">
        <h3 className="title-explore-food" data-testid="page-title">Explorar Comidas</h3>
        <div className="all-buttons-explore-food">
          <Button
            className="button-explore-food"
            variant="dark"
            type="button"
            data-testid="explore-by-ingredient"
            label="Por Ingredientes"
            onClick={ () => history.push('comidas/ingredientes') }
          >
            Por Ingredientes
          </Button>

          <Button
            className="button-explore-food "
            variant="dark"
            type="button"
            data-testid="explore-by-area"
            label="Por Local de Origem"
            onClick={ () => history.push('comidas/area') }
          >
            Por Local de Origem
          </Button>

          <Button
            className="button-explore-food "
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

export default ExplorarComidas;
