import React, { useContext } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ContextRecipe from '../provider/ContextRecipe';

function Comidas() {
  // const { apiData } = useContext(ContextRecipe);
  // console.log(apidata);
  return (
    <>
      <Header />
      {/* {apiData ? apiData.map((iten) => <li>{iten.strMeal}</li>) : <p>Carregando...</p>} */}
      <Footer />
    </>
  );
}

export default Comidas;
