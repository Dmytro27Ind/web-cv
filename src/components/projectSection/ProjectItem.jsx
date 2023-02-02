import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

function ProjectItem({name, desc, lang, link, demo}) {
    let [langClass, setLangClass] = useState([])
    useEffect(() => {
        lang.forEach((l) => {
            if (langClass.map((lc => lc.lang)).includes(l))
                return;
            switch(l) {
                case "JavaScript":
                    setLangClass([...langClass, {lang: l, class: 'js'}]); break
                case "React":
                    setLangClass([...langClass, {lang: l, class: 'react'}]); break
                case "React-Native":
                    setLangClass([...langClass, {lang: l, class: 'react-native'}]); break
                case "css":
                    setLangClass([...langClass, {lang: l, class: 'css'}]); break
                case "scss":
                    setLangClass([...langClass, {lang: l, class: 'scss'}]); break
                case "Python":
                    setLangClass([...langClass, {lang: l, class: 'python'}]); break
                default:
                    setLangClass([...langClass, {lang: l, class: 'js'}]);
            }
        })
    }, [lang, langClass])

  return (
    <div className='main__section project'>
        <h3>
            <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true">
                <path fillRule="evenodd" d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z"></path>
            </svg>
            <a href={link} target="_blank" rel="noreferrer">
                {name}
            </a>
        </h3>
        <span>{desc}</span>
        {demo &&
            <a href={demo} target="_blank" rel="noreferrer">
                <span style={{color: 'var(--accent)'}}>Link to demo</span>
            </a>
        }
        <div className='project__languages'>
            {langClass.map((l, ind) =>
                <div key={ind} className='project__language'>
                    <span className={'project__language-color project__language-color-' + l.class}></span>
                    <span className='project__language'>{l.lang}</span>
                </div>
            )}
        </div>
    </div>
  )
}

export default ProjectItem