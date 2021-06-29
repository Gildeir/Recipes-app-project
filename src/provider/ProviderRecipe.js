import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ContextRecipe from './ContextRecipe';

function RecipeProvider({ children }) {
  const [login, setLogin] = useState({
    email: '',
    password: '',
  });

  const values = {
    login,
    setLogin,
  };

  return (
    <ContextRecipe.Provider value={ values }>
      {children}
    </ContextRecipe.Provider>
  );
}

RecipeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default RecipeProvider;
