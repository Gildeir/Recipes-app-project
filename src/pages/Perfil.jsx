import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { Button } from 'react-bootstrap';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../css/profile.css';

function Perfil() {
  const [user] = useState(JSON.parse(localStorage.getItem('user')) || '{}');
  const history = useHistory();
  return (
    <>
      <Header title="Perfil" disableBtn />
      <div className="background-profile">
        <p data-testid="profile-email" className="profile-email">
          Email:
          { user.email }
        </p>
        <div className="all-buttons-profile">
          <Button
            className="button-profile"
            variant="dark"
            label="Receitas Feitas"
            data-testid="profile-done-btn"
            type="button"
            onClick={ () => history.push('/receitas-feitas') }
          >
            Receitas Feitas
          </Button>

          <Button
            className="button-profile"
            variant="dark"
            label="Receitas Favoritas"
            data-testid="profile-favorite-btn"
            type="button"
            onClick={ () => history.push('/receitas-favoritas') }
          >
            Receitas Favoritas
          </Button>

          <Button
            className="button-profile"
            variant="dark"
            label="Sair"
            data-testid="profile-logout-btn"
            type="button"
            onClick={ () => localStorage.clear() || history.push('/') }
          >
            Sair
          </Button>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Perfil;
