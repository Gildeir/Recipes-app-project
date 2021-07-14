import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Button, Form } from 'react-bootstrap';
import ContextRecipe from '../provider/ContextRecipe';
import Seletas from '../images/Seletas.png';

import '../css/login.css';

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
    <section className="container-login100">
      <Form className="form-login">
        <Form.Group controlId="formBasicEmail">
          <Form.Label>E-mail</Form.Label>
          <Form.Control
            type="email"
            placeholder="Digite seu e-mail"
            name="email"
            data-testid="email-input"
            onChange={ (event) => setLogin({ email: event.target.value, password }) }
          />
          <Form.Text className="text-muted">
            Não compartilhe seus dados.
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Senha</Form.Label>
          <Form.Control
            type="password"
            placeholder="Digite sua senha"
            name="password"
            data-testid="password-input"
            onChange={ (event) => setLogin({ password: event.target.value, email }) }
          />
        </Form.Group>
        <Form.Group controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Link to="/comidas">
          <Button
            className="button-login"
            variant="dark"
            type="login"
            data-testid="login-submit-btn"
            disabled={ buttonAvaliable() }
            onClick={ () => RedirectAndLocal() }
          >
            Login
          </Button>
        </Link>
      </Form>
      <img className="logo-seletas" src={ Seletas } alt="logo de Seletas" />
    </section>
  );
}

export default Login;
