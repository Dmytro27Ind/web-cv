import React from 'react'
import VrLine from '../vrline/VrLine'
import cl from './SkillsWidget.module.css'

function SkillsWidget({header, skillRows}) {
  return (
    <div className={cl['wrapper']}>
      <VrLine borderWidth={2}/>
      <table>
        <thead>
          <tr>
            <td colSpan="3">
              {header}
            </td>
          </tr>
        </thead>
        <tbody>
          {skillRows.map((row, ind) =>
            <tr key={ind}>
              {row.map((skill, ind) =>
                <td key={ind}>
                  <div className={cl['skill']}>
                    <span>{skill.name}</span>
                    {skill.icon
                      ? <img alt='skill icon' src={skill.icon}/>
                      : null
                    }
                  </div>
                </td>
              )}
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}

export default SkillsWidget