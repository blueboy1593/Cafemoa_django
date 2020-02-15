import React from "react";
import {
    Row,
    Col,
    Input,
    Divider,
    List,
    Card,
    Rate,
} from 'antd';
import 'antd/dist/antd.css';
import { Link } from "react-router-dom";
import axios from 'axios';

const { Search } = Input;

class CafeList extends React.Component {
    state = {}
    
    componentDidMount(){
        const base_url = process.env.REACT_APP_SERVER_IP
        axios.get(base_url + '/cafes')
            .then(response =>{
            this.setState({
                cafeList: response.data
            });
            });
        };

    handleSearch = (value) => {
        console.log('Received values of Search: ', value);
        this.setState({
            keyword:value.toUpperCase()
        })
    };

    render() {
        if (this.state.cafeList === undefined) {
            return null;
        }
        let {cafeList} = this.state;
        if (this.state.keyword) {
            cafeList = cafeList.filter(cafe => {
                const keyword = this.state.keyword
                if (cafe.cname.toUpperCase().includes(keyword)) {
                    return cafe
                };
                return null;
            });
        };
        
        return (
            <Row>
                <Col span={1} />
                <Col span={22}>
                    <Row>
                        <Col span={8} />
                        <Col span={8} >
                            <Search
                                placeholder="카페명을 검색해 주세요."
                                enterButton="Search"
                                size="large"
                                onSearch={value => this.handleSearch(value)}
                            />
                        </Col>
                        <Col span={8} />
                    </Row>
                    <Divider orientation="left">현재 운영중인 카페</Divider>
                    
                    <List
                        itemLayout="vertical"
                        size="large"
                        pagination={{
                            pageSize: 10
                        }}
                        grid={{ gutter: 36, column: 2 }}
                        dataSource={cafeList}
                        
                        renderItem={ cafe =>(
                            <Link to={{
                                pathname:'/latte/cafedetail',
                                cafe:cafe,
                            }}>
                            <List.Item
                                key={cafe.ccid}>
                                <Card cover={
                                    <img
                                        alt={cafe.cname}
                                        src={cafe.cpic}
                                    />
                                }>
                                    <List.Item.Meta
                                        title={cafe.cname}
                                    />
                                    위치 : {cafe.cloc}
                                    <br/>
                                    평점 : <Rate disabled allowHalf defaultValue={2.5} />             
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

export default CafeList;
