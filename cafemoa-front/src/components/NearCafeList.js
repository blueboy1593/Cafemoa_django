import React from "react";
import {
    Row,
    Col,
    Divider,
    List,
    Card,
} from 'antd';
import 'antd/dist/antd.css';
import { Link } from "react-router-dom";
import axios from 'axios';

class NearCafeList extends React.Component {
    state = {}
    componentDidMount(){
        const base_url = process.env.REACT_APP_SERVER_IP
        axios.get(base_url + '/cafe/all')
            .then(response =>{
            this.setState({
                cafeList: response.data
            });
            });
        };

    render() {
        if (this.state.cafeList === undefined) {
            return null;
        }
        let {cafeList} = this.state;
        cafeList = cafeList.map(cafe => {
            if (cafe) {
                var haversine = require('haversine-distance')
                const mypos = {
                    lat:this.props.latitude,
                    lng:this.props.longitude
                }
                const cpos = {
                    lat:cafe.latitude,
                    lon:cafe.longitude
                }
                const dis = haversine(mypos, cpos)
                cafe['distance'] = parseInt(dis) 
                return cafe
            };
            return null;
        });
        
        var sortingField = "distance";
        cafeList = cafeList.sort(function(a, b) {
            return a[sortingField] - b[sortingField]
        });
        
        return (
            <Row>
                <Col span={1} />
                <Col span={22}>
                    <Row>
                    </Row>
                    <Divider orientation="center">거리가 가까운 카페</Divider>
                    
                    <List
                        itemLayout="vertical"
                        size="large"
                        pagination={{
                            pageSize: 3
                        }}
                        grid={{ gutter: 36, column: 1 }}
                        dataSource={cafeList}
                        
                        renderItem={ cafe =>(
                            <Link to={{
                                pathname:`/latte/cafedetail/${cafe.ccid}`,
                                cafe:cafe,
                            }}>
                            <List.Item
                                key={cafe.ccid}>
                                {/* <div style={{ width: '100%', height: '150px', textAlign: 'center', backgroundColor: 'white' }}>
                                    <img src={cafe.cpic} style={{  width: '130px', height: '130px', margin: '10px' }}/>
                                    <div>{cafe.cname}</div>
                                    나와의 거리 : {cafe.distance} m
                                </div> */}
                                 <Card 
                                style={{ display: 'flex', width: '100%', textAlign: 'center', padding: '0',  }}
                                >
                                    <Row>
                                        <Col span={12}>
                                        <img src={cafe.cpic} alt={cafe.cname} style={{  width: '100%', height: '100px' }}/>
                                    </Col>
                                    <Col span={12}>
                                    <List.Item.Meta style={{paddingTop:'10px'}}
                                        title={cafe.cname}
                                    />
                                    {cafe.distance} m
                                    </Col>
                                    </Row>
                                </Card> 
                            </List.Item>
                            </Link> 
                        )}
                    />
                </Col>
                <Col span={8} />
            </Row>
        );
    }
}

export default NearCafeList;
