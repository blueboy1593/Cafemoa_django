import React, { Component } from 'react';
import Kakaomap from '../components/Kakaomap';
import NearCafeList from '../components/NearCafeList';

export default class NearCafe extends Component {
  constructor(props){
    super(props);
    this.state = {
      latitude: '',
      longitude: '',
    }
    this.success = this.success.bind(this)
  }

  success(pos) {
    const crd = pos.coords;
    this.setState({
      latitude: crd.latitude,
      longitude: crd.longitude
    })
    return crd
  }

  geolocation = () => {
    navigator.geolocation.getCurrentPosition(this.success);
    return
  }

  render() {
    this.geolocation()
    return (
      <div>
        <h1>주변 매장 찾는 게시판</h1>
        <p>현재 위치의</p>
        <p>위도는 {this.state.latitude}</p>
        <p>경도는 {this.state.longitude}</p>
        {function () {
          if (this.state.latitude !== '') {
            return (
              <>
              <Kakaomap latitude={this.state.latitude} longitude={this.state.longitude}></Kakaomap>
              <NearCafeList latitude={this.state.latitude} longitude={this.state.longitude}></NearCafeList>
              </>
            )
          }
        }.bind(this)()}
      </div>
    )
  }
}
