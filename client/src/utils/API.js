import axios from 'axios';

export default {
  signin: function(data) {
    return axios.post('/api/signin', data);
  },

  signout: function() {
    return axios.post('/api/signout');
  }
};
