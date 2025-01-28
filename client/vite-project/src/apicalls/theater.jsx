import { axiosInstance } from "./apicall";

 export const addTheater = async (payload)=>{
  try {
    const response = await axiosInstance.post("/api/theaters/add-theater" , payload)
    return response
  } catch (error) {
    return error.response
  }
 }
 export const updateTheater = async (payload)=>{
  try {
    const response = await axiosInstance.put("/api/theaters/update-theater" , payload)
    return response
  } catch (error) {
    return error.response
  }
 }
 export const deleteTheater = async (payload)=>{
  try {
    const response = await axiosInstance.delete("/api/theaters/delete-theater" , payload)
    return response
  } catch (error) {
    return error.response
  }
 }