import React from 'react'

const messageDetails = [
    {id:1, title: 'Hello1',content: 'world'},
    {id:3, title: 'Hello2',content: 'world'},
    {id:5, title: 'Hello3',content: 'world'},
]

export default function MessageDetail(props) {

  const id = props.match.params.id
  const md = messageDetails.find(md => md.id===id*1)

  return (
    <ul className = "list-group">
      <li>ID: {md.id}</li>
      <li>TITLE: {md.title}</li>
      <li>CONTENT: {md.content}</li>
    </ul>
  )
}