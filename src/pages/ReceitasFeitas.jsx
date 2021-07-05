import React/* , { useState }  */from 'react';
import Header from '../components/Header';

// function doneRecipes() {
//   const storage = JSON.parse(localStorage.getItem('doneRecipes'));
//   return storage || [];
// }

function ReceitasFeitas() {
  // const [listaReceitas, setListaReceitas] = useState(doneRecipes());
  return (
    <>
      <Header title="Receitas Feitas" />
      <p data-testid="page-title">Receitas Feitas</p>

      <button
        label="All"
        type="button"
        data-testid="filter-by-all-btn"
        onClick={ {} }
      >
        All
      </button>

      <button
        label="Food"
        type="button"
        data-testid="filter-by-food-btn"
        onClick={ {} }
      >
        Food
      </button>

      <button
        label="Drinks"
        type="button"
        data-testid="filter-by-drink-btn"
        onClick={ {} }
      >
        Drinks
      </button>
    </>
  );
}

export default ReceitasFeitas;
