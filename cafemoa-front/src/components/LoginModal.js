import React from 'react'
import { Modal, Button} from 'antd';
import Login from '../tabs/Login';

export default function LoginModal() {
  state = { visible: false
  };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
    
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  return (
    <div>
      <Button type="link" onClick={this.showModal}><img src="/img/login.png" alt="로그인" /></Button>
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
  )
}
