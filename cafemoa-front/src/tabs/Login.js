import React, {Component} from 'react';
import store from '../store';
import { withRouter , Link } from 'react-router-dom';
import axios from 'axios';
import {Form, Input, Icon, Button } from 'antd';
import jwtDecode from 'jwt-decode';


class Login extends Component{
    state = {
        id: '',
        pass: ''
    }
    handleChange = (e) => {
        this.setState({
          [e.target.name]: e.target.value
        })
      }
    handleSubmit = (e) => {
        // 페이지 리로딩 방지
        e.preventDefault();
      
        const params = {
            username: this.state.id,
            password: this.state.pass
        }
 
        const base_url = process.env.REACT_APP_SERVER_IP
        axios.post(base_url + '/login/', params)
        .then(response => {
            console.log('로그인 요청')
            // store.dispatch({type:'LOGIN', token:response.data.token})
            console.log(response.data.token)
            const decoded_token = jwtDecode(response.data.token)
            const user_id = decoded_token.user_id
            axios.get(base_url + `/accounts/${user_id}`)
            .then(response => {
                const user_data = response.data
                store.dispatch({type:'LOGIN', user_data:user_data})
                localStorage.setItem(
                    "user_data",
                    JSON.stringify(user_data)
                );
                if (this.props.ccid) {
                  this.props.history.push(`/latte/cafedetail/${this.props.ccid}`);
                  return
                }
                this.props.history.push('/');
            })
        })
        .catch(error => {
            console.log('error')
            console.error(error)
        })
      }
    render(){
        return(
            <>
            <Form className="login-form" onSubmit={this.handleSubmit}>
            <Form.Item>
                <Input
                    value={this.state.id}
                    prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    placeholder="아이디를 입력하시오"
                    onChange={this.handleChange}
                    name="id"
                />
            </Form.Item>
            <Form.Item>
                <Input
                    prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    type="password"
                    value={this.state.pass}
                    placeholder="비밀번호를 입력하시오" 
                    onChange={this.handleChange} 
                    name="pass"
                />
            </Form.Item>
            <Form.Item style={{textAlign: 'center'}}>
            <Button type="warning" htmlType="submit" className="loginBtn mainBtn" >
                로그인
            </Button>    
            </Form.Item>

            <Form.Item style={{ textAlign: "center" }}>
                <a href="https://kauth.kakao.com/oauth/authorize?client_id=2ff88fcc7fc565ca09b4779e2757104e&redirect_uri=http://localhost:3000/latte/kakao&response_type=code">
                <img
                    src="/img/kakao_login.png"
                    width="250px"
                    alt="카카오로그인"
                    style={{ margin: 10 }}
                />
                <br />
                </a>
                <a href="https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=FA7itQNNdqjv2zVuS9_R&redirect_uri=http://localhost:3000/latte/naver&state=123">
                <img
                    src="/img/naver_login.png"
                    width="250px"
                    alt="네이버로그인"
                    style={{ margin: 10 }}
                />
                </a>
            </Form.Item>

            <Form.Item>    
                <p className="message">아이디가 없으신가요 ? <Link to='/latte/signup'>회원가입하기 </Link></p>
            </Form.Item>


        </Form>
        </>
        )
    }
}

export default withRouter(Login);