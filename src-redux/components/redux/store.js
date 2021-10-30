// store 对象
import { createStore } from 'redux';

import { counter } from './reducers';


// 根据counter 函数创建store 对象
const store = createStore(counter)
export default store;