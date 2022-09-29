import React from 'react'
import "./register.css"
import {Link} from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios';

export default function Register() {
  const [username,setUsrname] = useState('');
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [error,setError] = useState(false)

  const handleSubmit =async (e)=>{
    e.preventDefault();
    setError(false)
    try{
      const res = await axios.post(process.env.REACT_APP_URL+"/api/auth/register",{
        username,
        email,
        password
      })
  
      console.log(res);
      res.data && window.location.replace('/login')
    }catch(err){
      console.log(err);
      setError(true);
    }

  }

  return (
    <div className='register'>
        <span className="registerTitle">Register</span>
        <form className="registerForm" onSubmit={handleSubmit}>
            <label>Username</label>
            <input onChange={e=>setUsrname(e.target.value)} className='registerInput' type="text" placeholder='Enter your username...' />
            
            <label>Email</label>
            <input onChange={e=>setEmail(e.target.value)} className='registerInput' type="text" placeholder='Enter your email...' />
            
            <label >Password</label>
            <input onChange={e=>setPassword(e.target.value)} className='registerInput' type="password" placeholder='Enter your password'/>
            
            <button className='registerButton' type='submit'>Register</button>
        </form>
            <button className='registerLoginButton'>
              <Link className='link' to='/login'>LOGIN</Link>
            </button>

           { error && <span style={{color:"red",marginTop:"10px"}}>Something went wrong!</span>}
    </div>
  )
}
