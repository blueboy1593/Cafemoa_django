import React from "react";
import {
    Row,
    Col,
    Table, 
    Button
} from 'antd';
import 'antd/dist/antd.css';
import { Badge } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import store from '../store';

class Basket extends React.Component {
    state = {}

    componentDidMount(){
        const basket = store.getState().basket
        console.log(basket)
        this.setState({
            menus: basket.menus,
        });
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
            return null;
        }
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
            <Row>
                <Col span={1} />
                <Col span={22}>
                    <Table columns={columns} dataSource={data} />
                    <div style={{ textAlign: 'right' }}>
                        <h5>총 금액: {price}원 <Button>결제하기</Button></h5>
                    </div>
                </Col>
                <Col span={1} />
            </Row>
        );
    }
}

export default Basket;