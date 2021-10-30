// UI 组件
import React from 'react';
import PropTypes from 'prop-types';

import './index.css';
import './redux/reducers';

class Contain extends React.Component {
    constructor(props) {
        super(props);
        this.numSelect = React.createRef();
    }
// 二：和写react 代码一样声明需要接收的属性
    // 声明接收属性
    static propTypes = {
        count: PropTypes.number.isRequired,
        increment: PropTypes.func.isRequired,
        decrement: PropTypes.func.isRequired,
        incrementAsync:PropTypes.func.isRequired
    }

    handleChange = (event) => {
        const option = event.target.value;
        // console.log(option)
        return option ? option : 0;
    }
// 四：改写为react 形式的代码
    handleCreate = (event) => {
        const store = this.props.store;
        const number = this.numSelect.current.value;
        console.log( number)
        // store.dispatch(actions.increment(parseInt(number)));
        this.props.increment(parseInt(number));
    }
    handleReduce = (event) => {
        // const store = this.props.store;
        const number = this.numSelect.current.value;
        // console.log(typeof number)
        this.props.decrement(parseInt(number));
    }
    handleCreateOdd = (event) => {
        const {count} = this.props;
        const number = this.numSelect.current.value;
        if(count % 2 === 0) {
            this.props.increment(parseInt(number));
        }
        // console.log(typeof number)
    }
    handleCreateAsync = (event) => {
        // const store = this.props.store;
        const number = this.numSelect.current.value;
        // setTimeout(() => {
        //     // console.log(typeof number)
        //     this.props.increment(parseInt(number));
        // },1000)
        this.props.incrementAsync(parseInt(number));
    }
    componentDidMount() {
        
    }
    
    render() {
        const {count} = this.props;
        return (
            <div className="container">
                <h2>这是{count}吧！</h2>
                <select defaultValue="0" ref={this.numSelect} onChange={this.handleChange} className="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>
                <button type="button" className='btn btn-primary' onClick={this.handleCreate}>+</button>
                <button type="button" className='btn btn-danger' onClick={this.handleReduce}>-</button>
                <button type="button" className='btn btn-success' onClick={this.handleCreateOdd}>odd</button>
                <button type="button" className='btn btn-info' onClick={this.handleCreateAsync}>async</button>
            </div>
        )
    }
}
// 三：使用react-redux 的connect 方法将属性值传入App,并重新返回一个新组件
// connect 函数执行返回一个新的App 组件
// connect 第一个参数为一个函数，该函数将redux 里面的state 对象作为值传递给count 
// connect 第二个参数为包含一系列的action 方法
// react-redux 分为UI 组件和容器组件 UI负责页面构建 容器container负责业务逻辑
export default Contain