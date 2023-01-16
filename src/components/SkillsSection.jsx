import React from 'react'
import SkillsWidget from './UI/skillsWidget/SkillsWidget'

function SkillsSection() {
  return (
    <div className='main__section' id='skills'>
        <h2>Skills</h2>
        <div className='skills-wrapper'>
          <SkillsWidget header='Front-End' skillRows={[
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
          ]}/>
          <SkillsWidget header='Back-End' skillRows={[
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
          ]}/>
        </div>
    </div>
  )
}

export default SkillsSection