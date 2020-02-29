import React from "react";
import {
    Collapse,
    Row,
    Col,
    Button,
    List
} from 'antd';
import 'antd/dist/antd.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import MenuModal from "../components/MenuModal";
import { Link } from 'react-router-dom';
import LatteNavbar from '../headers/LatteNavbar';

const { Panel } = Collapse;

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
        const ccid = this.props.location.ccid
        const menulist = this.state.menulist
        const coffelist = menulist.filter(menu => {
            if (menu.mtype === 1) {
                return menu
            }
            return null;
        })
        const juicelist = menulist.filter(menu => {
            if (menu.mtype === 2) {
                return menu
            }
            return null;
        })
        const tealist = menulist.filter(menu => {
            if (menu.mtype === 3) {
                return menu
            }
            return null;
        })
        const dessertlist = menulist.filter(menu => {
            if (menu.mtype === 4) {
                return menu
            }
            return null;
        })
        return (
            <>
            <LatteNavbar></LatteNavbar>
            <Row>
                <Col span={1} />
                <Col span={22}>
                    <Collapse accordion defaultActiveKey={['1']}>
                        <Panel header="커피" key="1">
                            <List
                                itemLayout="horizontal"
                                size="medium"
                                grid={{ column: 2 }}
                                dataSource={coffelist}
                                renderItem={menu => (
                                    <List.Item key={menu.mmid} >
                                        <MenuModal menu={menu}></MenuModal>
                                    </List.Item>
                                )}
                            />
                        </Panel>
                        <Panel header="쥬스/스무디" key="2">
                            <List
                                itemLayout="horizontal"
                                size="medium"
                                grid={{ column: 2 }}
                                dataSource={juicelist}
                                renderItem={menu => (
                                    <List.Item key={menu.mmid} >
                                        <MenuModal menu={menu}></MenuModal>
                                    </List.Item>
                                )}
                            />
                        </Panel>
                        <Panel header="차" key="3">
                            <List
                                itemLayout="horizontal"
                                size="medium"
                                grid={{ column: 2 }}
                                dataSource={tealist}
                                renderItem={menu => (
                                    <List.Item key={menu.mmid} >
                                        <MenuModal menu={menu}></MenuModal>
                                    </List.Item>
                                )}
                            />
                        </Panel>
                        <Panel header="디저트" key="4">
                            <List
                                itemLayout="horizontal"
                                size="medium"
                                grid={{ column: 2 }}
                                dataSource={dessertlist}
                                renderItem={menu => (
                                    <List.Item key={menu.mmid} >
                                        <MenuModal menu={menu}></MenuModal>
                                    </List.Item>
                                )}
                            />
                        </Panel>
                        <Panel header="모든 메뉴" key="5">
                            <List
                                itemLayout="vertical"
                                size="large"
                                grid={{ column: 2 }}
                                dataSource={menulist}
                                renderItem={menu => (
                                    <List.Item key={menu.mmid} >
                                        <MenuModal menu={menu}></MenuModal>
                                    </List.Item>
                                )}
                            />
                        </Panel>
                    </Collapse>
                  
                    <br />
                    <div style={{ textAlign: 'center' }}>
                        <Link to={`/latte/cafedetail/${ccid}`}>
                        <Button className="subBtn">뒤로</Button>{'   '}
                        </Link>
                        <Link to='/latte/basket'>
                        <Button className="mainBtn">장바구니</Button>
                        </Link>
                    </div>

                </Col>
                <Col span={1} />
            </Row>
            </>
        );
    }
}

export default Order;