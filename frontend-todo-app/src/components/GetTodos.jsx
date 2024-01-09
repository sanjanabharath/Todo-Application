import { useEffect, useState } from 'react'
import Todo from './Todo'
import React from 'react'

const GetTodos = () => {
    const [todos, setTodos] = useState([])

  useEffect(() => {
    setInterval(() => {
      fetch("http://localhost:3000/todos", {
        method: "GET",
        headers: {
          "Content-type": "application/json",
          "Authorization": "Bearer "+localStorage.getItem('token')
        }
      }).then((response) => {
        response.json().then((data) =>{
          setTodos(data)
        })
      })
    }, 1000)
  }, [])
  return (
    <div>
        {todos.map((todo) => {
        return <Todo title={todo.title} description={todo.description} id={todo._id}/>
      })}
    </div>
  )
}

export default GetTodos