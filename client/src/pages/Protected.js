import React from 'react';
import Auth from '../components/Auth';

function Protected(props) {
  return (
    <div>
      <h1>Protected Page</h1>
      <button
        onClick={() => {
          Auth.signout(() => {
            props.history.push('/');
          });
        }}
      >
        Sign Out
      </button>
    </div>
  );
}

export default Protected;
