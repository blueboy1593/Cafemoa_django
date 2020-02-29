import React, { Component } from 'react';
import Kakaomap from '../components/Kakaomap';
import NearCafeList from '../components/NearCafeList';
import { Divider } from 'antd';
import LatteNavbar from '../headers/LatteNavbar';
import store from '../store';

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
    console.log(crd)
    store.dispatch({type:'pos', crd: crd})
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
  componentDidMount(){
    const pos = store.getState().pos
    if (pos === undefined) {
      this.geolocation()
    }
    else {
      this.setState({
        latitude: pos.latitude,
        longitude: pos.longitude
      })
    }
  }

  render() {
    // this.geolocation()
    return (
      <div>
        <LatteNavbar></LatteNavbar>
        <Divider orientation="center"><h5>현재 위치</h5></Divider>
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
