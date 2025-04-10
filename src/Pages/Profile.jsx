
import http from '../http'
import TasksList from '../components/TasksList'
import React from 'react'
import { Navigate } from 'react-router-dom'


import { useNavigate } from 'react-router-dom'




const Profile = () => {

  const navigate = useNavigate()


  const handleLogout = () => {


    http.get("/logout", {withCredentials:true}).then(() => navigate("/login")).catch((error) => console.log(error)) 


  }


     const [username, setUsername] = React.useState("")


    http.get("/dashboard", {withCredentials:true}).then((success) =>
      
      
      setUsername(success.data.LoggedInUserInfo.username)
    

    
    
    ).catch(() =>{




    })



  return (

 
    <div>
      
        <h1 class="text-left">I am inside the Profile of {username}</h1>
        <button class="bg-red-400 p-3" onClick={handleLogout}>Logout</button>
        <TasksList/>
    </div>
  )
}

export default Profile;
