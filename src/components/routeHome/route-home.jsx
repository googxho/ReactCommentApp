import React from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import MyNavLink from '../routeApp/my-nav-link'
import News from './views/home-news'
import Message from './views/home-message'

export default function Home() {
  return (
    <div>
      <div>Home组件内容</div>
      <div>
        <ul className="nav nav-tabs">
          <li>
            <MyNavLink to='/home/news'>News</MyNavLink>
          </li>
          <li>
            <MyNavLink to="/home/message">Message</MyNavLink>
          </li>
        </ul>
        <Switch>
          <Route path='/home/news' component={News} />
          <Route path='/home/message' component={Message} />
          <Redirect to='/home/news'/>
        </Switch>
      </div>
    </div>
  )
}