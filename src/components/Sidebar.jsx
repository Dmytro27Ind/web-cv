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
              <ContactIcon link='https://www.facebook.com/dmytro.kagirov.1' name="facebook"/>
              <ContactIcon link='https://t.me/lyn10i' name="telegram"/>
              <ContactIcon link='https://github.com/Dmytro27Ind' name="github"/>
              <ContactIcon link='https://devpost.com/dmytro27kagirov' name="devpost"/>
              <ContactIcon link='mailto:dmytro27kagirov@gmail.com' name="gmail"/>
            </div>
        </div>
        <div className='sidebar__nav'>
          <ul>
            <li><a href="#main">About me</a></li>
            <li><a href="#main">Contacts</a></li>
            <li><a href="#main">Education</a></li>
            <li><a href="#main">Skills</a></li>
            <li><a href="#main">Languages</a></li>
            <li><a href="#main">Projects</a></li>
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