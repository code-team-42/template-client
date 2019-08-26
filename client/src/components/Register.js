import React from 'react';
import axios from 'axios';

class Register {
  register = (registrationInfo, cb) => {
    try {
      axios.post('/api/register', registrationInfo);
      cb();
    } catch (error) {
      console.log(error);
    }
  };
}

export default new Register();
