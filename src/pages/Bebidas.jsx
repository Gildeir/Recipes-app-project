import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ContextRecipe from '../provider/ContextRecipe';

function Bebidas() {
  const {
    apiDataDrink,
    categoryBtn,
    itemDigitado,
    setItemDigitado,
    // setApiDataDrink,
  } = useContext(ContextRecipe);

  const [drinkCategory, setDrinkCategory] = useState([]);
  console.log(drinkCategory);

  useEffect(() => {
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${itemDigitado}`)
      .then((response) => response.json())
      .then(({ drinks }) => {
        const limite = 12;
        const result = drinks.slice(0, limite);
        setDrinkCategory(result);
      }).catch(() => setDrinkCategory(null));
  }, [itemDigitado, setDrinkCategory]);

  async function handleClick({ value }) {
    console.log(value);
    console.log(itemDigitado);
    setItemDigitado(value);
  }

  return (
    <>
      <Header />
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
          onClick={ ({ target }) => handleClick(target) }
        >
          All
        </button>
      </div>
      <ol>
        {drinkCategory === null
          ? apiDataDrink.map((iten, index) => (
            <li
              data-testid={ `${index}-recipe-card` }
              key={ index }
            >
              <div>
                <Link to={ `/bebidas/${iten.idDrink}` }>
                  <img
                    data-testid={ `${index}-card-img` }
                    src={ iten.strDrinkThumb }
                    width="50px"
                    alt="drink"
                  />
                  <p data-testid={ `${index}-card-name` }>{ iten.strDrink }</p>
                </Link>
              </div>
            </li>))
          : drinkCategory.map((item, index) => (
            <li
              data-testid={ `${index}-recipe-card` }
              key={ index }
            >
              <div>
                <Link to={ `/bebidas/${item.idDrink}` }>
                  <img
                    data-testid={ `${index}-card-img` }
                    src={ item.strDrinkThumb }
                    width="50px"
                    alt="drink"
                  />
                  <p data-testid={ `${index}-card-name` }>{ item.strDrink }</p>
                </Link>
              </div>
            </li>))}
      </ol>
      <Footer />
    </>
  );
}

export default Bebidas;
