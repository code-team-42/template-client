import React, { useState } from 'react';
import Signin from '../components/Signin';
import Registration from '../components/Registration';

function Home(props) {
  const [state, setState] = useState({
    register: false
  });

  return (
    <div className="">
      <h1>Home</h1>
      <button
        onClick={() => {
          setState({
            register: false
          });
        }}
      >
        Sign In
      </button>
      <button
        onClick={() => {
          setState({
            register: true
          });
        }}
      >
        Register
      </button>
      {state.register ? <Registration /> : <Signin />}
    </div>
  );
}

export default Home;
