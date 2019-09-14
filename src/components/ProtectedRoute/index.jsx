import React, { useContext } from 'react'
import { Route, Redirect } from 'react-router-dom'
import { AuthContext } from '../../contexts/AuthContext'

function ProtectedRoute({ component, permissions, redirect, location, ...rest }) {
  const { isLoaded, state } = useContext(AuthContext)

  if (!isLoaded) {
    return <div>Loading...</div>
  }

  if (!state.role) {
    return <Redirect to={{ pathname: '/login', state: { from: location } }} />
  }

  if (
    (Array.isArray(permissions) && permissions.includes(state.role)) ||
    permissions === state.role
  ) {
    return <Route component={component} {...rest} />
  }
  return <Redirect to="/" />
}

export default ProtectedRoute
