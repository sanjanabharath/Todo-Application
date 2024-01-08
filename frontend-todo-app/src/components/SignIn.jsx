import React, {useState} from 'react'
import { Typography, Button, Card, TextField } from '@mui/material';

const SignIn = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  return (
    <div style={{margin: "150px auto"}}>
        <div style={{display: "flex", justifyContent: 'center'}}>
        <Typography variant="h5">Welcome back to Checklist!</Typography>
        </div>
        <div style={{display: "flex", justifyContent: 'center'}}>
        <Card variant="outlined" style={{width: '400px', padding: '20px', marginTop: "15px"}}>
        <TextField onChange={(e) => setEmail(e.target.value)} label="Email" variant="outlined" style={{width: "400px"}} />
        <TextField onChange={(e) => setPassword(e.target.value)} label="Password" type='password' style={{marginTop: "15px", width: "400px"}} variant="outlined" />
        <br/>
        <Button variant="contained" style={{marginTop: "15px"}} onClick={() => {
      fetch("http://localhost:3000/signin", {
        method: "POST",
        body: JSON.stringify( {
          username: email,
          password
        }),
        headers: {
          "Content-type": "application/json"
        }
      }).then((response) => {
        response.json().then((data) =>{
          localStorage.setItem('token', data.token)
          window.location.pathname = '/todos'
        })
      })
    }}>Signin</Button>
        </Card>
        </div>
    </div>
  )
}

export default SignIn