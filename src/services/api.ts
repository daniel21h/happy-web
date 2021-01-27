import axios from "axios";

const api = axios.create({
  baseURL: "https://happy-server-nodejs.herokuapp.com",
});

export default api;
