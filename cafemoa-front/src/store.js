import {createStore} from 'redux';
import jwtDecode from 'jwt-decode';

export default createStore(function(state, action){
    if(state === undefined){
        const token = localStorage.getItem("login_token")
        if(token){
            const decoded_token = jwtDecode(token)
            const info = decoded_token.member
            return {
                user_info:info
            }
        }
        else return {
            user_info:  {
                role: 'VISITOR',
                uuid: '',
                uid: '',
                uname: '',
                uphone: '',
                uemail: '',
                unickname: '',
                upic: '',
            }
        }
    }
    
    // 로그인 요청으로 들어왔을때, action에는 axios로 따온 token이 들어있을 것이고, 이를 디코드해서 사용할 것이다!!
    if (action.type === 'LOGIN'){
        const token = action.token
        const decoded_token = jwtDecode(token)
        const user_info = decoded_token.member
        console.log(user_info)
        state.user_info = user_info
    }

    if (action.type === 'LOGOUT'){
        state.user_info = {
            role: 'VISITOR',
            uuid: '',
            uid: '',
            uname: '',
            uphone: '',
            uemail: '',
            unickname: '',
            upic: '',
        }
    }

    if (action.type === 'BASKET'){
        if (state.basket === undefined) {
            state.basket = {
                ccid:action.data.ccid,
                uuid:action.data.uuid,
                menus:[action.data.menu]
            }
        } else {
            state.basket.menus = [
                ...state.basket.menus,
                action.data.menu
            ]
        }
    }
    if (action.type === 'BASKET_DELETE') {
        state.basket.menus = action.menus
    }

    if (action.type === 'BASKET_CLEAR') {
        state.basket = undefined;
    }

    if (action.type === 'pos') {
        const crd = action.crd
        state.pos = {
            latitude: crd.latitude,
            longitude: crd.longitude
        }
    }

    return state;
}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)