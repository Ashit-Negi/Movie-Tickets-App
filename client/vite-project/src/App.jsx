import React from 'react'
import {BrowserRouter , Routes , Route} from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import { useSelector } from 'react-redux'
import { Spin } from 'antd';
import './App.css';
import ProtectedRoute from './components/ProtectedRoute'
import Admin from './pages/Admin'
import Profile from './pages/Profile'

function App() {
  const {loading}= useSelector((state)=>state.loader)
  const {user} = useSelector((state)=>state.user)
  console.log(user)
  return (
    <div>
       {loading && (
        <div className="loading-container">
          <Spin size="large" />
        </div>
      )}
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<ProtectedRoute><Home /></ProtectedRoute>}/>
          <Route path='/login' element={<Login />}/>
          <Route path='/register' element={<Register />}/>
          <Route path='/admin' element={<ProtectedRoute><Admin /></ProtectedRoute>} />;
          <Route path='/profile' element={<ProtectedRoute><Profile /> </ProtectedRoute>}  />




        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
