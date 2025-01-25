import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { hideLoading, showLoading } from '../redux/LoadersSlice';
import { getCurrentUser } from '../apicalls/userCall';


function ProtectedRoute({children}) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const getValidUser = async ()=>{
    try {
      dispatch(showLoading)
      const response = await getCurrentUser;
      console.log(response)
      dispatch(hideLoading)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(()=>{
    if(localStorage.getItem('token')){
      getValidUser()
    }else{
      navigate('./login')
    }
  })
  
  return (
   <div> {children}</div>
    )
}

export default ProtectedRoute





// work of the protected route is only one thing when token has been verified then only it will take us to the home page

