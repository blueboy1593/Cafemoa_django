import React from "react";
import {
    Row,
    Col,
    Table, 
    Button,
    Form,
    Modal
} from 'antd';
import 'antd/dist/antd.css';
import { Badge } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import store from '../store';
import LatteNavbar from '../headers/LatteNavbar';
import axios from 'axios';


class Basket extends React.Component {
    state = { visible: false }

    showModal = () => {
        this.setState({
            visible: true
        });
    };

    handleCancel = e => {
        this.setState({
            visible: false,
        });
    };

    handleOk = (price, data) => {
        const content = `${data[0].mname} 및 ${data.length} 건`
        const ccid = this.state.ccid
        const uid = this.state.uid
        const order_data = {
            user: uid,
            cafe: ccid,
            oprice: price,
            content: content
        }
        const base_url = process.env.REACT_APP_SERVER_IP
        axios.post(base_url + '/cafes/order/', order_data)
            .then(response => {
                this.props.history.push('/latte/mypage');
                console.log(response)
            })
            .catch(error => {
                console.log('error')
                console.error(error)
            })
    };

    componentDidMount(){
        const basket = store.getState().basket
        // console.log(basket)
        if (basket !== undefined) {
            this.setState({
                ccid: basket.ccid,
                uid: basket.uid,
                menus: basket.menus,
            });    
        }
    }

    handleClick(key, data){
        const new_data = data.filter(menu => {
            if (menu.key !== key) {
                return menu
            }
            return null;
        })
        store.dispatch({type:'BASKET_DELETE',menus:new_data}) 
        this.setState({
            menus: new_data
        })
    }

    render() {
        if (this.state.menus === undefined) {
            return (
                <div>
                    <LatteNavbar></LatteNavbar>
                    장바구니가 비었습니다.
                </div>
            )
        } else {
            const data = this.state.menus;
            var price = 0;
            data.map(menu => {
                const temp = menu.mprice * menu.mquantity
                price = price + temp
                return null;
            })
            const columns = [
                {
                    title: '메뉴 사진',
                    dataIndex: 'mpic',
                    key: 'mpic',
                    render: image => <img src={image} width="45px" alt="이미지" />,
                },
                {
                    title: '메뉴 이름',
                    dataIndex: 'mname',
                    key: 'mname',
                    // render: text => <a>{text}</a>,
                },
                {
                    title: '수량',
                    dataIndex: 'mquantity',
                    key: 'mquantity',
                    // render: quantity => <a>{quantity}개</a>,
                },
                {
                    title: '가격',
                    dataIndex: 'mprice',
                    key: 'mprice',
                    // render: price => <a>{price}원</a>,
                },
                {
                    title: '삭제',
                    dataIndex: 'key',
                    key: 'key',
                    render: key => <Badge pill variant="danger" onClick={() => this.handleClick(key, data)}>삭제</Badge> // 여기에 onClick 추가 하셈~!
                }
            ];

            return (
                <>
                <LatteNavbar></LatteNavbar>
                <Row>
                    <Col span={1} />
                    <Col span={22}>
                        <Table columns={columns} dataSource={data} />
                        <div style={{ textAlign: 'center' }}>
                            <h5>총 주문 금액: {price}원 | <Button className="mainBtn" onClick={this.showModal}>주문하기</Button></h5>
                        </div>
                    </Col>
                    <Col span={1} />
                </Row>
                <Modal
                    title= "결제하기"
                    visible={this.state.visible}
                    onOk={() => this.handleOk(price, data)}
                    onCancel={this.handleCancel}
                    okText="결제하기"
                    cancelText="취소하기"
                    pic={data[0].mpic}
                >
                    <div style={{ textAlign: 'center' }}>
                        <img src={data[0].mpic} alt="대표이미지" width="70%" />
                    </div>
                    <hr></hr>
                    <Form labelCol={{ span: 6 }} wrapperCol={{ span: 12 }}>
                        <Form.Item style = {{ alignContent: 'center', textAlign: 'center' }}>
                            {data[0].mname} 및 {data.length} 건
                            <br></br>
                            결제 가격 : {price}원
                        </Form.Item>
                    </Form>
                </Modal>
                </>
            );
        }
    }
}

export default Basket;