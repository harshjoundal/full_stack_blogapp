import React from 'react'
import "./login.css"
import {Link} from 'react-router-dom'
import { useRef } from 'react'
import { useContext } from 'react'
import { Context } from '../../context/Context'
import axios from 'axios'

export default function Login() {
  const userRef = useRef()
  const passwordRef = useRef()

  const {dispatch,isFetching} = useContext(Context)
  
  const handleSubmit= async (e)=>{
    console.log(process.env.REACT_APP_URL+'/api/auth/login');
    e.preventDefault()
    dispatch({type:"LOGIN_START"});

    try{
      const res = await axios.post(process.env.REACT_APP_URL+'/api/auth/login',{
        username:userRef.current.value,
        password:passwordRef.current.value
      })
      console.log(res.data);
      dispatch({type:"LOGIN_SUCCESS",payload:res.data})
    }catch(err){
      dispatch({type:"LOGIN_FAILURE"})
    }
  }
  // console.log(user)
  return (
    <div className='login'>
        {/* {user != null && <h1>{user.email}</h1>} */}
        <span className="loginTitle">Login</span>
        <form className="loginForm" onSubmit={handleSubmit}>
            <label>Username</label>
            <input className='loginInput' type="text" placeholder='Enter your username...' ref={userRef}/>
            <label >Password</label>
            <input className='loginInput' type="password" placeholder='Enter your password' ref={passwordRef}/>
            <button className='loginButton' type='submit' disabled={isFetching}>Login</button>
        </form>
            <button className='loginRegisterButton'>
              <Link className='link' to='/register'>REGISTER</Link>
            </button>
    </div>
  )
}
