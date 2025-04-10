import React, { useEffect, useState } from "react";
import { FaReact } from "react-icons/fa";
import { SiRedux } from "react-icons/si";
import { SiReactquery } from "react-icons/si";
import { Link, useNavigate } from "react-router-dom";

import PublicNavbar from "./PublicNavbar";
import http from "../http";
import LoadingComponent from "./LoadingComponent";
import PostCardComponent from "./PostCardComponent";

const Homepage = () => {


  // const authToken = localStorage.getItem("userToken");

  // const [isLoading, setIsLoading] = useState(false);

  // const [postData, setPostData] = useState([]);
  // const navigate = useNavigate();

  // useEffect(() => {
  //   setIsLoading(true);

  //   http
  //     .get("/posts/get")
  //     .then((success) => {
  //       setPostData(success.data.posts);
  //     })

  //     .catch((error) => {
  //       console.log(error);
  //     })

  //     .finally(() => setIsLoading(false));
  // }, []);

  // useEffect(() => {
  //   if (authToken) {
  //     navigate("/profile");
  //   }
  // });

  return (
    <>
      <PublicNavbar />
      {/* <div className="min-h-screen flex flex-col">
        {/* Hero Section */}
      <div className="bg-purple-700 text-white text-center py-20 flex-1 flex flex-col justify-center items-center">
        <h1 className="text-6xl font-bold mb-4">Hello</h1>
        <p className="text-2xl mb-10 mx-auto max-w-4xl">
            BLYS Company
        </p>
        <Link to="/learn">
          <button className="bg-white text-purple-700 px-10 py-4 rounded-lg font-semibold hover:bg-purple-100 transition-colors">
            Begin Learning
          </button>
        </Link>
      </div>


    </>
  );
};

export default Homepage;
