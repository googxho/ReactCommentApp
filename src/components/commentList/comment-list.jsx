import React from 'react';
import PropTypes from 'prop-types';

import Item from '../commentItem/comment-item'

export default class List extends React.Component {

    static propTypes = {
        comments: PropTypes.array.isRequired,
        del: PropTypes.func.isRequired
    }

    render() {
        const { comments } = this.props;
        const del = this.props.del;
        let display = comments.length > 0 ? 'none' : 'block'
        return (
            <div className="col-md-8">
                <h3 className="reply">评论回复：</h3>
                <h2 style={{ display: display }}>暂无评论，点击左侧添加评论！！！</h2>
                <ul className="list-group">
                    {comments.map((comment, index) => <Item comment={comment} del={del} index={index} key={index} />)}
                </ul>
            </div>
        )
    }
}