import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { AuthContext, roles } from '../../contexts/AuthContext';

function ProtectedRoute({ component, userRole, redirect, ...rest }) {
  const { isLoaded, state } = useContext(AuthContext);

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  return roles[state.role] >= roles[userRole || 'user'] ? (
    <Route component={component} {...rest} />
  ) : (
    <Redirect to={redirect || '/login'} />
  );
}

export default ProtectedRoute;
