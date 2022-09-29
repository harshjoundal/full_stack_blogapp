import axios from 'axios';
import React, { useContext, useState } from 'react'
import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom'
import { Context } from '../../context/Context';
import './singlepost.css'


export default function SinglePost() {
  const location = useLocation();
//   console.log(location.pathname.split('/')[2]);
  const path = location.pathname.split('/')[2];

  const [post,setPost] = useState({})

  const PF = process.env.REACT_APP_URL+"/images/";

    const {user} = useContext(Context)

    const [title,setTitle] = useState('')
    const [desc,setDesc] = useState('')
    const [updateMode,setUpdateMode] = useState(false)

    const handleDelete = async()=>{
        try{
            await axios.delete(`${process.env.REACT_APP_URL}/api/posts/${post._id}`,{
                data:{username:user.username}
            });
            window.location.replace('/');
        }catch(err){}
    }

    const handleUpdate= async ()=>{
        try{
            await axios.put(`${process.env.REACT_APP_URL}/api/posts/${post._id}`,{
                username:user.username,
                title,
                desc
            })
            // window.location.reload();
            setUpdateMode(false)
        }catch(err){}
    }

  useEffect(()=>{
    const getPost = async ()=>{
        const res = await axios.get(`${process.env.REACT_APP_URL}/api/posts/`+path);
        // console.log(res);
        setPost(res.data);
        setTitle(res.data.title);
        setDesc(res.data.desc)
    }
    getPost();
  },[path])
  
return (
<div className='singlePost'>
    <div className="singlePostWrapper">
        {post.photo && (
            <img src={PF+post.photo} alt="" className="singlePostImg"/>
        )}

        {
            updateMode ? <input type="text" value={title} className="singlePostTitleInput" autoFocus onChange={(e)=>setTitle(e.target.value)}/> : (

                <h1 className="singlePostTitle">

                    {title}
                    {post.username === user?.username && (
                        <div className="singlePostEdit">
                            <i className="singlePostIcon fa-regular fa-pen-to-square" onClick={()=>setUpdateMode(true)}></i>
                            <i className="singlePostIcon fa-solid fa-trash" onClick={handleDelete}></i>
                        </div>
                    )}
                </h1>
            )
        }
        <div className="singlePostInfo">
            <span className='singlePostAuthor'>Author: <Link to={`/?user=${post.username}`} className='link'><b>{post.username}</b></Link></span>
            <span className='singlePostDate'>{new Date(post.createdAt).toDateString()}</span>
        </div>

        { updateMode ? (
            <textarea className='singlePostDescInput' value={desc} onChange={(e)=>{setDesc(e.target.value)}}/>
        ) : (
            <p className='singlePostDesc'>{desc}</p>
        )}
    </div>
    
    {
        updateMode && (
            <button className="singlePostButton" onClick={handleUpdate}>Update</button>
        )
    }
</div>
)
}
