import React from 'react'
import VrLine from './UI/vrline/VrLine'

function LanguagesSection() {
  return (
    <div className='main__section'>
        <h2>Languages</h2>
        <div className="languages-wrapper">
            <VrLine borderWidth={2}/>
            <div className="languages">
                <div className="languages__item">
                    <h3>Ukrainian</h3>
                    <span>&nbsp;- Native Speaker</span>
                </div>
                <div className="languages__item">
                    <h3>Slovak</h3>
                    <span>&nbsp;- B1</span>
                </div>
                <div className="languages__item">
                    <h3>English</h3>
                    <span>&nbsp;- A2</span>
                </div>
                <div className="languages__item">
                    <h3>Russian</h3>
                    <span>&nbsp;- C2</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default LanguagesSection