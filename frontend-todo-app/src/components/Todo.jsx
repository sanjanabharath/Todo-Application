import React, { useState } from 'react'

const Todo = (props) => {
  const id = props.id
  const [title, setTitle] = useState(props.title);
  const [description, setDescription] = useState(props.description);
  const [isEditing, setIsEditing] = useState(false);

  const deleteTodo = () => {
    fetch(`http://localhost:3000/todos/${id}`, {
      method: "DELETE",
      headers: {
        "Authorization": "Bearer "+localStorage.getItem('token')
      }
    }).then((res) => {
      res.json().then((data) => {
        alert("Todo deleted successfully")
      })
    })
  }

  const toggleEdit = () => {
    setIsEditing(!isEditing);
  };

  const saveChanges = () => {
    fetch(`http://localhost:3000/todos/${id}`, {
      method: "PUT",
      body:{
        title,
        description
      },
      headers: {
        "Authorization": "Bearer "+localStorage.getItem('token')
      }
    }).then((res) => {
      res.json().then((data) => {
        setIsEditing(false); 
      })
    })
    
   
  };

  return (
    <div className='card' style={{backgroundColor: "white", position: "relative", display: "flex", flexDirection: "column"}}>
      {isEditing ? (
          <div className='content'>
            <input
              type='text'
              value={title}
              style={{padding: "7px", margin: "auto 10px 15px auto", borderRadius: "8px", border: "1px solid grey"}}
              onChange={(e) => setTitle(e.target.value)}
            />
            <input
              type='text'
              value={description}
              style={{padding: "7px", margin: "auto 10px 15px auto", borderRadius: "8px", border: "1px solid grey"}}
              onChange={(e) => setDescription(e.target.value)}
            />
            <button className='todo-btn' onClick={saveChanges} style={{color: "white", backgroundColor: "#0096D7", margin: "auto 10px", width: "80px"}}>
              Save
            </button>
          </div>
        ) : (
        <div className='content'>
        <span>{title}</span>
        <span style={{paddingLeft: "10px"}}>{description}</span>
        <button className='todo-btn' onClick={toggleEdit} style={{backgroundColor: "#85FD35", color: "white", margin: "auto 10px"}}>Update</button>
        <button className='todo-btn' onClick={deleteTodo} style={{backgroundColor: "#F72416", color: "white", margin: "auto 10px"}}>Delete</button>
        </div>  
        )}
        
    </div>
  )
}

export default Todo