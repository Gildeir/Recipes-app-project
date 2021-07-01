import React from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Explorar() {
  const history = useHistory();
  return (
    <>
      <Header title="Explore" />

      <button
        type="button"
        label="Explorar Comidas"
        data-testid="explore-food"
        onClick={ () => history.push('explorar/comidas') }
      >
        Explorar Comidas
      </button>

      <button
        type="button"
        label="Explorar Bebidas"
        data-testid="explore-drinks"
        onClick={ () => history.push('explorar/bebidas') }
      >
        Explorar Bebidas
      </button>
      <Footer />
    </>
  );
}

export default Explorar;
