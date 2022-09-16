import React from 'react'
import "./topbar.css"
import {Link} from 'react-router-dom'

export default function Topbar() {
    const user = false;

    return (
    <div className='top'>
        <div className="topLeft">
            <i className="topIcon fa-brands fa-square-facebook"></i>
            <i className="topIcon fa-brands fa-square-twitter"></i>
            <i className="topIcon fa-brands fa-square-pinterest"></i>
            <i className="topIcon fa-brands fa-square-instagram"></i>
        </div>

        <div className="topCenter">
            <ul className="topList">
                <li className='topListItem'>
                    <Link className='link' to='/'>HOME</Link>
                </li>
                
                <li className='topListItem'>
                    <Link className='link' to='/'>ABOUT</Link>
                </li>
                
                <li className='topListItem'>
                    <Link className='link' to='/'>CONTACT</Link>
                </li>
               
               <li className='topListItem'>
                    <Link className='link' to='/write'>WRITE</Link>
                </li>
                <li className='topListItem'>{user && "LOGOUT"}</li>
            </ul>
        </div>
        <div className="topRight">
            {
                user?(
                    <img className='topImg' src="https://t3.ftcdn.net/jpg/03/46/83/96/240_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg" alt="profile" />
                ) : (
                    <ul className='topList'>
                        <li className='topListItem'>
                            <Link className='link' to='/login'>LOGIN</Link>
                        </li>

                        <li className='topListItem'>
                            <Link className='link' to='/register'>REGISTER</Link>
                        </li>
                    </ul>
                )
            }
            
            
            <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
        </div>
    </div>
  )
}

