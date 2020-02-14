import React, {Component} from 'react';
import store from '../store';
import { withRouter , Link } from 'react-router-dom';
import axios from 'axios';
import {Form, Input, Icon, Button } from 'antd';

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
            uid: this.state.id,
            upass: this.state.pass
        }
 
        const base_url = process.env.REACT_APP_SERVER_IP
        console.log(base_url)
        axios.post(base_url + '/user/signin', params)
        .then(response => {
            console.log('로그인 요청')
            store.dispatch({type:'LOGIN', token:response.data.token})
            
            // 로컬스토리지에 저장하자!!
            // 이 코드로 로컬 스토리지에 저장한 상태이고 다른거 할 거 없음!
            localStorage.setItem(
                "login_token",
                JSON.stringify(response.data.token)
            );
            // let token = localStorage.getItem("login_token")
            // console.log(token)
            // 여기는 확인하는 코드!

            // 여기서 이제 보내줄 곳 정해버린다. 근데 딱히 안해줘도 될듯 일단은.
            // const user_state = store.getState().user_info
            // console.log(user_state)
            // this.props.history.push('/');
            this.props.history.push('/');
        }) 
        .catch(error => {
            console.log('error')
            console.error(error)
        })
      }
    render(){
        return(

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
                        className="form-control"
                        onChange={this.handleChange} 
                        name="pass"
                    />
            </Form.Item>
            <Form.Item style={{textAlign: 'center'}}>

            <Button type="primary" htmlType="submit" >
                 로그인
            </Button>
            <br/>
                <a href="https://kauth.kakao.com/oauth/authorize?client_id=f19ae1c386503f9082e85e5431870f4f&redirect_uri=http://localhost:3000/visitor/test&response_type=code">
                 <img src="/img/kakao_login.png" width="250px" alt="카카오로그인" style={{margin: 10}} /><br />
                </a>
                
                <img src="/img/naver_login.png" width="250px" alt="네이버로그인" />
            </Form.Item>
            <Form.Item>
                <Link className="login-form-forgot" to="/findId">아이디 찾기</Link>|
                <Link className="login-form-forgot" to="/findPass">비밀번호 찾기</Link>
                <p className="message">아이디가 없으신가요 ? <Link to='/visitor/signup'>회원가입하기 </Link></p>
            </Form.Item>
        </Form>
        )
    }
}

export default withRouter(Login);