import React, { useState } from 'react';
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

export default RecipeProvider;
