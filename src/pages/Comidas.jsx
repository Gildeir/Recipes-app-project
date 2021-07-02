import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ContextRecipe from '../provider/ContextRecipe';

function Comidas() {
  const {
    apiDataFood,
    categoryBtn,
    itemDigitado,
    setItemDigitado,
  } = useContext(ContextRecipe);

  const [dataCategory, setDataCategory] = useState([]);

  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${itemDigitado}`)
      .then((response) => response.json())
      .then(({ meals }) => {
        const limite = 12;
        const result = meals.slice(0, limite);
        setDataCategory(result);
      }).catch(() => setDataCategory(null));
  }, [itemDigitado]);

  async function handleClick({ value }) {
    setItemDigitado(value);
  }

  return (
    <>
      <Header dataCategory={ dataCategory } />
      { console.log(categoryBtn)}
      <div>
        { Object.values(categoryBtn).map((category) => (
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
        >
          All
        </button>
      </div>
      <ol>
        {dataCategory === null
          ? apiDataFood.map((iten, index) => (
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
          : dataCategory.map((item, index) => (
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
            </li>))}
      </ol>
      <Footer />
    </>
  );
}

export default Comidas;
