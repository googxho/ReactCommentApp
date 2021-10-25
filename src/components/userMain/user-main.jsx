import React from 'react';
import PropTypes from 'prop-types';
import Axios from 'axios';
import PubSub from 'pubsub-js'

import './user-main.css';

export default class Main extends React.Component {
    // static propTypes = {
    //     searchName: PropTypes.string.isRequired
    // }
    // state = {
    //     initView: true,
    //     loading: false,
    //     users: null,
    //     errorMsg: null
    // }
    // // 接收到新的属性值时调用
    // componentWillReceiveProps(nextProps) {
    //     this.setState({ initView: false, loading: true })
    //     const { searchName } = nextProps;
    //     let url = `https://api.github.com/search/users?q=${searchName}`
    //     Axios.get(url)
    //         .then((response) => {
    //             let results = response.data;
    //             const users = results.items.map((item) => {
    //                 return { username: item.login, avatar: item.avatar_url, url: item.html_url }
    //             })
    //             this.setState({ users: users, loading: false });
    //         })
    //         .catch((error) => { console.log(error); })
    // }
    // render() {
    //     const { initView, loading, users, errorMsg } = this.state;
    //     if (initView) return <h2>请输入关键字进行搜索</h2>
    //     else if (loading) return <h2>Loading...</h2>
    //     else if (errorMsg) return <h2>{errorMsg}</h2>
    //     else {
    //         if (users.length <= 0) return <h2>没有该用户！</h2>
    //         return (
    //             <div className="row">
    //                 {
    //                     users.map((item, index) => (
    //                         <div className="card" key={index}>
    //                             <a href={item.url}>
    //                                 <img src={item.avatar} style={{ width: '100px' }} />
    //                             </a>
    //                             <p className="card-text">{item.username}</p>
    //                         </div>
    //                     ))
    //                 }
    //             </div>
    //         )
    //     }
    // }

    // 使用 发布-订阅 机制传递消息（不需要再借助父组件）
    state = {
        initView: true,
        loading: false,
        users: null,
        errorMsg: null
    }
    // 加载完毕调用
    componentDidMount() {
        // 订阅消息（search）
        PubSub.subscribe('search', (msg, username) => {
            this.setState({ initView: false, loading: true })
            let url = `https://api.github.com/search/users?q=${username}`
            Axios.get(url)
                .then((response) => {
                    let results = response.data;
                    const users = results.items.map((item) => {
                        return { username: item.login, avatar: item.avatar_url, url: item.html_url }
                    })
                    this.setState({ users: users, loading: false });
                })
                .catch((error) => { console.log(error); })
        })
    }
    // 接收到新的属性值时调用
    componentWillReceiveProps(nextProps) {

    }
    render() {
        const { initView, loading, users, errorMsg } = this.state;
        if (initView) return <h2>请输入关键字进行搜索</h2>
        else if (loading) return <h2>Loading...</h2>
        else if (errorMsg) return <h2>{errorMsg}</h2>
        else {
            if (users.length <= 0) return <h2>没有该用户！</h2>
            return (
                <div className="row">
                    {
                        users.map((item, index) => (
                            <div className="card" key={index}>
                                <a href={item.url}>
                                    <img src={item.avatar} style={{ width: '100px' }} />
                                </a>
                                <p className="card-text">{item.username}</p>
                            </div>
                        ))
                    }
                </div>
            )
        }
    }
}