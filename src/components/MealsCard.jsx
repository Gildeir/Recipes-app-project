import React from 'react';

function MealsCard() {
  return (
    <button
      type="button"
      onClick={ { } }
      data-testid={ `${index}-recipe-card` }
    >
      <img
        data-testid={ `${index}-card-img` }
        src={ {} }
        alt="Food"

      />
      <p data-testid={ `${index}-card-name` } />
    </button>
  );
}

export default MealsCard;
