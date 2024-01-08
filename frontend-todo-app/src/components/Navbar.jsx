import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Typography, Button } from '@mui/material';

const Navbar = () => {
    const navigate = useNavigate()
  return (
    <div style={{display: "flex", justifyContent: 'space-between', padding: '10px'}}>
        <Typography variant="h5" id='title' style={{cursor: "pointer"}}>Checklist</Typography>
        <div>
        <Button variant="text" style={{margin:"auto 10px"}} onClick={() => {
          navigate('/signup')
        }}>Signup</Button>
        <Button variant="text" onClick={() => {
          navigate('/signin')
        }}>Signin</Button>
        </div>
        
    </div>
  )
}

export default Navbar