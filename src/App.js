import './index.css';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Route } from 'react-router-dom';
import ProviderRecipes from './provider/ProviderRecipe';
import Login from './pages/Login';
import Comidas from './pages/Comidas';
import Bebidas from './pages/Bebidas';
import DetalhesComidas from './pages/DetalhesComidas';
import DetalhesBebidas from './pages/DetalhesBebidas';
import ProgressoComidas from './pages/ProgressoComidas';
import ProgressoBebidas from './pages/ProgressoBebidas';
import NotFound from './pages/NotFound';
import Explorar from './pages/Explorar';
import ExplorarComidas from './pages/ExplorarComidas';
import ExplorarBebidas from './pages/ExplorarBebidas';
import IngredientesBebidas from './pages/IngredientesBebidas';
import IngredientesComidas from './pages/IngredientesComidas';
import Perfil from './pages/Perfil';
import OrigemComidas from './pages/OrigemComidas';
import ReceitasFeitas from './pages/ReceitasFeitas';
import ReceitasFavoritadas from './pages/ReceitasFavoritadas';

function App() {
  return (
    <ProviderRecipes>
      <Route exact path="/" component={ Login } />
      <Route exact path="/comidas" component={ Comidas } />
      <Route exact path="/bebidas" component={ Bebidas } />
      <Route
        exact
        path="/comidas/:id"
        render={ (props) => <DetalhesComidas { ...props } /> }
      />
      <Route
        exact
        path="/bebidas/:id"
        render={ (props) => <DetalhesBebidas { ...props } /> }
      />
      <Route path="/comidas/:id/in-progress" component={ ProgressoComidas } />
      <Route path="/bebidas/:id/in-progress" component={ ProgressoBebidas } />
      <Route exact path="/explorar" component={ Explorar } />
      <Route exact path="/explorar/comidas" component={ ExplorarComidas } />
      <Route path="/explorar/bebidas/area" component={ NotFound } />
      <Route exact path="/explorar/bebidas" component={ ExplorarBebidas } />
      <Route path="/explorar/bebidas/ingredientes" component={ IngredientesBebidas } />
      <Route path="/explorar/comidas/ingredientes" component={ IngredientesComidas } />
      <Route path="/explorar/comidas/area" component={ OrigemComidas } />
      <Route path="/perfil" component={ Perfil } />
      <Route path="/receitas-feitas" component={ ReceitasFeitas } />
      <Route path="/receitas-favoritadas" component={ ReceitasFavoritadas } />
    </ProviderRecipes>
  );
}

export default App;
