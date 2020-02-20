import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import { SignupBasic, SignupHost } from '../components/index'

export default class Signup extends Component {
  render() {
    return (
      <div>
        <Route exact path='/latte/signup' component={SignupBasic}/>
        <Route path='/latte/signup/host' component={SignupHost}/>
      </div>
    )
  }
}
