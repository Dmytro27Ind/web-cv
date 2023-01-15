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
                    <div className={cl['row__time']}>{ed.time}</div>
                    <div className={cl['row__degree']}>
                        <div className={cl['ellipse']}/>
                        {ed.degree}
                    </div>
                    <div className={cl['row__university']}>{ed.university}</div>
                </div>
            )}
        </div>
    </div>
  )
}

export default EducationWidget