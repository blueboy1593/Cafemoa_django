import React from "react";
import {
    Row,
    Col,
    Rate,
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
        const base_url = process.env.REACT_APP_SERVER_IP
        const ccid = this.props.location.cafe.ccid
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
                                    <Card.Title>카페 이름</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">카페 위치 - {cafe.cloc}</Card.Subtitle>
                                    <Card.Subtitle className="mb-2 text-muted">평점 <Rate disabled allowHalf defaultValue={2.5} /></Card.Subtitle>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk
                                        of the card's content.Some quick example text to build on the card title and make up the bulk
                                        of the card's content.
                                        Some quick example text to build on the card title and make up the bulk
                                        of the card's content.Some quick example text to build on the card title and make up the bulk
                                        of the card's content.
                                    </Card.Text>
                                    {function() {
                                        if (role === 'HOST' || role === 'GUEST') return (
                                            <Link to={{
                                                pathname:'/latte/order',
                                                ccid:ccid,
                                                }}>
                                            <Button type="primary">주문하기</Button>
                                            </Link>
                                         );
                                         else return (
                                            <div>
                                                <Button type="primary" onClick={this.showModal}>로그인하고 주문하기</Button>
                                                    <Modal
                                                    title="로 그 인"
                                                    visible={this.state.visible}
                                                    onOk={this.handleOk}
                                                    onCancel={this.handleCancel}
                                                    footer={null}
                                                    >
                                                    <Login ></Login>
                                                </Modal>
                                            </div>
                                         );
                                    }.bind(this)()}
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                    
                    <Divider>대표 메뉴</Divider>
                    <div style={{ textAlign: 'center' }}>
                        <Carousel style={{ width: '25rem', display: 'inline-block' }}>
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
                                <Carousel.Caption>
                                    <h5>{menu.mname}</h5>
                                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                </Carousel.Caption>
                                </Carousel.Item>

                            ))}
                        </Carousel>
                    </div>
                </Col>
                <Col span={1} />
            </Row>
        );
    }
}

export default CafeDetail;