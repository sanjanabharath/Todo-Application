import React from 'react'

const Todo = (props) => {
  return (
    <div className='card'>
        <div className='content'>
        <span>{props.title}</span>
        <span>{props.description}</span>
        <button className='update todo-btn'>Update</button>
        <button className='delete todo-btn'>Delete</button>
        </div>
        
    </div>
  )
}

export default Todo