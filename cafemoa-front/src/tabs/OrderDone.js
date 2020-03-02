import React, { Component } from 'react'
import LatteNavbar from '../headers/LatteNavbar';

export default class OrderDone extends Component {
    render() {
        return (
            <div>
                <LatteNavbar></LatteNavbar>
                <center>
                <p>주문이 완료되었습니다.</p>
                </center>
                <img alt="cake" src="/img/cake_top_noise.png" style={{width:"120px"}}></img>
                <img alt="cake" src="/img/cakePiece_top_noise.png" style={{width:"120px"}}></img>
                <img alt="cake" src="/img/coffee_top_noise.png" style={{width:"120px"}}></img>
            </div>
        )
    }
}