/* eslint-disable react/jsx-filename-extension */
import React from 'react'
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'
import { AuthProvider } from './contexts/AuthContext'
import Home from './pages/Home'
import Login from './pages/Login'
import Protected from './pages/Protected'
import Admin from './pages/Admin'
import NoMatch from './pages/NoMatch'
import ProtectedRoute from './components/ProtectedRoute'
import NavBar from './components/NavBar'
import './App.css'

function App() {
  return (
    <Router>
      <AuthProvider>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <ProtectedRoute
            exact
            path="/protected"
            permissions={['user', 'admin']}
            component={Protected}
          />
          <ProtectedRoute exact path="/admin" permissions="admin" component={Admin} />
          <Route path="*" component={NoMatch} />
        </Switch>
      </AuthProvider>
    </Router>
  )
}

export default App
