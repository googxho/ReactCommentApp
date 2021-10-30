// 容器组件
import React from 'react';
import { connect } from 'react-redux';

import { increment, decrement, incrementAsync } from '../components/redux/actions'
import Contain from '../components/Contain'

const App = connect(
    (state) => ({ count: state }),
    { increment, decrement, incrementAsync }
)(Contain)

export default App