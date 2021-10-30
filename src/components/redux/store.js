// store 对象
import { createStore ,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
// redux 调试工具配合 redux devtools浏览器插件使用
import { composeWithDevTools } from 'redux-devtools-extension'

import { counter } from './reducers';

// react-redux 没有提供写异步代码的功能，借助redux-thunk 实现异步方法
// 一：在redux 使用ApplyMiddleWare 方法应用该异步中间件,在创建store 对象的时候

// 根据counter 函数创建store 对象
const store = createStore(
    counter,
    composeWithDevTools(applyMiddleware(thunk)) // 应用上异步中间件
    );
export default store;