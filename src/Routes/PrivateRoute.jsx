import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const PrivateRoute = ({ element }) => {
  const token = localStorage.getItem("userToken");

  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, [token]);

  return element;
};

export default PrivateRoute;
