import React, { useState } from 'react';
import Auth from './Auth';

function Signin(props) {
  const [state, setState] = useState({
    email: '',
    password: ''
  });

  const handleInputChange = event => {
    const { name, value } = event.target;
    setState({
      ...state,
      [name]: value
    });
  };
  return (
    <form className="loginForm">
      <input
        className="loginEmail"
        defaultValue={state.email}
        name="email"
        onChange={handleInputChange}
        type="text"
        placeholder="Email"
      />
      <br />
      <input
        className="loginPassword"
        defaultValue={state.password}
        name="password"
        onChange={handleInputChange}
        type="password"
        placeholder="Password"
      />
      <br />
      <button
        onClick={event => {
          event.preventDefault();
          Auth.signin(() => {
            props.history.push('/protected');
          });
        }}
      >
        Sign In
      </button>
    </form>
  );
}

export default Signin;
