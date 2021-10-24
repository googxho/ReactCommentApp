import React from 'react';
import PropTypes from 'prop-types';

import Add from '../commentAdd/comment-add';
import List from '../commentList/comment-list';

export default class App extends React.Component {
    // static propTypes = {

    // }
    constructor(props) {
        super(props);
        this.state = {
            comments: [
                { username: 'Tom', content: 'React' },
                { username: 'Jack', content: 'Vue' }
            ]
        }
        this.delete = this.delete.bind(this)
    }

    commentAdd = (comment) => {
        let comments = this.state.comments;
        comments.unshift(comment);
        this.setState({ comments: comments });
    }

    delete(index) {
        let comments = this.state.comments;
        comments.splice(index, 1)
        this.setState({ comments })
    }

    render() {
        const comments = this.state.comments;
        return (
            <div>
                <header className="site-header jumbotron">
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-12">
                                <h1>请发表对React的评论</h1>
                            </div>
                        </div>
                    </div>
                </header>
                <div className="container">
                    <Add commentAdd={this.commentAdd} />
                    <List comments={comments} del={this.delete} />
                </div>
            </div>
        )
    }
}
