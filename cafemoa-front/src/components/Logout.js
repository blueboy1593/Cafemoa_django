import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import store from '../store';

export default class Logout extends Component {
  render() {
    localStorage.removeItem("user_data");
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