import React, { Component } from 'react'
// import { Toast, ToastBody, ToastHeader } from 'reactstrap';


export default class Mypage extends Component {
    state = {
        token: '아이디',
    }
    render() {
        const storage = localStorage
        console.log(storage)
        console.log(storage)
        let token = localStorage.getItem("userInfo")
        console.log(token)
        
        localStorage.removeItem("userInfo");
        console.log('삭제 되었나?')

        console.log(localStorage)

        return (
            <div>
                <h1>여기는 마이페이지! 여기서 작업하면 됨!</h1>
                
                {/* <UserInfo /> */}

            </div>
        )
    }
}
