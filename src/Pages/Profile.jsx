import React from 'react'
import http from '../http'
import TasksList from '../components/TasksList'

const Profile = () => {


    http.get("/dashboard", {withCredentials:true}).then(() =>{console.log("I am inside dashboard")}).catch(() =>{

        


    })



  return (
    <div>
        <h1 class="text-center">I am inside the Profile</h1>
        <TasksList/>
    </div>
  )
}

export default Profile
