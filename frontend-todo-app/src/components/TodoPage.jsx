import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import GetTodos from './GetTodos'

const TodoPage = () => {

  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")

  const addCourse = () =>{
    fetch("http://localhost:3000/todos",{
      method: 'POST',
      body: JSON.stringify({
        title,
        description
      }),
      headers:{
        "Content-type": "application/json",
        "Authorization": "Bearer " + localStorage.getItem('token')
      }
    }).then((res) => {
      res.json().then((data) => {
        alert("Course added successfully")
      })
    })
  }

  return (
    <div>
      <div style={{display: "flex", justifyContent: "center"}}>
      <div className='card' style={{backgroundColor: "white", height: "100px", width: "800px", display: "flex", justifyContent: "center"}}>
      <TextField style={{width: "350px", margin: "auto 10px"}}  variant="standard" label="Add Todo" onChange={(e) => setTitle(e.target.value)} focused />
      <TextField style={{width: "350px", margin: "auto 10px"}}  variant="standard" label="Add Description" onChange={(e) => setDescription(e.target.value)} focused />
      <button className='delete todo-btn' style={{marginTop:"30px", marginLeft: "10px", backgroundColor: "#4d64e2", color: "white", width: '100px', height: "50px" }} onClick={addCourse}>Add</button>
      </div>
      </div>
      <GetTodos/>
      </div>
  )
}

export default TodoPage