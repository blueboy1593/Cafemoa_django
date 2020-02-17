import React from "react";
import {
    Row,
    Col,
    Button,
    Divider,
    Modal
} from 'antd';
import 'antd/dist/antd.css';
import { Link } from 'react-router-dom';
import { Card, Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import store from '../store';
import Login from '../tabs/Login';
import KakaomapDetail from "../components/KakaomapDetail";
import LatteNavbar from '../headers/LatteNavbar';


class CafeDetail extends React.Component {
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
    
    componentDidMount(){
        // this.props.match.params.value
        const base_url = process.env.REACT_APP_SERVER_IP
        // const ccid = this.props.location.cafe.ccid
        const ccid = this.props.match.params.value
        axios.get(base_url + `/cafes/${ccid}/`)
            .then(response =>{
            console.log(response)
            this.setState({
                cafe: response.data,
                ccid: ccid
            });
            });
        };

    render() {
        if (this.state.cafe === undefined) {
            return null;
        }
        const cafe = this.state.cafe
        const ccid = this.state.ccid
        const menus = cafe.menus
        const role = store.getState().user_info.role
        return (
            <>
            <LatteNavbar></LatteNavbar>
            <Row>
                <Col span={1} />
                <Col span={22}>
                    <Card>
                        <Card.Body>
                            <Row>
                                <Col span={10}>
                                    <Card.Img src={cafe.cpic} alt={cafe.cname}/>
                                </Col>
                                <Col span={1} />
                                <Col span={13}>
                                    <Card.Title>{cafe.cname}</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">
                                        
                                    </Card.Subtitle>
                                    <Card.Text>
                                        {cafe.cdes}
                                    </Card.Text>
                                    {function() {
                                        if (role === 'HOST' || role === 'GUEST') return (
                                            <Link to={{
                                                pathname:'/latte/order',
                                                ccid:ccid,
                                                }}>
                                            <Button type="warning mainBtn">주문하기</Button>
                                            </Link>
                                         );
                                         else return (
                                            <div>
                                                <Button type="warning mainBtn" onClick={this.showModal}>로그인하고 주문하기</Button>
                                                    <Modal
                                                    title="로 그 인"
                                                    visible={this.state.visible}
                                                    onOk={this.handleOk}
                                                    onCancel={this.handleCancel}
                                                    footer={null}
                                                    >
                                                    <Login ccid={ccid}></Login>
                                                </Modal>
                                            </div>
                                         );
                                    }.bind(this)()}
                                </Col>
                            </Row>
                        </Card.Body>
                        <hr></hr>
                        <Card.Footer>
                        <KakaomapDetail latitude={cafe.latitude} longitude={cafe.longitude}/>
                        </Card.Footer>
                    </Card>
                    
                    <Divider>대표 메뉴</Divider>
                    <div style={{ textAlign: 'center' }}>
                        <Carousel style={{ width: '20rem', height: '20rem', display: 'inline-block' }}>
                            {menus.map(menu => (
                                <Carousel.Item 
                                    key = {menu.mmid}
                                    mname = {menu.mname}
                                    mpic = {menu.mpic}
                                >
                                <img
                                    className="d-block w-100"
                                    src={menu.mpic}
                                    alt={menu.mname}
                                />
                                </Carousel.Item>
                            ))}
                        </Carousel>
                    </div>
                </Col>
                <Col span={1} />
            </Row>
            </>
        );
    }
}

export default CafeDetail;