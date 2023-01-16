import React from 'react'
import { useDispatch } from "react-redux/es/exports";
import "../styles/Sidebar.css"
import allActions from "../store/actions"
import ContactIcon from './UI/contactIcon/ContactIcon';
import { BiDownload } from 'react-icons/bi'
import ThemeToggle from './UI/toggle/ThemeToggle';

function Sidebar() {
  const dispatch = useDispatch()

  return (
    <div className="sidebar">
        <div className="sidebar__header">
            <img className="sidebar__ava" alt="ava" src={require("../assets/photo.png")}/>
            <h1>Bc. Dmytro Kagirov</h1>
            <h2>Student, Web Developer</h2>
            <div className='sidebar__contacts'>
              <ContactIcon size={30} link='https://www.facebook.com/dmytro.kagirov.1' name="facebook"/>
              <ContactIcon size={30} link='https://t.me/lyn10i' name="telegram"/>
              <ContactIcon size={30} link='https://github.com/Dmytro27Ind' name="github"/>
              <ContactIcon size={30} link='https://devpost.com/dmytro27kagirov' name="devpost"/>
              <ContactIcon size={30} link='mailto:dmytro27kagirov@gmail.com' name="gmail"/>
            </div>
        </div>
        <div className='sidebar__nav'>
          <ul>
            <li><a href="#about-me">About me</a></li>
            <li><a href="#education">Education</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#contacts">Contacts</a></li>
            <li><a href="#languages">Languages</a></li>
            <li><a href="#projects">Projects</a></li>
          </ul>
        </div>
        <div className='sidebar__footer-wrapper'>
          <div className='sidebar__footer'>
            <div className='sidebar__download'>
              <a href="#main">
                <span>Download CV</span>
                <BiDownload className='sidebar__download-icon'/>
              </a>
            </div>
            <ThemeToggle onChange={() => dispatch(allActions.switchTheme())}/>
          </div>
        </div>
    </div>
  )
}

export default Sidebar