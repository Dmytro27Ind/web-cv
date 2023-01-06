import React from 'react'
import "../styles/Sidebar.css"
import { BsFacebook } from 'react-icons/bs';

function Sidebar() {
  return (
    <div className="sidebar">
        <div className="sidebar__header">
            <img className="sidebar__ava" alt="ava" src={require("../assets/photo.png")}/>
            <h1>Bc. Dmytro Kagirov</h1>
            <h2>Student, Web Developer</h2>
            <BsFacebook color='white'/>
        </div>
    </div>
  )
}

export default Sidebar