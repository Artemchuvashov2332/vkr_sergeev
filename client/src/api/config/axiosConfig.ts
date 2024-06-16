import axios from "axios";

export const callAPI = axios.create({
  baseURL: String(process.env.REACT_APP_API_URL),
});
