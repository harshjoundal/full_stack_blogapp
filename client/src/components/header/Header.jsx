import React from 'react'
import "./header.css"

export default function Header() {
  return (
    <div className='header'>
        <div className="headerTitles">
            {/* <span className="headerTitlesm">React & Node</span> */}
            <span className="headerTitlelg">Blog</span>
        </div>

        <img src="https://images.pexels.com/photos/1167355/pexels-photo-1167355.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" className='headerImg' alt="" />
    </div>
  )
}
