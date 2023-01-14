import React from 'react'
import "../styles/Main.css"
import AboutMeSection from './AboutMeSection'
import ContactsSection from './ContactsSection'

function Main() {
  return (
    <div className="main" id='main'>
        <AboutMeSection/>
        <ContactsSection/>
    </div>
  )
}

export default Main