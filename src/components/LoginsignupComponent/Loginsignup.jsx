import React from 'react'
import User_icon from '../assets/User.png'
import Email_icon from '../assets/Email.png'
import Password_icon from '../assets/password.png'
import {Link} from  "react-router-dom"
 

function Loginsignup(){
  return (
    <div className='container'>
        <div className='header'>
            <div  className='text'>Sign Up</div>
            <div className='underline'></div>
        </div>
        <div className='inputs'>
            <div className='input'>
                <img src={User_icon} alt='' className='icon'/>
                <input type='text' placeholder='Name'/>
            </div>
            <div className='input'>
                <img src={Email_icon} alt='' className='icon'/>
                <input type='email' placeholder='Email'/>
            </div>
            <div className='input'>
                <img src={Password_icon} alt='' className='icon'/>
                <input type='password' placeholder='Password'/>
            </div>
        </div>
       
        <div className='submit-container'>
            <div className="submit">
                Sign Up
            </div>
            <div className="submit">
               <Link to="/signin"> Login</Link>
            </div>
        </div>
    </div>
  )
}

export default Loginsignup