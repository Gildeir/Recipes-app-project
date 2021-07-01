import React from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

function ExplorarComidas() {
  /* Ao clicar no botão "Me Surpreenda!" da tela de explorar comidas a rota muda para a página de detalhes de uma comida aleatória obtida através do endpoint https://www.themealdb.com/api/json/v1/1/random.php;
Ao clicar no botão "Me Surpreenda!" da tela de explorar bebidas a rota muda para a página de detalhes de uma bebida aleatória obtida através do endpoint https://www.thecocktaildb.com/api/json/v1/1/random.php. */

  const history = useHistory();
  return (
    <>
      <Header title="Explorar Comidas" />
      <button
        type="button"
        data-testid="explore-by-ingredient"
        label="Por Ingredientes"
        onClick={ () => history.push('comidas/ingredientes') }
      >
        Por Ingredientes
      </button>

      <button
        type="button"
        data-testid="explore-by-area"
        label="Por Local de Origem"
        onClick={ () => history.push('comidas/area') }
      >
        Por Local de Origem
      </button>

      <button
        type="button"
        data-testid="explore-surprise"
        label="Me Surpreenda!"
        onClick={ {} }
      >
        Me Surpreenda!
      </button>
      <Footer />
    </>
  );
}

export default ExplorarComidas;
