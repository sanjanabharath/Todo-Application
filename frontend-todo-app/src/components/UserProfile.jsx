import React from 'react'
import { Typography, Button } from '@mui/material';

const UserProfile = (props) => {
    
  return (
    <div>
        <div style={{display: "flex", justifyContent: 'space-between', padding: '10px'}}>
        <Typography variant="h5" style={{cursor: "pointer"}}>Checklist</Typography>
        <div>
        <Typography variant="p" style={{fontWeight: "bold", margin: "auto 10px"}}>Hi {props.username}</Typography>
        <Button variant="text" onClick={() => {
          localStorage.setItem('token', null)
          window.location.pathname = '/'
        }}>Logout</Button>
        </div>
        
    </div>
    </div>
  )
}

export default UserProfile