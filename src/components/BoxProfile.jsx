
import React from "react";
// import { useQuery } from "@tanstack/react-query";
// import { useSelector } from "react-redux";
// import { profileAPI } from "../services/userService";
// import AlertMessage from "./AlertMessage";
const BoxProfile = ({username, email}) => {


  return (
    <div className="max-w-sm mx-auto bg-blue-500 shadow-lg rounded-lg overflow-hidden my-4 ">
    
      {/* display alert message */}
      {/* {isLoading && (
        <AlertMessage type="loading" message="Loading please wait..." />
      )} */}

      {/* {isError && (
        <AlertMessage type="error" message={error.response.data.message} />
      )} */}
      <div className="px-6 py-8 bg-blue-500 text-center min-h-28">
        {/* <div className="mb-4">
          <img
            className="rounded-full h-24 w-24 mx-auto border-2 border-gray-300"
            src="https://via.placeholder.com/150"
            alt="Profile"
          />
        </div> */}
        <h2 className="text-xl font-semibold text-gray-900 mb-2">
          {username}
        </h2>
        <p className="text-gray-700">{email}</p>
      </div>
    </div>
  );
};

export default BoxProfile;
