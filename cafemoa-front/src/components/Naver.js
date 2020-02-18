import React, { Component } from "react";
import axios from "axios";
import LatteNavbar from '../headers/LatteNavbar';

export default class Naver extends Component {
  componentDidMount() {
    var this_url = window.location.href;
    var code = this_url.split("code=");
    var codes = code[1].split("&");
    var state = this_url.split("state=");
    var n_data = { ncode: codes[0], nstate: state[1] };
    console.log(code);
    console.log(state);
    console.log(n_data)
    const axios_url = 'http://i02a301.p.ssafy.io:8080'
    axios
      .post(axios_url + "/latte/user/Naverlogin", n_data)
      .then(response => {
        console.log("post됐니??");
        console.log(response);
        // history.push('/') // vue-router로 특정 페이지로 이동 즉 세션이 끝난 뒤에는 홈으로 보내겠다.
      })
      .catch(error => {
        console.error(error);
      });
  }

  render() {
    return (
      <div>
        <LatteNavbar></LatteNavbar>
        <h1>여기는 네이버 대기창.</h1>
      </div>
    );
  }
}
