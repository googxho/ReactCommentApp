/*
action creator 模块
*/
import {INCREMENT, DECREMENT} from './action-type'

// action中 同步代码返回一个对象  
         // 异步代码返回一个函数（依靠redux-thunk 实现异步）


export const increment = number => ({type: INCREMENT, number})
export const decrement = number => ({type: DECREMENT, number})
// 二：写异步代码  
export const incrementAsync = number => {
    // 疑惑点：参数是一个函数？？？
    // 返回一个函数
    return  (dispatch1) => {
        // 异步代码，一秒后才去分发增加一个action
        setTimeout(() =>{
            dispatch1(increment(number))
        },1000)
    }
}
