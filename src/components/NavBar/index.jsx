import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../contexts/AuthContext'

function NavBar() {
  const { isLoaded, state } = useContext(AuthContext)

  return (
    <div>
      <Link to="/">Home</Link>
      {(() => {
        if (!isLoaded) return null
        const display = []
        if (!state.role) {
          return <Link to="/login">Login</Link>
        }
        if (state.role === 'user' || state.role === 'admin') {
          display.push(
            <Link key="protected" to="/protected">
              Protected
            </Link>
          )
        }
        if (state.role === 'admin') {
          display.push(
            <Link key="admin" to="/admin">
              Admin
            </Link>
          )
        }
        return display
      })()}
    </div>
  )
}

export default NavBar
