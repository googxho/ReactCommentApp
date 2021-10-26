import React from 'react'

export default class News extends React.Component {
    state = {
        newsArr:['新闻1','新闻2','新闻3']
    }
    render() {
        const newsArr = this.state.newsArr
        return (
            <ul className="list-group">
                {newsArr.map((news,index) => <li className="list-group-item"  key={index}>{news}</li>)}
            </ul>
        )
    }
}