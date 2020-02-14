import React, { Component } from 'react';
import axios from 'axios';

export default class RegisterMenu extends Component {
    state = {
        mname: '',
        mpic: '',
        msname: '',
        msprice: ''
      }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleSubmit = (e) => {
        // 페이지 리로딩 방지
        e.preventDefault();
        
        // const data = this.state
        // 도전 해보자
        const data = this.state
        const new_data = {
            mname: data.mname,
            mpic: data.mpic,
            menuSizeRequestDtos: [
                {
                    msname: data.msname,
                    msprice: data.msprice
                }
            ]
        }
        console.log(new_data)

        // axios 요청
        // const url = 'http://i02a301.p.ssafy.io:8080/latte/menu/4'

        const base_url = process.env.REACT_APP_SERVER_IP

        axios.post(base_url + `/menu/${data.id}`, new_data)
          .then(response => {
            console.log('post됐니??')
            console.log(response)
            // history.push('/') // vue-router로 특정 페이지로 이동 즉 세션이 끝난 뒤에는 홈으로 보내겠다.
          }) 
          .catch(error => {
            console.error(error)
        })

        // 상태 초기화
        this.setState({
            mname: '',
            mpic: '',
            msname: '',
            msprice: ''
        })
    }

    render() {
        return (
            <div>
                <center>
                <h1>여기는 메뉴등록 사장전용!!!</h1>
                <form onSubmit={this.handleSubmit}>
                    <input
                    type="name"
                    placeholder="메뉴 이름"
                    value={this.state.mname}
                    onChange={this.handleChange}
                    name="mname"
                    />
                    <br></br>
                    
                    <input
                    placeholder="메뉴 사진"
                    value={this.state.mpic}
                    onChange={this.handleChange}
                    name="mpic"
                    />
                    <br></br>

                    <input
                    type="text"
                    placeholder="메뉴 옵션"
                    value={this.state.msname}
                    onChange={this.handleChange}
                    name="msname"
                    />
                    <br></br>

                    <input
                    type="number"
                    placeholder="옵션 메뉴 가격"
                    value={this.state.msprice}
                    onChange={this.handleChange}
                    name="msprice"
                    />
                    <br></br>

                    <button type="submit">메뉴 등록</button>
                </form>
                </center>
            </div>
        )
    }
}

