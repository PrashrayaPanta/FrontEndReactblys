
import http from '../http'
import TasksList from '../components/TasksList'




import { useNavigate } from 'react-router-dom'
import { useState } from 'react'




const Profile = () => {


  const [username, setUsername] = useState("")

  const navigate = useNavigate()



  //! Handle Logout Function

  const handleLogout = () => {


    http.get("/logout", {withCredentials:true}).then(() => navigate("/login")).catch((error) => console.log(error)) 


  }




    http.get("/dashboard", {withCredentials:true}).then((success) =>
      
      
      setUsername(success.data.LoggedInUserInfo.username)
    

    
    ).catch(() =>{
      navigate("/login")
    })



  return (

    <div className="max-w-3xl mx-auto p-6 space-y-6">
    {/* Profile Header */}
    <div className="flex justify-between items-center border-b border-gray-200 pb-4">
      <h1 className="text-2xl font-bold text-gray-800">
        Welcome back, <span className="text-indigo-600">{username}</span>
      </h1>
      <button 
        className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition-colors duration-200 flex items-center space-x-2"
        onClick={handleLogout}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z" clipRule="evenodd" />
        </svg>
        <span>Logout</span>
      </button>
    </div>
  
    {/* Tasks Section */}
    <div className="bg-white rounded-xl shadow-md p-6">
      <h2 className="text-xl font-semibold text-gray-700 mb-4">Your Tasks</h2>
      <TasksList />
    </div>
  </div>
  )
}

export default Profile;
