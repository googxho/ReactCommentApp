/*
action creator 模块
*/
import {INCREMENT, DECREMENT} from './action-type'

export const increment = number => ({type: INCREMENT, number})
export const decrement = number => ({type: DECREMENT, number})