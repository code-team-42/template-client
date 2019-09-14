import React, { useState, useContext } from 'react'
import { Redirect, withRouter } from 'react-router-dom'
import { AuthContext, actions } from '../../contexts/AuthContext'
import API from '../../utils/API'

function LoginComponent(props) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [redirect, setRedirect] = useState(false)

  const { dispatch } = useContext(AuthContext)

  function handleSubmit() {
    API.login({ email, password })
      .then(response => {
        const { user, role } = response.data
        dispatch({ type: actions.authorize, user, role })
        setRedirect(true)
      })
      .catch(err => console.log(err))
  }

  const { from } = (props.location && props.location.state) || {
    from: { pathname: '/' }
  }
  console.log(from)

  if (redirect) {
    return <Redirect to={{ pathname: from.pathname, state: { from: '/' } }} />
  }

  return (
    <div>
      <label htmlFor="email">
        Email:
        <input
          type="email"
          name="email"
          value={email}
          onChange={event => setEmail(event.target.value)}
        />
      </label>
      <label htmlFor="password">
        Password:
        <input
          type="password"
          name="password"
          value={password}
          onChange={event => setPassword(event.target.value)}
        />
      </label>
      <button type="button" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  )
}

export default withRouter(LoginComponent)
