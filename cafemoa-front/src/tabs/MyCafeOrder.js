import React from "react";
import {
    Row,
    Col,
    Tabs, 
    Table, 
    Popover,
    Divider,
    Button
} from 'antd';
import 'antd/dist/antd.css';
import { Badge } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import PCNavbar from '../headers/PCNavbar';

const { TabPane } = Tabs;
class MyCafeOrder extends React.Component {
    state = {
        waitingData: [
            {
                key: '1',
                nickname: "김시효",
                orderInfo: [
                    "아메리카노 1잔",
                    "카라멜 마끼야또 2잔"
                ]
            },
            {
                key: '2',
                nickname: "김도하",
                orderInfo: [
                    "아메리카노 S 헤이즐넛 시럽 추가 1개",
                ]
            },
            {
                key: '3',
                nickname: "김강현",
                orderInfo: [
                    "아메리카노 1잔",
                    "카라멜 마끼야또 2잔",
                    "샌드위치 1개"
                ]
            },
            {
                key: '4',
                nickname: "윤가영",
                orderInfo: [
                    "아메리카노 1잔",
                    "카라멜 마끼야또 2잔",
                    "샌드위치 1개"
                ]
            },
            {
                key: '5',
                nickname: "이수민",
                orderInfo: [
                    "아메리카노 1잔",
                    "카라멜 마끼야또 2잔",
                    "샌드위치 1개"
                ]
            },
        ],
        makingData: [],
        completeData: [],
        pickupData: []
    }
    approveOrder = (oid) => {
        const a = this.state.waitingData
        const b = a.filter(menu => {
            if (menu.key !== oid) {
                return menu    
            }
            return null;
        })
        const c = a.filter(menu => {
            if (menu.key === oid) {
                return menu
            }
            return null;
        })
        const d = c[0]
        const e = this.state.makingData
        this.setState({
            waitingData:b,
            makingData: [
                ...e,
                d
            ]
        })
    }

    rejectOrder = (oid) => {
        const a = this.state.waitingData
        const b = a.filter(menu => {
            if (menu.key !== oid) {
                return menu    
            }
            return null;
        })
        this.setState({
            waitingData:b
        })
    }

    completeOrder = (oid) => {
        const a = this.state.makingData
        const b = a.filter(menu => {
            if (menu.key !== oid) {
                return menu    
            }
            return null;
        })
        const c = a.filter(menu => {
            if (menu.key === oid) {
                return menu
            }
            return null;
        })
        const d = c[0]
        const e = this.state.completeData
        this.setState({
            makingData:b,
            completeData: [
                ...e,
                d
            ]
        })
    }

    pickupOrder = (oid) => {
        const a = this.state.completeData
        const b = a.filter(menu => {
            if (menu.key !== oid) {
                return menu    
            }
            return null;
        })
        const c = a.filter(menu => {
            if (menu.key === oid) {
                return menu
            }
            return null;
        })
        const d = c[0]
        const e = this.state.pickupData
        this.setState({
            completeData:b,
            pickupData: [
                ...e,
                d
            ]
        })
    }

    render() {
        const waitingColumns = [
            {
                title: '주문 번호',
                dataIndex: 'key',
                key: 'key',
            },
            {
                title: '주문자',
                dataIndex: 'nickname',
                key: 'nickname',
            },
            {
                title: '주문 정보',
                dataIndex: 'orderInfo',
                key: 'orderInfo',
                render: orderInfo => (
                    <span>
                        {
                            orderInfo.map((order, index) => {
                                return (<div key={index}>{order}<br/></div>)
                            })
                        }
                    </span>
                ), 
            },
            {
                title: <Popover content="주문을 승인하려면 승인 버튼을, 거부하려면 거부 버튼을 눌러주세요.">주문 승인 및 거부</Popover>,
                dataIndex: 'key',
                key: 'orderinfo',
                render: key => <span>
                    <Button className="mainBtn" onClick={() => this.approveOrder(key)}>승인</Button>
                    <Button className="subBtn" onClick={() => this.rejectOrder(key)}>거부</Button>
                </span>,
            },
        ];
        const makingColumns = [
            {
                title: '주문 번호',
                dataIndex: 'key',
                key: 'key',
            },
            {
                title: '주문자',
                dataIndex: 'nickname',
                key: 'nickname',
            },
            {
                title: '주문 정보',
                dataIndex: 'orderInfo',
                key: 'orderInfo',
                render: orderInfo => (
                    <span>
                        {
                            orderInfo.map((order, index) => {
                                return (<div key={index}>{order}<br/></div>)
                            })
                        }
                    </span>
                ), 
            },
            {
                title: <Popover content="주문 제작이 완료되면 제작 완료 버튼을 눌러 픽업 안내 알림을 보내세요.">제작 완료</Popover>,
                dataIndex: 'key',
                key: 'completeButton',
                render: key => <Button className="mainBtn" onClick={() => this.completeOrder(key)}>제작 완료</Button>
            },
        ];
        const completeColumns = [
            {
                title: '주문 번호',
                dataIndex: 'key',
                key: 'key',
            },
            {
                title: '주문자',
                dataIndex: 'nickname',
                key: 'nickname',
            },
            {
                title: '주문 정보',
                dataIndex: 'orderInfo',
                key: 'orderInfo',
                render: orderInfo => (
                    <span>
                        {
                            orderInfo.map((order, index) => {
                                return (<div key={index}>{order}<br/></div>)
                            })
                        }
                    </span>
                ), 
            },
            {
                title: <Popover content="픽업이 완료되면 버튼을 눌러주세요.">픽업 완료</Popover>,
                dataIndex: 'key',
                key: 'pickUpButton',
                
                render: key => <Button className="mainBtn" onClick={() => this.pickupOrder(key)}>픽업 완료</Button>
            },
        ];

        const waitingData = this.state.waitingData
        const makingData = this.state.makingData
        const completeData = this.state.completeData
        const pickupData = this.state.pickupData

        return (
            <>
            <PCNavbar></PCNavbar>
            <Row>
                <Col span={1} />
                <Col span={22}>
                    <Tabs defaultActiveKey="1" size="large">
                        <TabPane tab={<span>주문 대기 <Badge variant="danger">{waitingData.length}</Badge></span>} key="1">
                            <Table columns={waitingColumns} dataSource={waitingData} />
                        </TabPane>
                        <TabPane tab={<span>음료 제작 <Badge variant="danger">{makingData.length}</Badge></span>} key="2">
                            <Table columns={makingColumns} dataSource={makingData} />
                        </TabPane>
                        <TabPane tab={<span>픽업 대기 <Badge variant="danger">{completeData.length}</Badge></span>} key="3">
                            <Table columns={completeColumns} dataSource={completeData} />
                            <Divider orientation="center">픽업 완료된 주문</Divider>
                            <Table columns={completeColumns} dataSource={pickupData} />
                        </TabPane>
                    </Tabs>
                </Col>
                <Col span={1} />
            </Row>
            </>
        );
    }
}
// ReactDOM.render(<MyCafeOrder />, document.getElementById("react-root"));

export default MyCafeOrder;