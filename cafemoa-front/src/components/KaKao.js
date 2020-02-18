import React, { Component } from "react";
import axios from "axios";
import queryString from "query-string";
import LatteNavbar from '../headers/LatteNavbar';

export default class KaKao extends Component {
  componentDidMount() {
    const code = queryString.parse(this.props.location.search);
    console.log(code);
    const axios_url = 'http://i02a301.p.ssafy.io:8080'
    axios
      .post(axios_url + "/latte/user/Kakaologin", code)
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
        <h1>여기는 카카오 대기창.</h1>
      </div>
    );
  }
}
