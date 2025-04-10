import axios from "axios";

import { toast } from "react-toastify";

const http = axios.create({
  baseURL: "http://localhost:4000",

  Accept: "application/json",

  "Content-Type": "application/json",
});

// http.interceptors.response.use(
//   (success) => {
//     console.log("I am inside the success of intecetportors reponse");

//     console.log(success);

//     if ("message" in success.data) {
//       toast.success(success.data.message);
//     }

//     return success;
//   },
//   (error) => {
//     console.log("I am inside the  intecetportors reponse of error");

//     console.log(error.response.data.message);

//     console.log(error.response.data.message);

//     if ("message" in error.response.data) {
//       console.log("Inside the error");

//       toast.error(error.response.data.message);
//     }

//     return Promise.reject(error);
//   }
// );

export default http;
