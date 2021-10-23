import React from 'react';
import PropTypes from 'prop-types';

export default class Item extends React.PureComponent {
    static propTypes = {
        comment : PropTypes.object.isRequired
    }

    render() {
        const { comment } = this.props;
        return (
            <li className="list-group-item">
                <div className="handle">
                    <a href="#">删除</a>
                </div>
                <p className="user"><span >{comment.username}</span><span>说:</span></p>
                <p className="centence">{comment.content}</p>
            </li>
        )
    }
}
