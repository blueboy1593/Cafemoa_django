import React from "react";
import {
    Collapse,
    Row,
    Col,
    Form,
    Input,
    Button,
    List
} from 'antd';
import 'antd/dist/antd.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import MenuModal from "../components/MenuModal";
import { Link } from 'react-router-dom';

const { Panel } = Collapse;

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

class Order extends React.Component {

    state = { visible: false };

    componentDidMount(){
        const base_url = process.env.REACT_APP_SERVER_IP
        const ccid = this.props.location.ccid

        axios.get(base_url + `/menu/${ccid}`)
            .then(response =>{
            this.setState({
                menulist: response.data
            });
            });
        };


    render() {
        if (this.state.menulist === undefined) {
            return null;
        }
        const menulist = this.state.menulist

        return (
            <Row>
                <Col span={1} />
                <Col span={22}>
                    <Row>
                        <Col span={8} />
                        <Col span={8} >
                            <Form layout="inline" onSubmit={this.handleSearch}>
                                <Form.Item>
                                    <Input type="text" />
                                    <Button type="primary" htmlType="submit">검색</Button>
                                </Form.Item>
                            </Form>
                        </Col>
                        <Col span={8} />
                    </Row>
                    <Collapse accordion defaultActiveKey={['1']}>
                        
                        <Panel header="모든 메뉴" key="1">
                            <List
                                itemLayout="vertical"
                                size="large"
                                grid={{ column: 4 }}
                                dataSource={menulist}
                                renderItem={menu => (
                                    <List.Item key={menu.mmid} >
                                        <MenuModal menu={menu}></MenuModal>
                                    </List.Item>
                                    
                                )}
                            />
                        </Panel>

                        <Panel header="커피" key="2">
                            <p>{text}</p>
                        </Panel>
                        <Panel header="쥬스/스무디" key="3">
                            <p>{text}</p>
                        </Panel>
                        <Panel header="차" key="4">
                            <p>{text}</p>
                        </Panel>

                    </Collapse>
                  
                    <br />
                    <div style={{ textAlign: 'center' }}>
                        <Button>초기화</Button>{'   '}
                        <Link to='/customer/shoppinglist'>
                        <Button type="primary">장바구니로 가기</Button>
                        </Link>
                    </div>

                </Col>
                <Col span={1} />
            </Row>

        );
    }
}

export default Order;