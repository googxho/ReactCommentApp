import React from 'react';
import PropTypes from 'prop-types';
import PubSub from 'pubsub-js'


export default class Search extends React.Component {
    // static propTypes = {
    //     search: PropTypes.func.isRequired
    // }
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         username:''
    //     }
    // }
    // handleChange = (event) => {
    //     let inputName = event.target.value
    //     let {username} = this.state
    //     username = inputName
    //     this.setState({username: username})
    // }

    // handleClick = () => {
    //     let {username} = this.state;
    //     let {search} = this.props;
    //     search(username)
    
    // }
    // render() {
    //     return (
    //         <section className="jumbotron">
    //             <h3 className="jumbotron-heading">搜索 Github 用户</h3>
    //             <div>
    //                 <input type="text" value={this.state.username} onChange={this.handleChange} placeholder="请输入你要搜索的用户名" />
    //                 <button onClick={this.handleClick}>搜索</button>
    //             </div>
    //         </section>
    //     )
    // }

    // 使用 发布-订阅 机制传递消息（不需要再借助父组件）

    constructor(props) {
        super(props);
        this.state = {
            username:''
        }
    }
    handleChange = (event) => {
        let inputName = event.target.value
        let {username} = this.state
        username = inputName
        this.setState({username: username})
    }

    handleClick = () => {
        let {username} = this.state;
        // 发布消息（search）
        PubSub.publish('search',username)
    }
    render() {
        return (
            <section className="jumbotron">
                <h3 className="jumbotron-heading">搜索 Github 用户</h3>
                <div>
                    <input type="text" value={this.state.username} onChange={this.handleChange} placeholder="请输入你要搜索的用户名" />
                    <button onClick={this.handleClick}>搜索</button>
                </div>
            </section>
        )
    }
}