import React from 'react'
import User_icon from '../assets/User.png'
import Email_icon from '../assets/Email.png'
import Password_icon from '../assets/password.png'
import {Link} from  "react-router-dom"

function Login() {
  return (
    <div className='container'>
    <div className='header'>
        <div  className='text'>Login</div>
        <div className='underline'></div>
    </div>
    <div className='inputs'>
      
        <div className='input'>
            <img src={Email_icon} alt='' className='icon'/>
            <input type='email' placeholder='Email'/>
        </div>
        <div className='input'>
            <img src={Password_icon} alt='' className='icon'/>
            <input type='password' placeholder='Password'/>
        </div>
    </div>
    <div className="forgot-password">
        Lost Password?
        <span>click here!</span>
    </div>
    <div className='submit-container'>
        <div className="submit">
           <Link to="/signup"> Sign Up</Link>
        </div>
        <div className="submit">
            Login
        </div>
    </div>
</div>
  )
}

export default Login