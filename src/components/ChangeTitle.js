import React from 'react';
import { useLocation } from 'react-router-dom';

function ChangeTitle() {
  const { pathname } = useLocation();
  if (pathname === '/comidas') {
    return <h3 data-testid="page-title">Comidas</h3>;
  }
  if (pathname === '/perfil') {
    return <h3 data-testid="page-title">Perfil</h3>;
  }
  if (pathname === '/bebidas') {
    return <h3 data-testid="page-title">Bebidas</h3>;
  }
  if (pathname === '/explorar') {
    return <h3 data-testid="page-title">Explorar</h3>;
  }
}

export default ChangeTitle;
