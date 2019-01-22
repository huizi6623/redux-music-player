import React from 'react' ;
import ReactDOM from 'react-dom' ;
import { createStore } from 'redux' ;
import { Provider } from 'react-redux' ;
import musicPlayer from './reducers' ;
import App from './components/App' ;
import {deleteMusicItem, playOrPauseMusic,changeMusic,changeRepeatType} from "./actions";

const store = createStore(musicPlayer) ;

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
) ;

//
// 每次 state 更新时，打印日志
// 注意 subscribe() 返回一个函数用来注销监听器
const unsubscribe = store.subscribe(() =>
    console.log(store.getState())
) ;
//
