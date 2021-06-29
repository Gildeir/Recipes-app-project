import React from 'react';
import { Route } from 'react-router-dom';
// import { Login, Comidas } from './pages/IndexPages';
import Login from './pages/Login';
import Comidas from './pages/Comidas';
import ProviderRecipes from './provider/ProviderRecipe';
import './index.css';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <ProviderRecipes>
      <Route exact path="/" component={ Login } />
      <Route exact path="/comidas" component={ Comidas } />
      {/* <Route exact path="/bebidas" component={ Bebidas } />
        <Route exact path="/comidas/:id" component={ DetalhesComidas } />
        <Route exact path="/bebidas/:id" component={ DetalhesBebidas } />
        <Route exact path="/bebidas/:id" component={ DetalhesBebida } />
        <Route path="/comidas/:id/in-progress" component={ ProgressComida } />
        <Route path="/bebidas/:id/in-progress" component={ ProgressBebidas } />
        <Route exact path="/explorar" component={ Explorar } />
        <Route exact path="/explorar/comidas" component={ ExplorarComidas } />
        <Route exact path="/explorar/bebidas" component={ ExplorarBebidas } />
        <Route path="/explorar/bebidas/ingredientes" component={ IngredientesBebidas } />
        <Route path="/explorar/comidas/ingredientes" component={ IngredientesComidas } />
        <Route path="/explorar/comidas/area" component={ OrigemComidas } />
        <Route path="/perfil" component={ Perfil } />
        <Route path="/receitas-feitas" component={ ReceitasFeitas } />
        <Route path="/receitas-favoritas" component={ ReceitasFavoritas } /> */}
    </ProviderRecipes>
  );
}

export default App;
