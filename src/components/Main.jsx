import React from 'react'
import "../styles/Main.scss"
import AboutMeSection from './AboutMeSection'
import ContactsSection from './contactSection/ContactsSection'
import EducationSection from './EducationSection'
import LanguagesSection from './LanguagesSection'
import ProjectsSection from './ProjectsSection'
import SkillsSection from './SkillsSection'

function Main() {
  return (
    <div className="main" id='main'>
        <AboutMeSection/>
        <EducationSection/>
        <SkillsSection/>
        <ContactsSection/>
        <LanguagesSection/>
        <ProjectsSection/>
    </div>
  )
}

export default Main