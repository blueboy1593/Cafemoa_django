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
            basket: basket,
        });
    }

    render() {
        if (this.state.basket === undefined) {
            return null;
        }
        const data = this.state.basket.menus;
        
        var price = 0;
        data.map(menu => {
            const temp = menu.mprice * menu.mquantity
            price = price + temp
            return null;
        })
        console.log(price)
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
                dataIndex: 'deleteCheck',
                key: 'deleteCheck',
                render: mmid => <Badge pill variant="danger">삭제</Badge> // 여기에 onClick 추가 하셈~!
            }
        ];


        // 더미 데이터
        // const data = [
        //     {
        //         key: '1',
        //         mpic: "https://image.istarbucks.co.kr/upload/store/skuimg/2015/08/[110563]_20150813222100303.jpg",
        //         mname: 'John Brown',
        //         mquantity: 1,
        //         mprice: 4000,
        //         moption: '샷 추가',
        //     },
        //     {
        //         key: '2',
        //         mpic: "https://image.istarbucks.co.kr/upload/store/skuimg/2015/08/[110563]_20150813222100303.jpg",
        //         mname: 'John Brown',
        //         mquantity: 2,
        //         mprice: 3000,
        //         moption: '없음',
        //     },
        //     {
        //         key: '3',
        //         mpic: "https://image.istarbucks.co.kr/upload/store/skuimg/2015/08/[110563]_20150813222100303.jpg",
        //         mname: 'John Brown',
        //         mquantity: 3,
        //         mprice: 2500,
        //         moption: '휘핑 추가',
        //     },
        // ];

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