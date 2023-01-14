import React from 'react'
import "../styles/Main.css"
import AboutMeSection from './AboutMeSection'

function Main() {
  return (
    <div className="main" id='main'>
        <AboutMeSection/>
        <div className='contacts main__section'>
          <h2>Contacts</h2>
          <span>sldfjklksdjf</span>
        </div>
    </div>
  )
}

export default Main