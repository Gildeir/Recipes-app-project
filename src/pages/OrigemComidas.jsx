import React, { useState, useEffect/* , useContext */ } from 'react';
import { useHistory } from 'react-router';
import Header from '../components/Header';
import Footer from '../components/Footer';
// import ContextRecipe from '../provider/ContextRecipe';

function OrigemComidas() {
  const [areas, setAreas] = useState([]);
  const [comidaFiltrada, setComidaFiltrada] = useState([]);
  // const { setApiDataFood } = useContext(ContextRecipe);
  const history = useHistory();

  useEffect(() => {
    fetch('https://www.themealdb.com/api/json/v1/1/list.php?a=list')
      .then((response) => response.json())
      .then(({ meals }) => setAreas(meals));
    fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=')
      .then((response) => response.json())
      .then(({ meals }) => {
        const limit = 12;
        const result = meals.slice(0, limit);
        setComidaFiltrada(result);
      });
  }, []);

  const showItens = ({ value }) => {
    if (value === 'All') {
      fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=')
        .then((response) => response.json())
        .then(({ meals }) => {
          const limite = 12;
          const result = meals.slice(0, limite);
          setComidaFiltrada(result);
        });
    }
    if (value !== 'All') {
      fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${value}`)
        .then((response) => response.json())
        .then(({ meals }) => {
          const limitade = 12;
          const result = meals.slice(0, limitade);
          setComidaFiltrada(result);
        });
    }
  };

  return (
    <div>
      <Header />
      <p data-testid="page-title">Explorar Origem</p>
      <select
        data-testid="explore-by-area-dropdown"
        onChange={ ({ target }) => showItens(target) }
      >
        <option value="All" data-testid="All-option">All</option>
        {areas.map((area, index) => (
          <option
            data-testid={ `${area.strArea}-option` }
            key={ index }
            value={ area.strArea }
          >
            {area.strArea}
          </option>
        ))}
      </select>
      {comidaFiltrada === null ? null : comidaFiltrada.map((comida, index) => (
        <div key={ index } data-testid={ `${index}-recipe-card` }>
          <input
            type="image"
            src={ comida.strMealThumb }
            data-testid={ `${index}-card-img` }
            alt="comida"
            onClick={ () => history.push(`/comidas/${comida.idMeal}`) }
          />
          <p data-testid={ `${index}-card-name` }>{comida.strMeal}</p>
        </div>
      ))}
      <Footer />
    </div>
  );
}

export default OrigemComidas;
