import React from 'react'
import { Typography, Button, Card, TextField } from '@mui/material';

const SignIn = () => {
  return (
    <div style={{margin: "150px auto"}}>
        <div style={{display: "flex", justifyContent: 'center'}}>
        <Typography variant="h5">Welcome back to Checklist!</Typography>
        </div>
        <div style={{display: "flex", justifyContent: 'center'}}>
        <Card variant="outlined" style={{width: '400px', padding: '20px', marginTop: "15px"}}>
        <TextField id="outlined-basic" label="Email" variant="outlined" style={{width: "400px"}} />
        <TextField id="outlined-basic" label="Password" style={{marginTop: "15px", width: "400px"}} variant="outlined" />
        <br/>
        <Button variant="contained" style={{marginTop: "15px"}}>Signin</Button>
        </Card>
        </div>
    </div>
  )
}

export default SignIn