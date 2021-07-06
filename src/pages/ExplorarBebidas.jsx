import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

function ExplorarBebidas() {
  return (
    <>
      <p data-testid="page-title">Explorar Bebidas</p>
      <Header title="Explorar Bebidas" />
      <button
        type="button"
        data-testid="explore-by-ingredient"
        label="Por Ingredientes"
        onClick={ {} }
      >
        Por Ingredientes
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

export default ExplorarBebidas;
