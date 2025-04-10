import React from 'react'

const LoadingComponent = () => {
  return (
    <div className="flex justify-center items-center py-4">
      <div className="text-center">
         <i className="fa-solid fa-refresh fa-spin mr-2"></i>Loading
      </div>
   </div>
    
  )
}

export default LoadingComponent