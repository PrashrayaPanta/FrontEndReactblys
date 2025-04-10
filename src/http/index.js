import axios from "axios";



const http = axios.create({
  baseURL: "http://localhost:4000",

  Accept: "application/json",

  "Content-Type": "application/json",
});



export default http;
