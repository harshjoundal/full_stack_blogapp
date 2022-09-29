import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { Link } from 'react-router-dom';
import "./sidebar.css"

export default function Sidebar() {
  const [cats,setCats] = useState([]);

  useEffect(()=>{
    const getCats = async ()=>{
        const res = await axios(process.env.REACT_APP_URL+"/api/categories")
        // console.log(res);
        setCats(res.data);
    }
    getCats()

  },[])
  
    return (
    <div className='sidebar'>
        <div className="sidebarItem">
            <span className="sidebarTitle">ABOUT ME</span>
            <img src="https://media.istockphoto.com/photos/yellow-sticky-note-writing-caption-inscription-phrase-about-me-in-picture-id860247024" alt="" width="75%" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita labore aperiam vero corrupti perferendis incidunt, quo sint cumque voluptatem sequi laboriosam ducimus, similique ipsam.</p>
        </div>

        <div className="sidebarItem">
            <span className="sidebarTitle">CATEGORIES</span>
            <ul className='sidebarList'>
                {cats.map((c)=>(
                    <Link to ={`/?cat=${c.name}`} className='link' key={c.name}>
                        <li className="sidebarListItem">{c.name}</li>
                    </Link>
                ))}
                {/* <li className="sidebarListItem">Music</li>
                <li className="sidebarListItem">Style</li>
                <li className="sidebarListItem">Sport</li>
                <li className="sidebarListItem">Tech</li>
                <li className="sidebarListItem">Cinema</li> */}
            </ul>
        </div>

        <div className="sidebarItem">
            <span className="sidebarTitle">FOLLOW US</span>
            <div className="sidebarSocial">
                <i className="sidebarIcon fa-brands fa-square-twitter"></i>
                <i className="sidebarIcon fa-brands fa-square-facebook"></i>
                <i className="sidebarIcon fa-brands fa-square-pinterest"></i>
                <i className="sidebarIcon fa-brands fa-square-instagram"></i>
            </div>
        </div>

    </div>
  )
}
