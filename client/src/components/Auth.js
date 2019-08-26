import React from 'react';
import axios from 'axios';

class Auth {
  constructor() {
    this.user = null;
    this.authenticated = false;
  }

  signin = async (signinInfo, cb) => {
    try {
      let res = await axios.post('/api/signin', signinInfo);
      this.user = res.data.user;
      this.authenticated = true;
      cb();
    } catch (error) {
      console.log(error);
    }
  };

  signout(cb) {
    this.user = null;
    this.authenticated = false;
    cb();
  }

  isAuthenticated() {
    return this.authenticated;
  }
}

export default new Auth();
