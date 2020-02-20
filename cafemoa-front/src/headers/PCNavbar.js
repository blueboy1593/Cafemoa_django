import React, { Component } from 'react'
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import store from '../store';
import { Modal, Button} from 'antd';
import Login from '../tabs/Login';
// import './a.css';

export default class PCNavbar extends Component {
  state = { visible: false
  };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = e => {
    this.setState({
      visible: false,
    });
    
  };

  handleCancel = e => {
    this.setState({
      visible: false,
    });
  };


  render() {
    const role = store.getState().user_info.role
    console.log(role)
    return (
      <div>
        <Navbar bg="fade" expand="lg" className="PC">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            {
              (function() {
                if (role === 'HOST') return (
                  <>
                    <Link to='/latte' className="menuBarItemPC"><p className="menuBar_listPC">카페정보</p></Link>
                    <Link to='/latte/mycafeorder' className="menuBarItemPC"><p className="menuBar_listPC">주문관리</p></Link>
                    <Link to='/latte/mycafemanage' className="menuBarItemPC"><p className="menuBar_listPC">내카페관리</p></Link>
                  </>
                );
                else if (role === 'GUEST') return (
                  <>
                    <Link to='/latte' className="menuBarItemPC"><p className="menuBar_listPC">카페정보</p></Link>
                    <Link to='/latte/nearcafe' className="menuBarItemPC"><p className="menuBar_listPC">주변카페</p></Link>
                    <Link to='/latte/basket' className="menuBarItemPC"><p className="menuBar_listPC">장바구니</p></Link>
                  </>
                )
                else return (
                  <>
                  <Link to='/latte' className="menuBarItemPC"><p className="menuBar_listPC">카페정보</p></Link>
                  <Link to='/latte/nearcafe' className="menuBarItemPC"><p className="menuBar_listPC">주변카페</p></Link>
                  </>
                );
              })()
            }
          </Nav>
          <Nav>
            {
              (function() {
                if (role === 'HOST' || role === 'GUEST') return (
                  <>
                    <Link to='/latte/mypage' className="menuBarItemPC"><p className="menuBar_listPC">마이페이지</p></Link>
                    <Link to='/latte/logout' className="menuBarItemPC"><p className="menuBar_listPC">로그아웃</p></Link>
                  </>
                );
                else return (
                  <>
                    <div>
                    <Button type="link" onClick={this.showModal} className="menuBarItemPC"><p className="menuBar_listPC">로그인</p></Button>
                    <Modal
                      title="로 그 인"
                      visible={this.state.visible}
                      onOk={this.handleOk}
                      onCancel={this.handleCancel}
                      footer={null}
                    >
                      <Login ></Login>
                  
                    </Modal>
                  </div>
                    <Link to='/latte/signup' className="menuBarItemPC"><p className="menuBar_listPC">회원가입</p></Link>
                  </>
                );
              }).bind(this)()
            }
          </Nav>
          </Navbar.Collapse>
          <Navbar.Brand>
            <Link to='/'>
              <img
                  alt="모아 로고"
                  src="/img/logo_cafemoa.png"
                  className="d-inline-block align-top main_logo"
              />{' '}
            </Link>
          </Navbar.Brand>
          <Nav className="MyPage">
            <Link to='/latte/mypage'>
            <img alt="모아 로고"
                src="/img/myPage_icon.png"
                className="d-inline-block align-top main_mypage"/>{' '}
            </Link>
          </Nav>
      </Navbar>
    
      </div>
    )
  }
}
