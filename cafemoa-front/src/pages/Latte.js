import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Main, CafeList, Login, Signup, NearCafe, CafeDetail, Order, Mypage, Basket, MyCafeManage, MyCafeOrder, OrderDone } from '../tabs';
// import LatteNavbar from '../headers/LatteNavbar';
import Logout from '../components/Logout';
import { KaKao, Naver } from '../components/index';


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
          <Route path='/latte/orderdone' component={OrderDone}/>
          <Route path='/latte/login' component={Login}/>
          <Route path='/latte/signup' component={Signup}/>
          <Route path='/latte/logout' component={Logout}/>
          <Route path='/latte/mypage' component={Mypage}/>
          <Route path='/latte/basket' component={Basket}/>

          <Route path="/latte/kakao" component={KaKao} />
          <Route path="/latte/naver" component={Naver} />

          <Route path="/latte/mycafemanage" component={MyCafeManage} />
          <Route path="/latte/mycafeorder" component={MyCafeOrder} />
        </div>
      );
    }
  }
  
  export default Latte;
  