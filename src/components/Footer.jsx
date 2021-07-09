import React from 'react';
import { Link } from 'react-router-dom';
import drinkIcon from '../images/drinkIcon.svg';
import mealIcon from '../images/mealIcon.svg';
import exploreIcon from '../images/exploreIcon.svg';
import '../css/footer.css';

function Footer() {
  return (
    <footer data-testid="footer" className="footer">
      <Link to="/bebidas">
        <img src={ drinkIcon } data-testid="drinks-bottom-btn" alt="drink" />
      </Link>
      <Link to="/explorar">
        <img src={ exploreIcon } data-testid="explore-bottom-btn" alt="explore" />
      </Link>
      <Link to="/comidas">
        <img src={ mealIcon } data-testid="food-bottom-btn" alt="meal" />
      </Link>
    </footer>
  );
}

export default Footer;
