import axios from "axios"
export const axiosInstance = axios.create({
  headers:{"Content-Type" : "application/json" , "Authorization" : `Bearer ${localStorage.getItem('token')}`}
  //bearer is here to carry the token
})
// axiosinstance is used for requesting like post,get,delete,update