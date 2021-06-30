import React, { useState } from 'react';
import { useHistory } from 'react-router';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Perfil() {
  const [user] = useState(JSON.parse(localStorage.getItem('user')) || '{}');
  const historia = useHistory();
  return (
    <>
      <Header title="Perfil" disableBtn />
      <p data-testid="profile-email">
        Email:
        { user.email }
      </p>

      <button
        label="Receitas Feitas"
        data-testid="profile-done-btn"
        type="button"
        onClick={ () => historia.push('/receitas-feitas') }
      />

      <button
        label="Receitas Favoritas"
        data-testid="profile-favorite-btn"
        type="button"
        onClick={ () => historia.push('/receitas-favoritas') }
      />

      <button
        label="Sair"
        data-testid="profile-logout-btn"
        type="button"
        onClick={ () => localStorage.clear() || historia.push('/') }
      />

      <Footer />
    </>
  );
}

export default Perfil;
