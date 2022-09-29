import React from 'react'
import "./settings.css"
import Sidebar from '../../components/sidebar/Sidebar'

export default function Settings() {
  return (
    <div className='settings'>
      <div className="settingWrapper">
        <div className="settingsTitle">
          <h1 className="settingsUpdateTitle">Update your account</h1>
          <h3 className="settingsDeleteTitle">Delete account</h3>
        </div>

        <form className='settingsForm'>
          <label>Profile picture</label>

          <div className="settingsPP">
            <img src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" />
            
            <label htmlFor="fileInput">
              <i className="settingsPPIcon fa-regular fa-circle-user"></i>
            </label>
          </div>
          <input type="file" id='fileInput' style={{display:"none"}}/>

          <label>Username</label>
          <input type="text" placeholder='harsh'/>

          <label>Email</label>
          <input type="email" placeholder='harsh@gmail.com'/>

          <label>Password</label>
          <input type="password"/>

          <button className='settingsSubmit'>Update</button>

        </form>
      </div>
      <Sidebar/>
    </div>
  )
}
