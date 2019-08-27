import React, { useState, useReducer, useEffect } from 'react'
import API from '../utils/API'

const actions = {
  setUser: 'SET_USER',
  setRole: 'SET_ROLE',
  unsetUser: 'UNSET_USER',
  unsetRole: 'UNSET_ROLE',
  authorize: 'AUTHORIZE',
  deauthorize: 'DEAUTHORIZE'
}
Object.freeze(actions)

const initialState = {
  user: {},
  role: ''
}

function AuthReducer(state, action) {
  const { user, role, type } = action
  switch (type) {
    case actions.setUser:
      return { ...state, user }
    case actions.setRole:
      return { ...state, role }
    case actions.unsetUser:
      return { ...state, user: {} }
    case actions.unsetRole:
      return { ...state, role: '' }
    case actions.authorize:
      return { ...state, user, role }
    case actions.deauthorize:
      return { ...state, user: {}, role: '' }
    default:
      return state
  }
}

const AuthContext = React.createContext(initialState)

function AuthProvider(props) {
  const [state, dispatch] = useReducer(AuthReducer, initialState)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    API.auth()
      .then(response => {
        const { user, role } = response.data
        dispatch({ type: actions.authorize, user, role })
        setIsLoaded(true)
      })
      .catch(err => {
        console.log(err)
        setIsLoaded(true)
      })
  }, [])

  return (
    <AuthContext.Provider value={{ state, dispatch, isLoaded }}>
      {props.children}
    </AuthContext.Provider>
  )
}

export { AuthContext, AuthProvider, actions }
