import {createStore} from 'redux';

export default createStore(function(state, action){
    if(state === undefined){
        const user_data = localStorage.getItem("user_data")
        const user_info = JSON.parse(user_data)
        if(user_data){
            return {
                user_info:user_info
            }
        }
        else return {
            user_info:  {
                role: 'VISITOR',
                uid: '',
                username: '',
                unickname: '',
            }
        }
    }
    
    if (action.type === 'LOGIN'){
        const user_info = action.user_data
        state.user_info = user_info
    }

    if (action.type === 'LOGOUT'){
        state.user_info = {
            role: 'VISITOR',
            uid: '',
            username: '',
            unickname: '',
        }
    }

    if (action.type === 'BASKET'){
        if (state.basket === undefined) {
            state.basket = {
                ccid:action.data.ccid,
                uid:action.data.uid,
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

    return state;
}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)