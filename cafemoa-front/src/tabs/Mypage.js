import React, { Component } from 'react'
import LatteNavbar from '../headers/LatteNavbar';
import axios from 'axios';
import store from '../store';

export default class Mypage extends Component {
    componentDidMount(){
        const uid = store.getState().user_info.uid
        const base_url = process.env.REACT_APP_SERVER_IP
        axios.get(base_url + `/cafes/getuserorder/${uid}`)
            .then(response => {
                this.setState({
                    orderrecord:response.data.length
                })
            })
            .catch(error => {
                console.log('error')
                console.error(error)
            })
    }

    render() {
        const unickname = store.getState().user_info.unickname
        var iconnum = 1
        if (this.state) {
            var orderrecord = this.state.orderrecord
            if (orderrecord >= 5) {
                iconnum = 2
            }
            if (orderrecord >= 10) {
                iconnum = 3
            }
        }
        return (
            <div style = {{textAlign:'center'}}>
                <LatteNavbar></LatteNavbar>
                <img className="mypagelevels" src="/img/levels3.png" alt="레벨"/>
                <h4>{unickname}님의 주문 횟수: {orderrecord} | {unickname}님의 레벨</h4>
                <br></br>
                <img className="mypagelevel" src={`/img/level${iconnum}.png`} alt="레벨아이콘"/>
                <img className="mypageicons" src="/img/icon_grad_03.png" alt="mypageicon"/>
                <img className="mypageicons" src="/img/icon_grad_04.png" alt="mypageicon"/>
                <img className="mypageicons" src="/img/icon_grad_05.png" alt="mypageicon"/>
            </div>
        )
    }
}
