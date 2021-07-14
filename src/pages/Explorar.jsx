import React from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../css/explorar.css';

function Explorar() {
  const history = useHistory();
  return (
    <>
      <Header title="Explore" />
      <div className="background-explore">
        <div className="all-button-explore">
          <Button
            className="button-explore"
            variant="dark"
            type="button"
            label="Explorar Comidas"
            data-testid="explore-food"
            onClick={ () => history.push('explorar/comidas') }
          >
            Explorar Comidas
          </Button>

          <Button
            className="button-explore"
            variant="dark"
            type="button"
            label="Explorar Bebidas"
            data-testid="explore-drinks"
            onClick={ () => history.push('explorar/bebidas') }
          >
            Explorar Bebidas
          </Button>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Explorar;
