import {createStore} from 'redux';
import jwtDecode from 'jwt-decode';

export default createStore(function(state, action){
    if(state === undefined){
        const user_data = localStorage.getItem("user_info")
        if(user_data){
            return {
                user_info:user_data
            }
        }
        else return {
            user_info:  {
                role: '',
                uid: '',
                username: '',
                upic: '',
            }
        }
    }
    // 로그인 요청으로 들어왔을때, action에는 axios로 따온 token이 들어있을 것이고, 이를 디코드해서 사용할 것이다!!
    if (action.type === 'LOGIN'){
        const user_info = action.user_data
        state.user_info = user_info
    }

    if (action.type === 'LOGOUT'){
        state.user_info = {
            role: 'VISITOR',
            uid: '',
            uname: '',
            uphone: '',
            uemail: '',
            unickname: '',
            upic: '',
        }
    }

    if (action.type === 'SIGNUP') {
        if (action.info.sajang === true) {
            console.log('사장님. 회원가입된 아이디와 비번은', action.info, '입니다')
            return {...state, id: action.info.id, pass: action.info.pass, sajang: true}        
        }
        console.log('손님! 회원가입된 아이디와 비번은', action.info, '입니다')
        return {...state, id: action.info.id, pass: action.info.pass, name: action.info.name, sajang:false}
    }
    return state;
}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)