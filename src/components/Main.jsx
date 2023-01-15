import React from 'react'
import "../styles/Main.css"
import AboutMeSection from './AboutMeSection'
import ContactsSection from './ContactsSection'
import EducationSection from './EducationSection'

function Main() {
  return (
    <div className="main" id='main'>
        <AboutMeSection/>
        <ContactsSection/>
        <EducationSection/>
    </div>
  )
}

export default Main