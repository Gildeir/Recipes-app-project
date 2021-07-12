import React, { useContext, useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ContextRecipe from '../provider/ContextRecipe';
import '../css/comidaBebida.css';

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
      console.log(`true${itemDigitado}`);
      setSelect(false);
      setItemDigitado('');
    }
    if (value !== itemDigitado) {
      setItemDigitado(value);
    }
    if (select === false) {
      setSelect(true);
      console.log(`value 2${value}`);
      console.log(`false${itemDigitado}`);
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
            className="liPrincipal"
            data-testid={ `${index}-recipe-card` }
            key={ index }
          >
            <div>
              <Link to={ `/comidas/${iten.idMeal}` }>
                <img
                  data-testid={ `${index}-card-img` }
                  src={ iten.strMealThumb }
                  alt="food"
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
          className="liPrincipal"
          key={ index }
        >
          <div>
            <Link to={ `/comidas/${item.idMeal}` } data-testid={ `${index}-recipe-card` }>
              <img
                data-testid={ `${index}-card-img` }
                src={ item.strMealThumb }
                alt="food"
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
    <div className="backimgfood">
      <Header dataCategory={ dataCategory } />
      <div className="divButao">
        { categoryBtn.map((category) => (
          <Button
            variant="outline-success"
            data-testid={ `${category.strCategory}-category-filter` }
            key={ category.strCategory }
            type="button"
            name={ category.strCategory }
            value={ category.strCategory }
            onClick={ ({ target }) => handleClick(target) }
          >
            { category.strCategory }
          </Button>
        )) }
        <Button
          variant="outline-success"
          data-testid="All-category-filter"
          key="all"
          type="button"
          name="all"
          value="all"
          onClick={ () => handleAllButton() }
        >
          All
        </Button>
      </div>
      <ol>
        {apiDataFood === null ? alarm() : renderItens()}
        {direcionar()}
      </ol>
      <div className="espaco" />
      <Footer />
    </div>
  );
}

export default Comidas;
