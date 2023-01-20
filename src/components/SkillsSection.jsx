import React, { useState } from 'react'
import SkillsMobileWidget from './UI/skillsWidget/SkillsMobileWidget'
import SkillsWidget from './UI/skillsWidget/SkillsWidget'

function SkillsSection() {
  const [frontEndSkills] = useState([
    [
      {name: 'HTML', icon: require('../assets/icons/html-icon.png')},
      {name: 'CSS', icon: require('../assets/icons/css-icon.png')},
      {name: 'JavaScript', icon: require('../assets/icons/js-icon.png')},
    ],
    [
      {name: 'React', icon: require('../assets/icons/react-icon.png')},
      {name: 'Redux', icon: require('../assets/icons/redux-icon.png')},
      {name: 'Webpack', icon: require('../assets/icons/webpack-icon.png')},
    ],
    [
      {name: 'Sass/Scss', icon: require('../assets/icons/sass-icon.png')},
    ],
  ])
  const [backEndSkills] = useState([
    [
      {name: 'Node.js', icon: require('../assets/icons/nodejs-icon.png')},
      {name: 'Docker', icon: require('../assets/icons/docker-icon.png')},
      {name: 'PostgreSQL', icon: require('../assets/icons/postgres-icon.png')},
    ],
    [
      {name: 'MongoDB', icon: require('../assets/icons/mongodb-icon.png')},
    ],
    [
      {name: '', icon: ''},
    ],
  ])

  return (
    <div className='main__section' id='skills'>
        <h2>Skills</h2>
        <div className='skills-wrapper skill-widgets'>
          <SkillsWidget header='Front-End' skillRows={frontEndSkills}/>
          <SkillsWidget header='Back-End' skillRows={backEndSkills}/>
        </div>
        <div className='skills-wrapper skill-mobile-widgets'>
          <SkillsMobileWidget header='Front-End' skillRows={frontEndSkills}/>
          <SkillsMobileWidget header='Back-End' skillRows={backEndSkills}/>
        </div>
    </div>
  )
}

export default SkillsSection