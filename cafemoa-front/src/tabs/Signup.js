import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import { SignupBasic, SignupHost } from '../components/index'
import LatteNavbar from '../headers/LatteNavbar';

export default class Signup extends Component {
  render() {
    return (
      <div>
        <LatteNavbar></LatteNavbar>
        <Route exact path='/latte/signup' component={SignupBasic}/>
        <Route path='/latte/signup/host' component={SignupHost}/>
      </div>
    )
  }
}
