import React from 'react'
import "../styles/Main.css"
import AboutMeSection from './AboutMeSection'
import ContactsSection from './ContactsSection'
import EducationSection from './EducationSection'
import SkillsSection from './SkillsSection'

function Main() {
  return (
    <div className="main" id='main'>
        <AboutMeSection/>
        <EducationSection/>
        <SkillsSection/>
        <ContactsSection/>
    </div>
  )
}

export default Main