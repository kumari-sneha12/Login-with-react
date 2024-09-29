import React from 'react'
import Loginsignup from './components/LoginsignupComponent/Loginsignup'
import Login from './components/LoginsignupComponent/Login'
import './App.css'
import { Routes, Route, BrowserRouter } from "react-router-dom";


function App() {
  return (
    <>
    <div>
    
     <BrowserRouter>
     <Routes>
      <Route path="/" element={ <Loginsignup/>}/>
      <Route path="/signup" element={ <Loginsignup/>}/>
      <Route path="/signin" element={ <Login/>}/>
     </Routes>
     </BrowserRouter>
    </div>
    </>
  )
}

export default App


