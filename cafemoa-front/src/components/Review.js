import React, { Component } from "react";
import {
    Button,
    Divider,
    Comment,
    Tooltip,
    List, 
    Form, 
    Input

} from 'antd';
import 'antd/dist/antd.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import moment from 'moment';

/*
카페 번호를 받아와서 해당 리뷰를 띄워야함 
*/

const { TextArea } = Input;

class Review extends Component{
    state ={
        reviewlist:[
            {
                
                author: '김시효',
                avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
                content: (
                    <p>
                        너무 맛있어용!
                </p>
                ),
                datetime: (
                    <Tooltip
                        title={moment()
                            .subtract(1, 'days')
                            .format('YYYY-MM-DD HH:mm:ss')}
                    >
                        <span>
                            {moment()
                                .subtract(1, 'days')
                                .fromNow()}
                        </span>
                    </Tooltip>
                ),
            },
            {
                
                author: '이수민',
                avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
                content: (
                    <p>
                        조용해여~!
                </p>
                ),
                datetime: (
                    <Tooltip
                        title={moment()
                            .subtract(2, 'days')
                            .format('YYYY-MM-DD HH:mm:ss')}
                    >
                        <span>
                            {moment()
                                .subtract(2, 'days')
                                .fromNow()}
                        </span>
                    </Tooltip>
                ),
            },
        ]
    }

    // handleSubmit = (e) => {
    //     // 페이지 리로딩 방지
    //     e.preventDefault();
    //     const params = {
    //         uid: this.state.id,
    //         upass: this.state.pass,
    //     }
    //     const headers = {
    //         Authorization: 'eyJ0eXBlIjoiSldUIiwicmVnRGF0ZSI6MTU4MTA1MDE5ODEzNSwiYWxnIjoiSFMyNTYifQ.eyJtZW1iZXIiOnsidWlkIjoia2FuZ2h5dW4iLCJ1bmFtZSI6Iuq5gOqwle2YhCIsInVwaG9uZSI6IjAxMDExMTEyMjIyIiwidWVtYWlsIjoia2FuZ2h5dW5AbmF2ZXIuY29tIiwidW5pY2tuYW1lIjoia2FuZ2h5dW4iLCJyb2xlIjoiSE9TVCIsInVwaWMiOiLsl4bslrQifX0.AK8zBBxOWnnjvai02JaQiMGMP11gh5BSI4RtK6fE1YA'
    //     }

    //     const url = 'http://54.180.154.140:8080/latte/user/signin'

    //     axios.post(url, params, {headers})
    //     .then(response => {
    //         console.log('로그인 요청')
    //         console.log(response)
    //         // console.log(response.data)//토큰

    //         localStorage.setItem(
    //             "user3",
    //             JSON.stringify({
    //                 id: response.config.data.id,
    //                 token: response.data,
    //             })
    //         );

    //         console.log(response.config);
    //         let token = localStorage.getItem("user3")
    //         // console.log(token)

    //         //삭제
    //         localStorage.removeItem('user3');
    //         console.log(localStorage)

    //         })  
    //     .catch(error => {
    //         console.log('error')
    //         console.error(error)
    //     })
       
    //   }
    render(){

        const {reviewlist} = this.state;


        return(
        <Form  className="reviewform" onSubmit={this.handleSubmit}>
        <Divider>카페 후기</Divider>      
             <Form.Item>
                 <TextArea rows={3} />
                 {/* <Link to='visitor/cafedetail'> */}
                 <Button htmlType="submit" type="primary" >
                     후기 등록
                 </Button>
                 {/* </Link> */}
            </Form.Item>     
         <List
            className="comment-list"
            header={`${this.state.reviewlist.length} replies`}
            itemLayout="horizontal"
            dataSource={reviewlist}
            renderItem={item => (
                <li>
                    <Comment
                        
                        author={item.author}
                        avatar={item.avatar}
                        content={item.content}
                        datetime={item.datetime}
                    />
                </li>
            )}
        />
        </Form>
        );
    }
}

export default Review;