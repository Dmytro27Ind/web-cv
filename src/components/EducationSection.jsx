import React from 'react'
import EducationWidget from './UI/educationWidget/EducationWidget'

function EducationSection() {
  return (
    <div className='main__section' id='education'>
        <h2>Education</h2>
        <EducationWidget
            education = {[
                {
                    time: '2019 - 2022',
                    degree: "Bachelor's degree - Computer Science (Informatics)",
                    university: 'Technical University Of Kosice (TUKE)'
                },
                {
                    time: '2022 - Present',
                    degree: "Master's Degree - Computer Science (Informatics)",
                    university: 'Technical University Of Kosice (TUKE)'
                },
            ]}
        />
    </div>
  )
}

export default EducationSection