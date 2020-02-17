import React from "react";
import {
    Row,
    Col,
    Input,
    Divider,
    List,
    Card,
} from 'antd';
import 'antd/dist/antd.css';
import { Link } from "react-router-dom";
import axios from 'axios';
import LatteNavbar from '../headers/LatteNavbar';


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
            <>
            <LatteNavbar></LatteNavbar>
            <Row>
                <Col span={1} />
                <Col span={22}>
                    <Row>
                        <Col span={4} />
                        <Col span={16} >
                            <Search 
                                size="large"
                                onSearch={value => this.handleSearch(value)}
                            />
                        </Col>
                        <Col span={4} />
                    </Row>
                    <Divider orientation="center"></Divider>
                    
                    <List
                        itemLayout="vertical"
                        size="large"
                        pagination={{
                            pageSize: 4
                        }}
                        grid={{ gutter: 36, column: 2 }}
                        dataSource={cafeList}
                        
                        renderItem={ cafe =>(
                            <Link to={{
                                pathname:`/latte/cafedetail/${cafe.ccid}`,
                                cafe:cafe,
                            }}>
                            <List.Item
                                key={cafe.ccid}>
                                <Card 
                                style={{  width: '100%', textAlign: 'center', padding: '5%', height: '150px' }}
                                cover={
                                    <img
                                        alt={cafe.cname}
                                        src={cafe.cpic}
                                        // style={{  width: '90%', textAlign: 'center', padding: '5%', height: "250px" }}
                                    />
                                }>
                                    {/* <Card.Body style={{  padding: '10%' }}> */}
                                        {/* <Card.Text>
                                            {cafe.cname}
                                        </Card.Text> */}
                                    <List.Item.Meta
                                        title={cafe.cname}
                                    />
                                    {/* </Card.Body> */}
                                </Card>
                            </List.Item>
                            </Link> 
                        )}
                    />
                </Col>
                <Col span={8} />
            </Row>
            </>
        );
    }
}

export default CafeList;
