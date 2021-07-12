import React, { useContext, useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ContextRecipe from '../provider/ContextRecipe';
import '../css/comidaBebida.css';

function Bebidas() {
  const {
    apiDataDrink,
    categoryBtn,
    itemDigitado,
    setItemDigitado,
    setApiDataDrink,
  } = useContext(ContextRecipe);
  const history = useHistory();
  const [drinkCategory, setDrinkCategory] = useState([]);
  const [select, setSelect] = useState(false);

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
    fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=')
      .then((response) => response.json())
      .then(({ drinks }) => {
        const limite = 12;
        const result = drinks.slice(0, limite);
        setApiDataDrink(result);
      }).catch(() => setApiDataDrink(null));
  }, [setApiDataDrink, itemDigitado]);

  function handleAllButton() {
    setItemDigitado('');
  }
  const renderItens = () => {
    if (drinkCategory === null) {
      return (
        apiDataDrink.map((iten, index) => (
          <li
            className="liPrincipal"
            key={ index }
          >
            <div>
              <Link
                to={ `/bebidas/${iten.idDrink}` }
                data-testid={ `${index}-recipe-card` }
              >
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
      );
    }
    return (
      drinkCategory.map((item, index) => (
        <li
          className="liPrincipal"
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
        </li>))
    );
  };

  const alarm = () => {
    global.alert('Sinto muito, não encontramos nenhuma receita para esses filtros.');
    setApiDataDrink([]);
  };

  const direcionar = () => {
    if (apiDataDrink === null) {
      return null;
    }
    if (apiDataDrink.length === 1) {
      return history.push(`bebidas/${apiDataDrink[0].idDrink}`);
    }
  };

  return (
    <div className="backimgbebida">
      <Header />
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
        {apiDataDrink === null ? alarm() : renderItens()}
        {direcionar()}
      </ol>
      <div className="espaco" />
      <Footer />
    </div>
  );
}

export default Bebidas;
