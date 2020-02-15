import React from "react";
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Provider} from 'react-redux';
import store from './store';
import { BrowserRouter, Route } from 'react-router-dom';
// store에서 직접 router를 써보기 위해서 이런 짓을 해본다.
// 아래 코드는 부트스트랩을 전체 지역에서 사용하기 위해서 가져온 코드.
import 'bootstrap/dist/css/bootstrap.min.css';
// import BasketStore from "./BasketStore";

ReactDOM.render(
    // 이 프로바이더를 통해서 store를 일일히 import할 필요가 없어지는 것. Magic이래....;;
    // App을 provider로 감쌈으로서 App 내에 있는 모든 component에서 store에 접근할 수 있을 것.
    <BrowserRouter>
        <Provider store={store}>
            {/* <App></App> */}
            <Route path="/" component={App}/>
        </Provider>
    </BrowserRouter>
, document.getElementById('root'));

serviceWorker.unregister();
