import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import './index.css';
import './redux/reducers';
import * as actions from './redux/actions'


export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.numSelect = React.createRef();
    }

    handleChange = (event) => {
        const option = event.target.value;
        // console.log(option)
        return option ? option : 0;
    }

    handleCreate = (event) => {
        const store = this.props.store;
        const number = this.numSelect.current.value;
        console.log( number)
        store.dispatch(actions.increment(parseInt(number)));
    }
    handleReduce = (event) => {
        const store = this.props.store;
        const number = this.numSelect.current.value;
        // console.log(typeof number)
        store.dispatch(actions.decrement(parseInt(number)));
    }
    handleCreateOdd = (event) => {
        const store = this.props.store;
        const number = this.this.numSelect.current.value;
        if(store.getState() % 2 === 0) {
            store.dispatch(actions.increment(parseInt(number)));
        }
        // console.log(typeof number)
    }
    handleCreateAsync = (event) => {
        const store = this.props.store;
        const number = this.this.numSelect.current.value;
        setTimeout(() => {
            // console.log(typeof number)
            store.dispatch(actions.increment(parseInt(number)));
        },1000)
    }
    componentDidMount() {
        
    }
    
    render() {
        const state = this.props.store.getState();
        return (
            <div className="container">
                <h2>这是{state}吧！</h2>
                <select ref={this.numSelect} onChange={this.handleChange} className="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
                    <option value="0" selected>0</option>
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