import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { CafeList, Login, Logout, Signup, NearCafe, CafeDetail, Order, Avatar, RegisterCafe, RegisterMenu, ShoppingList, Mypage, Basket } from '../tabs';
import LatteNavbar from '../headers/LatteNavbar';

class Latte extends Component{
    render(){
      return (
        <div className="Latte">
          <LatteNavbar></LatteNavbar>
          <Route exact path='/latte' component={CafeList}/>
          <Route path='/latte/cafedetail' component={CafeDetail}/>
          <Route path='/latte/nearcafe' component={NearCafe}/>
          <Route path='/latte/order' component={Order}/>
          <Route path='/latte/login' component={Login}/>
          <Route path='/latte/signup' component={Signup}/>
          <Route path='/latte/logout' component={Logout}/>
          <Route path='/latte/picture' component={Avatar}/>
          <Route path='/latte/registerCafe' component={RegisterCafe}/>
          <Route path='/latte/registerMenu' component={RegisterMenu}/>
          <Route path='/latte/shoppingList' component={ShoppingList}/>
          <Route path='/latte/mypage' component={Mypage}/>
          <Route path='/latte/basket' component={Basket}/>
        </div>
      );
    }
  }
  
  export default Latte;
  