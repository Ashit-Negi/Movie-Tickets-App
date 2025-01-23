import React from 'react'
import {BrowserRouter , Routes , Route} from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import { useSelector } from 'react-redux'
import { Spin } from 'antd';
import './App.css';

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
          <Route path='/' element={<Home />}/>
          <Route path='/login' element={<Login />}/>
          <Route path='/register' element={<Register />}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
