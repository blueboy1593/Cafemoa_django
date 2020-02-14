import React, { Component } from "react";
import {
    Form,
    Modal,
    InputNumber,
    Select,
    Checkbox
} from 'antd';
import 'antd/dist/antd.css';
import { Card } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const { Option } = Select;

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
        const menu = this.props.menu

        const options = [
            { label: '헤이즐넛 시럽 추가', value: '1' },
            { label: '샷 추가', value: '2' },
            { label: '휘핑 추가', value: '3' },
        ];

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
                            <InputNumber id="quan" min={1} max={10} defaultValue={1} />
                        </Form.Item>
                        <Form.Item label="얼음">
                            <Select>
                                <Option value="1">기본</Option>
                                <Option value="2">얼음많이</Option>
                                <Option value="3">얼음적게</Option>
                            </Select>
                        </Form.Item>
                        <Form.Item label="옵션">
                            <Checkbox.Group options={options} />
                        </Form.Item>
                    </Form>
                </Modal>
            </div>
        )
    }
}
