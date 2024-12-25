import axios from "axios"
export const axiosInstance = axios.create({
  headers:{"Content-Type" : "application/json"}
})
// axiosinstance is used for requesting like post,get,delete,update