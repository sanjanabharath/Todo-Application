import { useEffect, useState } from 'react'
import Todo from './components/Todo'
import './App.css'


function App() {
  const [todos, setTodos] = useState([])

  useEffect(() => {
    setInterval(() => {
      fetch("http://localhost:3000/todos", {
        method: "GET"
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
        return <Todo title={todo.title} description={todo.description} />
      })}
    </div>
  )
}


export default App
