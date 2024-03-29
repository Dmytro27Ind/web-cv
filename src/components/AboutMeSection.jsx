import React from 'react'
import VrLine from './UI/vrline/VrLine'

function AboutMeSection() {
  return (
    <div className='main__section' id='about-me'>
        <img className='about-me__img' alt="header" src={require("../assets/about-me-header.jpg")}></img>
        <h2>About Me</h2>
        <p>I am frontend developer and student at the Technical University of Kosice. I spend most of my free time to improve my programming skills. I'm currently learning React, Redux, TypeScript, NodeJS and English. Also I am responsible and meet deadlines.</p>
        <div className='about-me__table'>
            <VrLine height={71} borderWidth={2}/>
            <div className='about-me__categories'>
                <h3>Date of Birth:</h3>
                <h3>Nationality:</h3>
                <h3>Place of Birth:</h3>
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