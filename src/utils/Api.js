import axios from "axios";

const Api = axios.create({
  baseURL: process.env.REACT_APP_API_HOST + "/api",
  withCredentials: true,
});

export default Api;
