import React, { useContext, useState } from 'react'
import "./settings.css"
import Sidebar from '../../components/sidebar/Sidebar'
import { Context } from '../../context/Context'
import axios from 'axios';

export default function Settings() {
  const [file,setFile]= useState(null);
  const [username,setUsername] = useState('')
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [ success,setSuccess] = useState(false);

  const {user,dispatch} = useContext(Context)

  const PF = `${process.env.REACT_APP_URL}/images/`

  const handleSubmit=async (e)=>{
    e.preventDefault();
    dispatch({type:"UPDATE_START"})
    const updatedUser = {
        userId:user._id,
        username,
        email,
        password,
    }
    if(file){
        const data = new FormData();
        const filename = Date.now()+file.name;
        data.append("name",filename);
        data.append("file",file);
        updatedUser.profilePic = filename

        try{
            await axios.post(process.env.REACT_APP_URL+'/api/upload',data)
        }catch(err){}
          
        try{
            const res =await axios.put(process.env.REACT_APP_URL+'/api/users/'+user._id,updatedUser);
            setSuccess(true);
            dispatch({type:"UPDATE_SUCCESS",payload:res.data})

        }catch(err){
            dispatch({type:"UPDATE_FAILURE"})
        }

    }
  }

  return (
    <div className='settings'>
      <div className="settingWrapper">
        <div className="settingsTitle">
          <h1 className="settingsUpdateTitle">Update your account</h1>
          <h3 className="settingsDeleteTitle">Delete account</h3>
        </div>

        <form className='settingsForm' onSubmit={handleSubmit}>
          <label>Profile picture</label>

          <div className="settingsPP">
            <img src={file?URL.createObjectURL(file): PF+user.profilePic} alt="" />
            
            <label htmlFor="fileInput">
              <i className="settingsPPIcon fa-regular fa-circle-user"></i>
            </label>
            <input type="file" id='fileInput' style={{display:"none"}} onChange={(e)=>setFile(e.target.files[0])}/>
          </div>

          <label>Username</label>
          <input type="text" placeholder={user.username} onChange={(e)=>setUsername(e.target.value)}/>

          <label>Email</label>
          <input type="email" placeholder={user.email} onChange={(e)=>setEmail(e.target.value)}/>

          <label>Password</label>
          <input type="password" onChange={(e)=>setPassword(e.target.value)}/>

          <button className='settingsSubmit' type='submit'>Update</button>

          {success && <span style={{color:'gray',textAlign:"center",margin:"20px"}}>Profie has been updated successfully!</span>}

        </form>
      </div>
      <Sidebar/>
    </div>
  )
}
