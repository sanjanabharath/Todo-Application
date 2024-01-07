import React from 'react'
import { Typography, Button } from '@mui/material';

const Appbar = () => {
  return (
    <div style={{display: "flex", justifyContent: 'space-between', padding: '10px'}}>
        <Typography variant="h5">Checklist</Typography>
        <div>
        <Button variant="text" style={{margin:"auto 10px"}}>Signup</Button>
        <Button variant="text">Signin</Button>
        </div>
        
    </div>
  )
}

export default Appbar