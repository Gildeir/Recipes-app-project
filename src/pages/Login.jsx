import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import ContextRecipe from '../provider/ContextRecipe';

function Login() {
  const { login: { email, password }, setLogin } = useContext(ContextRecipe);
  // console.log(email);

  const emailValidation = () => {
    const emailLength = 6;
    if (email.match(/\S+@\S+\.com/) && email.length > emailLength) {
      return true;
    }
    return false;
  };

  const passwordValidation = () => {
    const nameNumber = 6;
    if (password.length > nameNumber) {
      return true;
    }
    return false;
  };

  const buttonAvaliable = () => {
    if (emailValidation() && passwordValidation()) {
      return false;
    }
    return true;
  };

  const RedirectAndLocal = () => {
    localStorage.setItem('mealsToken', 1);
    localStorage.setItem('cocktailsToken', 1);
    localStorage.setItem('user', JSON.stringify({ email }));
  };

  return (
    <section>
      <form>
        <label htmlFor="email">
          <input
            name="email"
            type="text"
            data-testid="email-input"
            onChange={ (event) => setLogin({ email: event.target.value, password }) }
            placeholder="Email"
          />
        </label>
        <label htmlFor="password">
          <input
            name="password"
            type="password"
            data-testid="password-input"
            onChange={ (event) => setLogin({ password: event.target.value, email }) }
            placeholder="password"
          />
        </label>
        <Link to="/comidas">
          <button
            type="button"
            data-testid="login-submit-btn"
            disabled={ buttonAvaliable() }
            onClick={ () => RedirectAndLocal() }
          >
            Login
          </button>
        </Link>
      </form>
    </section>
  );
}

export default Login;
