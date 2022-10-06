import React, { useContext } from 'react'
import { useState } from 'react'
import './write.css'
import axios from 'axios'
import {Context} from '../../context/Context'

export default function Write() {
  const [title,setTitle] = useState('');
  const [desc,setDesc] = useState('');
  const [file,setFile]= useState(null);
  const {user} = useContext(Context)

  const handleSubmit=async (e)=>{
    e.preventDefault();
    const newPost = {
        username:user.username,
        title,
        desc,
    }
    if(file){
        const data = new FormData();
        const filename = Date.now()+file.name;
        data.append("name",filename);
        data.append("file",file);
        newPost.photo = filename

        try{
            await axios.post(process.env.REACT_APP_URL+'/api/upload',data)
        }catch(err){}

        try{
            const res = await axios.post(process.env.REACT_APP_URL+'/api/posts',newPost);
            window.location.replace("/post/"+res.data._id);
        }catch(err){}

    }
  };
  
    return (
    <div className='write'>
        {file && (
            // <img className='writeImg' src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" />
            <img className='writeImg' src={URL.createObjectURL(file)} alt="" />
        )}
        <form className='writeForm' onSubmit={handleSubmit}>
            <div className="writeFormGroup">
                <label htmlFor="fileInput">
                    <i className="writeIcon fa-solid fa-plus"></i>
                </label>
                <input type="file" id='fileInput' style={{display:"none"}} onChange={(e)=>setFile(e.target.files[0])}/>
                <input type="text" placeholder='Title' className='writeInput' autoFocus={true} onChange={e=>setTitle(e.target.value)}/>
            </div>

            <div className="writeFormGroup">
                <textarea placeholder="Tell your story..." type="text" className='writeInput writeText' onChange={e=>setDesc(e.target.value)}></textarea>
            </div>

            <button className='writeSubmit' type='submit'>Publish</button>
        </form>
    </div>
  )
}
