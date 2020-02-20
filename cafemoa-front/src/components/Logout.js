import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import store from '../store';

export default class Logout extends Component {
  render() {
    localStorage.removeItem("login_token");
    store.dispatch({type:'LOGOUT'})
    return (
      <div>
        {
          <Redirect to="/"/>
        }
      </div>
    )
  }
}