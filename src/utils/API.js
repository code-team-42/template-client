import axios from 'axios'

export default {
  login(body) {
    return axios.post('/api/login', body)
  },
  logout() {
    return axios.post('/api/logout')
  },
  auth() {
    return axios.get('/api/auth')
  }
}
