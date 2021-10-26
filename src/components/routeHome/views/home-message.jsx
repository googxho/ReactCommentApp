import React from 'react'
import { Link, Route } from 'react-router-dom'

import MessageDetail from './message-detail'


export default class Message extends React.Component {
    state = {
        message: []
    }
    componentDidMount() {
        setTimeout(() => {
            this.setState({
                message: [
                    { id: 1, title: 'Hello1', content: 'world' },
                    { id: 3, title: 'Hello2', content: 'world' },
                    { id: 5, title: 'Hello3', content: 'world' },
                ]
            })
        }, 1000)
    }
    ShowDetail = (id) => { this.props.history.push(`/home/message/messagedetail/${id}`) }

    ShowDetail2 = (id) => { this.props.history.replace(`/home/message/messagedetail/${id}`) }

    back = () => { this.props.history.goBack() }

    forward = () => { this.props.history.goForward() }

    render() {
        const path = this.props.match.path
        const { message } = this.state;
        return (
            <div>
                <ul className="list-group">
                    {message.map((item, index) => <li className="list-group-item" key={index} >
                        {/* 非路由链接 */}
                        {/* <a href={`/home/message/messagedetail/${item.id}`}>{item.title}</a> */}
                        {/* 路由链接 */}
                        <Link to={`/home/message/messagedetail/${item.id}`}>{item.title}</Link>
                        &nbsp;&nbsp;&nbsp;
                        <button className="btn btn-primary" onClick={() => this.ShowDetail(item.id)}>查看详情(push)</button>&nbsp;
                        <button className="btn btn-primary" onClick={() => this.ShowDetail2(item.id)}>查看详情(replace)</button>
                    </li>)}
                </ul>
                <p>
                    <button className="btn btn-primary" onClick={this.back}>返回</button>&nbsp;
                    <button className="btn btn-primary" onClick={this.forward}>前进</button>&nbsp;
                </p>
                <hr />
                <Route path='/home/message/messagedetail/:id' component={MessageDetail}></Route>
            </div>
        )
    }
}