import React from 'react';
import PropTypes from 'prop-types';

export default class Item extends React.PureComponent {
    static propTypes = {
        comment: PropTypes.object.isRequired,
        del: PropTypes.func.isRequired,
        index: PropTypes.number.isRequired
    }
    handleClick = () => {
        let username = this.props.comment.username
        const {index,del} = this.props;
        if(window.confirm(`确定删除用户${username}的评论？`)) {
            del(index);
        }
    }

    render() {
        const { comment } = this.props;
        return (
            <li className="list-group-item">
                <div className="handle">
                    <a href={'#1'} onClick={this.handleClick}>删除</a>
                </div>
                <p className="user"><span >{comment.username}</span><span>说:</span></p>
                <p className="centence">{comment.content}</p>
            </li>
        )
    }
}
