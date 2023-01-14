import React from 'react'

function AboutMeSection() {
  return (
    <div className='about-me main__section'>
        <img className='about-me__img' alt="header" src={require("../assets/about-me-header.jpg")}></img>
        <h2>About Me</h2>
        <p>Beginning frontend developer and student at the Technical University in Kosice. I spend most of my free time to improve my programming skills. Also I am responsible and meet deadlines.</p>
        <div className='about-me__table'>
            <div className='about-me__line'></div>
            <div className='about-me__categories'>
                <span>Date of Birth:</span>
                <span>Nationality:</span>
                <span>Place of Birth:</span>
            </div>
            <div className='about-me__data'>
                <span>27.06.2002</span>
                <span>Ukrainian</span>
                <span>Mykolaiv, Ukraine</span>
            </div>
        </div>
    </div>
  )
}

export default AboutMeSection