import React, { Component } from 'react'
import axios from 'axios';

export default class RegisterCafe extends Component {
    state = {
        cname: '',
        cloc: '',
        cphone: '',
        cpic: '',
        copen: '',
        cclose: '',
        cdesc: '',
      }
    handleChange = (e) => {
    this.setState({
        [e.target.name]: e.target.value
    })
    }
    handleSubmit = (e) => {
    // 페이지 리로딩 방지
    e.preventDefault();
    console.log(this.state)

    const params = {
        cname: this.state.cname,
        cloc: this.state.cloc,
        cphone: this.state.cphone,
        cpic: this.state.cpic,
        copen: this.state.copen,
        cclose: this.state.cclose,
        cdesc: this.state.cdesc,
    }
    const headers = {
        'Authorization': 'eyJ0eXBlIjoiSldUIiwicmVnRGF0ZSI6MTU4MDc5OTU1Njk2NSwiYWxnIjoiSFMyNTYifQ.eyJtZW1iZXIiOnsidWlkIjoiYWFhIiwidW5hbWUiOiJhYWEiLCJ1cGhvbmUiOiJhYWEiLCJ1ZW1haWwiOiJhYWEiLCJ1bmlja25hbWUiOiJhYWEiLCJyb2xlIjoiSE9TVCIsInVwaWMiOm51bGx9fQ.IvHAH3hBPPhKsmH3duSn2UAZfFpJLpOp8QlaLin-t-Q'
    }

    // const url = 'http://54.180.154.140:8080/latte/cafe/create'
    const base_url = process.env.REACT_APP_SERVER_IP
        axios.post(base_url + '/user/signin', params)
    // headers를 dictionary 에 감싸서 보내야 headers로 인식이 되는 것 같다.
    axios.post(base_url + '/cafe/create', params, {headers})
    .then(response => {
        console.log('카페 등록 요청')
        console.log(response)
    }) 
    .catch(error => {
        console.log('error')
        console.error(error)
    })


    // 상태 초기화
    this.setState({
        cname: '',
        cloc: '',
        cphone: '',
        cpic: '',
        copen: '',
        cclose: '',
        cdesc: '',
    })
    }

    render() {
        return (
            <div>
                <h1>여기는 카페 등록 사장페이지 전용!</h1>
                <form onSubmit={this.handleSubmit}>
                    <input
                    type="name"
                    placeholder="카페 이름"
                    value={this.state.cname}
                    onChange={this.handleChange}
                    name="cname"
                    />
                    <br></br>
                    <input
                    type="name"
                    placeholder="카페 위치"
                    value={this.state.cloc}
                    onChange={this.handleChange}
                    name="cloc"
                    />
                    <br></br>
                    <input
                    placeholder="카페 번호"
                    value={this.state.cphone}
                    onChange={this.handleChange}
                    name="cphone"
                    />
                    <br></br>
                    <input
                    placeholder="카페 사진"
                    value={this.state.cpic}
                    onChange={this.handleChange}
                    name="cpic"
                    />
                    <br></br>
                    <input
                    placeholder="카페 오픈 시간"
                    value={this.state.copen}
                    onChange={this.handleChange}
                    name="copen"
                    />
                    <br></br>
                    <input
                    placeholder="카페 닫는 시간"
                    value={this.state.cclose}
                    onChange={this.handleChange}
                    name="cclose"
                    />
                    <br></br>
                    <input
                    placeholder="카페 간략 설명"
                    value={this.state.cdesc}
                    onChange={this.handleChange}
                    name="cdesc"
                    />
                    <br></br>
                    <button type="submit">카페 등록</button>
                </form>
            </div>
        )
    }
}