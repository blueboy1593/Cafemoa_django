import React, { Component } from "react";
import axios from "axios";
import queryString from "query-string";
import LatteNavbar from '../headers/LatteNavbar';
// import { Redirect } from 'react-router-dom';


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
        // return (
        //   <div>
        //     {
        //       <Redirect to="/"/>
        //     }
        //   </div>
        // )
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
