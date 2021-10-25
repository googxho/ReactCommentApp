import React from 'react';
import PropTypes from 'prop-types';

import Search from '../userSearch/user-search'
import Main from '../userMain/user-main'

export default class App1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchName: ''
    }
  }
  searchName = (name) => {
    let { searchName } = this.state;
    searchName = name;
    this.setState({ searchName: searchName })
  }
  render() {
    const { searchName } = this.state;
    return (
      <div className="container">
        <Search search={this.searchName} />
        <Main searchName={searchName} />
      </div>
    )
  }
}