import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext, roles } from '../../contexts/AuthContext';

function NavBar() {
  const { isLoaded, state } = useContext(AuthContext);

  return (
    <div>
      <Link to="/">Home</Link>
      {(() => {
        if (!isLoaded) return null;
        let display = [];
        if (!state.role) {
          return <Link to="/login">Login</Link>;
        }
        if (roles[state.role] >= roles.user) {
          display.push(<Link to="/protected">Protected</Link>);
        }
        if (roles[state.role] === roles.admin) {
          display.push(<Link to="/admin">Admin</Link>);
        }
        return display;
      })()}
    </div>
  );
}

export default NavBar;
