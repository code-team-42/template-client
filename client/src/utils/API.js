import axios from 'axios';

export default {
  login: function(body) {
    return axios.post('/api/login', body);
  },
  logout: function() {
    return axios.post('/api/logout');
  },
  auth: function() {
    return axios.get('/api/auth');
  }
};
