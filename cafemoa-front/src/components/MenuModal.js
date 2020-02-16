import React, { Component } from "react";
import {
    Form,
    Modal,
    InputNumber,
    // Select,
    // Checkbox
} from 'antd';
import 'antd/dist/antd.css';
import { Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import store from '../store';


export default class MenuModal extends Component {
    state = { visible: false,
              value:'',
              };

    showModal = () => {
        console.log(this.state)
        this.setState({
            visible: true
            
        });
    };

    onChange = (value) => {
        console.log('changed', value);
        this.setState({
            value: value,
        });
    };

    handleOk = (e) => {
        console.log(this)
        console.log(e)
        const menu = this.props.menu
        this.setState({
            visible: false,
        });
        const uid = store.getState().user_info.uid
        store.dispatch({type:'BASKET', 
            data: {
                ccid: menu.cafe,
                uid: uid,
                menu: {
                    mname:menu.mname,
                    mprice:menu.mprice,
                    mamount:this.state.value
                }
            }
        })
    };

    handleCancel = e => {
        this.setState({
            visible: false,
        });
    };


    render() {
        const menu = this.props.menu
        // console.log(menu)
        return (
            <div>
                <Card style={{  width: '70%', textAlign: 'center' }} onClick={this.showModal} >
                    <Card.Img variant="top" src={menu.mpic} alt={menu.mname} title={menu.mmid} style={{ width: '100%', height: 240 }} />
                    <Card.Body>
                        <Card.Text>
                            {menu.mname}
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Modal
                    title={menu.mname}
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                    okText="장바구니 담기"
                    cancelText="취소"
                    pic={menu.mpic}                                            
                >
                    <div style={{ textAlign: 'center' }}>
                        <img src={menu.mpic} alt="메뉴이미지" width="70%" />
                    </div>
                    <Form labelCol={{ span: 5 }} wrapperCol={{ span: 12 }}>
                        <Form.Item label="수량">
                            <InputNumber id="quan" min={1} max={10} defaultValue={1} onChange={this.onChange}/>
                        </Form.Item>
                    </Form>
                </Modal>
            </div>
        )
    }
}
