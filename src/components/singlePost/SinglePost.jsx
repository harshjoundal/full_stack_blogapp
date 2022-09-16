import React from 'react'
import './singlepost.css'
export default function SinglePost() {
  return (
    <div className='singlePost'>
        <div className="singlePostWrapper">
            <img src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="singlePostImg"/>
            <h1 className="singlePostTitle">
                asdfs asdfasdf asdfasdf asd asdf.
                <div className="singlePostEdit">
                    <i className="singlePostIcon fa-regular fa-pen-to-square"></i>
                    <i className="singlePostIcon fa-solid fa-trash"></i>
                </div>
            </h1>
            <div className="singlePostInfo">
                <span className='singlePostAuthor'>Author: <b>Harsh</b></span>
                <span className='singlePostDate'>1 hour ago</span>
            </div>

            <p className='singlePostDesc'>Lorem ipsum, Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo, dolores? Debitis dolore, laudantium expedita corporis quibusdam hic qui! Necessitatibus delectus consectetur assumenda ullam quasi labore ex non doloremque in atque.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo, dolores? Debitis dolore, laudantium expedita corporis quibusdam hic qui! Necessitatibus delectus consectetur assumenda ullam quasi labore ex non doloremque in atque.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo, dolores? Debitis dolore, laudantium expedita corporis quibusdam hic qui! Necessitatibus delectus consectetur assumenda ullam quasi labore ex non doloremque in atque.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo, dolores? Debitis dolore, laudantium expedita corporis quibusdam hic qui! Necessitatibus delectus consectetur assumenda ullam quasi labore ex non doloremque in atque.dolor sit amet consectetur adipisicing elit. Nemo, dolores? Debitis dolore, laudantium expedita corporis quibusdam hic qui! Necessitatibus delectus consectetur assumenda ullam quasi labore ex non doloremque in atque.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo, dolores? Debitis dolore, laudantium expedita corporis quibusdam hic qui! Necessitatibus delectus consectetur assumenda ullam quasi labore ex non doloremque in atque.</p>
        </div>
    </div>
  )
}
