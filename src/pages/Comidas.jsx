import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ContextRecipe from '../provider/ContextRecipe';

function Comidas() {
  const { apiDataFood, categoryBtn } = useContext(ContextRecipe);

  return (
    <>
      <Header />
      { console.log(categoryBtn)}
      <div>
        { Object.values(categoryBtn).map((category) => (
          <button
            data-testid={ `${category.strCategory}-category-filter` }
            key={ category.strCategory }
            type="button"
            name={ category.strCategory }
            value={ category.strCategory }
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
        {apiDataFood
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
            </li>)) : <p>Carregando...</p>}
      </ol>
      <Footer />
    </>
  );
}

export default Comidas;
