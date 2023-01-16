import React from 'react'
import VrLine from '../vrline/VrLine'
import cl from './EducationWidget.module.css'

function EducationWidget({education}) {
  return (
    <div className={cl['wrapper']}>
        <VrLine borderWidth={2}/>
        <div className={cl['row-wrapper']}>
            {education.map((ed, index) =>
                <div key={index} className={cl['row']}>
                    <h4 className={cl['row__time']}>{ed.time}</h4>
                    <h3 className={cl['row__degree']}>
                        <div className={cl['ellipse']}/>
                        {ed.degree}
                    </h3>
                    <span className={cl['row__university']}>{ed.university}</span>
                </div>
            )}
        </div>
    </div>
  )
}

export default EducationWidget