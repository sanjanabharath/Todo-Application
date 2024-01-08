import React from 'react'
import { Typography, Button, Card, CardActions, CardContent, CardMedia} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import todoImage from '../assets/todo.jpg'

const Home = () => {
  const navigate = useNavigate()
  return (
    <div style={{display: "flex", justifyContent: 'center', margin: "100px"}}>
      <Card variant="outlined" style={{width: "400px", padding: "20px", borderRadius: "10px"}}>
      <div style={{display: "flex", justifyContent: 'center'}}>
        <Typography variant="h5">Hello from Checklist!</Typography>
        </div>
        <div style={{margin: "20px"}}>
        
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={todoImage}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Checklist
        </Typography>
        <Typography variant="body2" color="text.secondary">
         
"Checklist" is an intuitive and user-friendly web application designed to simplify task management and boost productivity. Seamlessly organized and accessible, Checklist serves as a comprehensive to-do list platform, allowing users to create, manage, and prioritize tasks effortlessly.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={() => {
          navigate("/signup")
        }}>Signup</Button>
      </CardActions>
    
    </div>
      </Card>
    </div>
  )
}

export default Home