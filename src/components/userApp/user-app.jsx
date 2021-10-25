import React from 'react';

import Search from '../userSearch/user-search'
import Main from '../userMain/user-main'

export default class App1 extends React.Component {
  // 组件通信方式一：借助父组件传递消息
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     searchName: ''
  //   }
  // }
  // searchName = (name) => {
  //   let { searchName } = this.state;
  //   searchName = name;
  //   this.setState({ searchName: searchName })
  // }
  // render() {
  //   const { searchName } = this.state;
  //   return (
  //     <div className="container">
  //       <Search search={this.searchName} />
  //       <Main searchName={searchName} />
  //     </div>
  //   )
  // }

  // 方式二：使用 发布-订阅 机制传递消息（不需要再借助父组件）

  render() {
    return (
      <div className="container">
        <Search />
        <Main />
      </div>
    )
  }
}