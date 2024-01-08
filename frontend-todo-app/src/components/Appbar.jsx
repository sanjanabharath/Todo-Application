import React, { useEffect, useState } from 'react'
import UserProfile from './UserProfile';
import Navbar from './Navbar';

const Appbar = () => {
  
  const [userEmail, setUserEmail] = useState(null)
  useEffect(() => {
    function callback2(data) {
        if (data.username) {
            setUserEmail(data.username)
        }
    }
    function callback1(res) {
        res.json().then(callback2)
    }
    
    fetch("http://localhost:3000/profile", {
        method: "GET",
        headers: {
          "Content-type": "application/json",
            "Authorization": "Bearer " + localStorage.getItem("token")
        }
    }).then(callback1)
}, []);

console.log("User: "+ userEmail)
  if(userEmail) {
    return (
      <UserProfile username={userEmail}/>
    )
  } 

  return (
    <Navbar/>
  )
}

export default Appbar