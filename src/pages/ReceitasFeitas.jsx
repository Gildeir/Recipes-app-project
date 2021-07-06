import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../components/Header';

import shareIcon from '../images/shareIcon.svg';

const copy = require('clipboard-copy');

function receitasProntas() {
  const storage = JSON.parse(localStorage.getItem('doneRecipes'));
  return storage || [];
}

function renderizaReceitas(data, index) {
  if (data.type === 'comida') {
    return (
      <>
        <p
          data-testid={ `${index}-horizontal-top-text` }
        >
          { `${data.area} - ${data.category}` }
        </p>
        <p data-testid={ `${index}-${data.tags[0]}-horizontal-tag` }>{ data.tags[0]}</p>
        <p data-testid={ `${index}-${data.tags[1]}-horizontal-tag` }>{ data.tags[1]}</p>
      </>
    );
  }
  if (data.type === 'bebida') {
    return (
      <p
        data-testid={ `${index}-horizontal-top-text` }
      >
        { `${data.alcoholicOrNot}` }
      </p>
    );
  }
}

function copyLink(index, setIndex) {
  if (index === setIndex) {
    return (
      <span>Link copiado!</span>
    );
  }
}

function ReceitasFeitas() {
  const [listaReceitas, setListaReceitas] = useState(receitasProntas());
  const [shareCopy, setShareCopy] = useState([false, '']);
  const history = useHistory();

  return (
    <>
      <Header title="Receitas Feitas" />
      <p data-testid="page-title">Receitas Feitas</p>

      <button
        label="All"
        type="button"
        data-testid="filter-by-all-btn"
        onClick={ () => setListaReceitas(receitasProntas()) }
      >
        All
      </button>

      <button
        label="Food"
        type="button"
        data-testid="filter-by-food-btn"
        onClick={ () => setListaReceitas(
          receitasProntas().filter((data) => data.type === 'comida'),
        ) }
      >
        Food
      </button>

      <button
        label="Drinks"
        type="button"
        data-testid="filter-by-drink-btn"
        onClick={ () => setListaReceitas(
          receitasProntas().filter((data) => data.type === 'bebida'),
        ) }
      >
        Drinks
      </button>

      {listaReceitas.map((receita, index) => (
        <div key={ index }>
          <input
            type="image"
            data-testid={ `${index}-horizontal-image` }
            src={ receita.image }
            alt="imagem da receita"
            name={ receita.name }
            width="100%"
            onClick={ () => history.push(`${receita.type}s/${receita.id}`) }
          />

          <a
            href={ `${receita.type}s/${receita.id}` }
            data-testid={ `${index}-horizontal-name` }
          >
            { receita.name }
          </a>
          <p data-testid={ `${index}-horizontal-done-date` }>{receita.doneDate}</p>
          {renderizaReceitas(receita, index)}
          <input
            type="image"
            src={ shareIcon }
            alt="share"
            data-testid={ `${index}-horizontal-share-btn` }
            onClick={ () => setShareCopy([true, index]) || copy(`http://localhost:3000/${receita.type}s/${receita.id}`) }
          />
          {shareCopy ? copyLink(index, shareCopy[1]) : null}

        </div>
      ))}
    </>
  );
}

// progressRecipes

export default ReceitasFeitas;
