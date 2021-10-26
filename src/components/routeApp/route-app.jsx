import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'

import MyNavLink from './my-nav-link'
import About from '../routeAbout/route-about'
import Home from '../routeHome/route-home'

export default class App extends React.Component {
    render() {
        return (
            <div>
                {/* 顶部文本 */}
                <div className="row">
                    <div className="col-xs-offset-2 col-xs-8">
                        <div className="page-header">
                            <h2>React 路由</h2>
                        </div>
                    </div>
                </div>

                <div className="row">
                    {/* 左侧按钮 */}
                    <div className="col-xs-2 col-xs-offset-2">
                        <div className="list-group">
                            {/*导航路由链接*/}
                            <MyNavLink className="list-group-item" to='/about'>About</MyNavLink>
                            <MyNavLink className="list-group-item" to='/home'>Home</MyNavLink>
                        </div>
                    </div>
                    {/* 右侧文本内容 */}
                    <div className="col-xs-6">
                        <div className="panel">
                            <div className="panel-body">
                                {/*可切换的路由组件 
                                <Switch> 只找到第一个被location匹配到的<Route>就立即停止继续匹配，并且把它渲染出来 
                                exact 精确匹配*/}
                                <Switch>
                                    <Route exact path='/about' component={About} />
                                    <Route path='/home' component={Home} />
                                    <Redirect to='/about' />
                                </Switch>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}