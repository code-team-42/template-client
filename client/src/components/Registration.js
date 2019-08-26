import React, { useState } from 'react';
import Register from './Register';

function Registration(props) {
  const [state, setState] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    passwordsMatch: true
  });

  function handleInputChange(event) {
    const { name, value } = event.target;
    setState({
      ...state,
      [name]: value
    });
  }

  function handleSubmit() {
    if (passConfirm()) {
      console.log('Placeholder');
      Register.register();
      //redirect to signin
    } else {
      setState({
        ...state,
        passwordsMatch: true
      });
    }
  }

  function passConfirm() {
    if (state.password === state.confirmPassword) {
      return true;
    }
  }

  return (
    <form className="registrationForm">
      <input
        className="registrationEmail"
        value={state.email}
        name="email"
        onChange={handleInputChange}
        type="text"
        placeholder="Email"
      />
      <br />
      <input
        className="registrationPassword"
        value={state.password}
        name="password"
        onChange={handleInputChange}
        type="password"
        placeholder="Password"
      />
      <br />
      {state.passwordsMatch ? null : (
        <div>
          <br />
          <p className="error">*Passwords do not match</p>
        </div>
      )}
      <input
        className="confirmPassword"
        value={state.confirmPassword}
        name="confirmPassword"
        onChange={handleInputChange}
        type="password"
        placeholder="Confirm Password"
      />
      <br />
      <button
        onClick={event => {
          event.preventDefault();
          handleSubmit();
        }}
      >
        Register
      </button>
    </form>
  );
}

export default Registration;
