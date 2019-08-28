import axios from 'axios'

export default {
  login(body) {
    return axios.post('/api/v1/auth/login', body)
  },
  logout() {
    return axios.post('/api/v1/auth/logout')
  },
  auth() {
    return axios.get('/api/v1/auth')
  }
}
