import React, { useContext, useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ContextRecipe from '../provider/ContextRecipe';

function Comidas() {
  const {
    apiDataFood,
    categoryBtn,
    itemDigitado,
    setItemDigitado,
    setApiDataFood,
  } = useContext(ContextRecipe);
  const history = useHistory();
  const [dataCategory, setDataCategory] = useState([]);
  const [select, setSelect] = useState(false);

  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${itemDigitado}`)
      .then((response) => response.json())
      .then(({ meals }) => {
        const limite = 12;
        const result = meals.slice(0, limite);
        setDataCategory(result);
      }).catch(() => setDataCategory(null));
  }, [itemDigitado, setDataCategory]);

  async function handleClick({ value }) {
    if (value === itemDigitado) {
      setSelect(false);
      setItemDigitado('');
    }
    if (select === false) {
      setSelect(true);
      setItemDigitado(value);
    }
  }

  useEffect(() => {
    fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=')
      .then((response) => response.json())
      .then(({ meals }) => {
        const limite = 12;
        const result = meals.slice(0, limite);
        setApiDataFood(result);
      }).catch(() => setApiDataFood(null));
  }, [setApiDataFood, itemDigitado]);

  function handleAllButton() {
    setItemDigitado('');
  }

  const alarm = () => {
    global.alert('Sinto muito, não encontramos nenhuma receita para esses filtros.');
    setApiDataFood([]);
  };

  const renderItens = () => {
    if (dataCategory === null) {
      return (
        apiDataFood.map((iten, index) => (
          <li
            data-testid={ `${index}-recipe-card` }
            key={ index }
          >
            <div>
              <Link to={ `/comidas/${iten.idMeal}` }>
                <img
                  data-testid={ `${index}-card-img` }
                  src={ iten.strMealThumb }
                  width="50px"
                  alt="Food"
                />
                <p data-testid={ `${index}-card-name` }>{ iten.strMeal }</p>
              </Link>
            </div>
          </li>))
      );
    }
    return (
      dataCategory.map((item, index) => (
        <li
          data-testid={ `${index}-recipe-card` }
          key={ index }
        >
          <div>
            <Link to={ `/comidas/${item.idMeal}` }>
              <img
                data-testid={ `${index}-card-img` }
                src={ item.strMealThumb }
                width="50px"
                alt="Food"
              />
              <p data-testid={ `${index}-card-name` }>{ item.strMeal }</p>
            </Link>
          </div>
        </li>))
    );
  };

  const direcionar = () => {
    if (apiDataFood === null) {
      return null;
    }
    if (apiDataFood.length === 1) {
      return history.push(`comidas/${apiDataFood[0].idMeal}`);
    }
  };

  return (
    <>
      <Header dataCategory={ dataCategory } />
      <div>
        { categoryBtn.map((category) => (
          <button
            data-testid={ `${category.strCategory}-category-filter` }
            key={ category.strCategory }
            type="button"
            name={ category.strCategory }
            value={ category.strCategory }
            onClick={ ({ target }) => handleClick(target) }
          >
            { category.strCategory }
          </button>
        )) }
        <button
          data-testid="All-category-filter"
          key="all"
          type="button"
          name="all"
          value="all"
          onClick={ () => handleAllButton() }

        >
          All
        </button>
      </div>
      <ol>
        {apiDataFood === null ? alarm() : renderItens()}
        {direcionar()}
      </ol>
      <Footer />
    </>
  );
}

export default Comidas;
