import React from 'react';
import PropTypes from 'prop-types';

export default class Add extends React.Component {
    constructor(props) {
        super(props);
        this.handleComment1 = this.handleComment1.bind(this);
        this.handleComment2 = this.handleComment2.bind(this);
        this.add = this.add.bind(this);
    }
    static propTypes = {
        commentAdd: PropTypes.func
    };

    state = {
        comment: { username: '', content: '' }
    }
    add() {
        let comment = this.state.comment;
        // 数据验证
        if(!comment.username || !comment.content) { return}
        let { commentAdd } = this.props;
        commentAdd(comment);
        this.setState({ comment:{ username: '', content: '' }})
    }
    handleComment1(e) {
        let comment = this.state.comment
        let username = e.target.value
        comment.username = username
        this.setState({ comment: comment })
    }
    handleComment2(e) {
        let comment = this.state.comment
        let content = e.target.value
        comment.content = content
        this.setState({ comment: comment })
    }
    render() {
        const { comment } = this.state;
        return (
            <div className="col-md-4">
                <form className="form-horizontal">
                    <div className="form-group">
                        <label>用户名</label>
                        <input type="text" className="form-control" value={comment.username} onChange={this.handleComment1} placeholder="用户名" />
                    </div>
                    <div className="form-group">
                        <label>评论内容</label>
                        <textarea className="form-control" rows="6" value={comment.content} onChange={this.handleComment2} placeholder="评论内容"></textarea>
                    </div>
                    <div className="form-group">
                        <div className="col-sm-offset-2 col-sm-10">
                            <button type="button" className="btn btn-default pull-right" onClick={this.add}>提交</button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}