import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Main, CafeList, Login, Signup, NearCafe, CafeDetail, Order, Mypage, Basket } from '../tabs';
// import LatteNavbar from '../headers/LatteNavbar';
import Logout from '../components/Logout';

class Latte extends Component{
    render(){
      return (
        <div className="Latte">
          {/* <LatteNavbar></LatteNavbar> */}
          <Route exact path='/' component={Main}/>
          <Route exact path='/latte' component={CafeList}/>
          <Route path='/latte/cafedetail/:value' component={CafeDetail}/>
          <Route path='/latte/nearcafe' component={NearCafe}/>
          <Route path='/latte/order' component={Order}/>
          <Route path='/latte/login' component={Login}/>
          <Route path='/latte/signup' component={Signup}/>
          <Route path='/latte/logout' component={Logout}/>
          <Route path='/latte/mypage' component={Mypage}/>
          <Route path='/latte/basket' component={Basket}/>
        </div>
      );
    }
  }
  
  export default Latte;
  