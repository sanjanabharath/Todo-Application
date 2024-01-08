import React from 'react'

const Todo = (props) => {
  // const deleteTodo = () => {
  //   fetch("http://localhost:3000/todos/")
  // }
  return (
    <div className='card' style={{backgroundColor: "white"}}>
        <div className='content'>
        <span>{props.title}</span>
        <span style={{paddingLeft: "10px"}}>{props.description}</span>
        <button className='todo-btn' style={{backgroundColor: "#85FD35", color: "white", margin: "auto 10px"}}>Update</button>
        <button className='todo-btn' style={{backgroundColor: "#F72416", color: "white", margin: "auto 10px"}}>Delete</button>
        </div>
        
    </div>
  )
}

export default Todo