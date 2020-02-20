import React from "react";
import {
    Row,
    Col,
    Tabs, 
    Table, 
    Popover    
} from 'antd';
import 'antd/dist/antd.css';
import { Badge } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


const { TabPane } = Tabs;
class MyCafeOrder extends React.Component {

    approveOrder = () => {

    }

    rejectOrder = () => {

    }

    render() {
        const waitingColumns = [
            {
                title: '주문 번호',
                dataIndex: 'oid',
                key: 'oid',
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
                            orderInfo
                            // for문으로 음료 정보 보여주기
                            // 아메리카노 M 헤이즐넛 시럽 추가 1개<br>
                            // 라떼 L 2개
                        }
                    </span>
                ), 
            },
            {
                title: <Popover content="주문을 승인하려면 승인 버튼을, 거부하려면 거부 버튼을 눌러주세요.">주문 승인 및 거부</Popover>,
                dataIndex: 'approveButton',
                key: 'approveButton',
                render: oid => <span>
                    <Badge pill variant="danger" onClick={this.approveOrder}>승인</Badge>{' '}
                    <Badge pill variant="danger" onClick={this.rejectOrder}>거부</Badge>
                </span>,
            },
        ];
        const makingColumns = [
            {
                title: '주문 번호',
                dataIndex: 'oid',
                key: 'oid',
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
                            orderInfo
                            // for문으로 음료 정보 보여주기
                            // 아메리카노 M 헤이즐넛 시럽 추가 1개<br>
                            // 라떼 L 2개
                        }
                    </span>
                ), 
            },
            {
                title: <Popover content="주문 제작이 완료되면 제작 완료 버튼을 눌러 픽업 안내 알림을 보내세요.">제작 완료</Popover>,
                dataIndex: 'completeButton',
                key: 'completeButton',
                render: oid => <Badge pill variant="danger" onClick={this.completeOrder}>제작 완료</Badge>,
            },
        ];
        const completeColumns = [
            {
                title: '주문 번호',
                dataIndex: 'oid',
                key: 'oid',
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
                            orderInfo
                            // for문으로 음료 정보 보여주기
                            // 아메리카노 M 헤이즐넛 시럽 추가 1개<br>
                            // 라떼 L 2개
                        }
                    </span>
                ), 
            },
            {
                title: <Popover content="픽업이 완료되면 버튼을 눌러주세요.">픽업 완료</Popover>,
                dataIndex: 'pickUpButton',
                key: 'pickUpButton',
                render: oid => <Badge pill variant="danger" onClick={this.approveOrder}>픽업 완료</Badge>,
            },
        ];

        // 더미 데이터
        const waitingData = [
            {
                oid: '234',
                nickname: "김시효",
                orderInfo: "아메리카노 M 헤이즐넛 시럽 추가 1개",
            },
            {
                oid: '432',
                nickname: "김도하",
                orderInfo: "아메리카노 S 헤이즐넛 시럽 추가 1개",
            },
            {
                oid: '345',
                nickname: "김강현",
                orderInfo: "아메리카노 M 헤이즐넛 시럽 추가 1개",
            },
        ];
        const makingData = [
            {
                oid: '234',
                nickname: "김시효",
                orderInfo: "아메리카노 M 헤이즐넛 시럽 추가 1개",
            },
            {
                oid: '432',
                nickname: "김도하",
                orderInfo: "아메리카노 S 헤이즐넛 시럽 추가 1개",
            },
            {
                oid: '345',
                nickname: "김강현",
                orderInfo: "아메리카노 M 헤이즐넛 시럽 추가 1개",
            },
        ];
        const completeData = [
            {
                oid: '234',
                nickname: "김시효",
                orderInfo: "아메리카노 M 헤이즐넛 시럽 추가 1개",
            },
            {
                oid: '432',
                nickname: "김도하",
                orderInfo: "아메리카노 S 헤이즐넛 시럽 추가 1개",
            },
            {
                oid: '345',
                nickname: "김강현",
                orderInfo: "아메리카노 M 헤이즐넛 시럽 추가 1개",
            },
        ];

        return (
            <Row>
                <Col span={1} />
                <Col span={22}>
                    <Tabs defaultActiveKey="1" size="large">
                        <TabPane tab={<span>주문 대기 <Badge variant="danger">3</Badge></span>} key="1">
                            <Table columns={waitingColumns} dataSource={waitingData} />
                        </TabPane>
                        <TabPane tab={<span>음료 제작 <Badge variant="danger">3</Badge></span>} key="2">
                            <Table columns={makingColumns} dataSource={makingData} />
                        </TabPane>
                        <TabPane tab={<span>픽업 대기 <Badge variant="danger">3</Badge></span>} key="3">
                            <Table columns={completeColumns} dataSource={completeData} />
                        </TabPane>
                    </Tabs>
                </Col>
                <Col span={1} />
            </Row>
        );
    }
}
// ReactDOM.render(<MyCafeOrder />, document.getElementById("react-root"));

export default MyCafeOrder;