import React from 'react'
import { useState } from 'react'
import ProjectItem from './ProjectItem'

function ProjectsSection() {
  let [projects] = useState([
    {
      name: "React Music Player",
      desc: "This is a music player written in React using libraries such as Redux and MUI for UI elements.",
      lang: ["JavaScript", "React"],
      link: "https://github.com/Dmytro27Ind/react-music-player",
      demo: 'https://dmytro27ind.github.io/react-music-player/'
    },
    {
      name: "City Desk",
      desc: "Application for notification of failures or breakdowns in the city. App written with React Native for Android.",
      lang: ["JavaScript", "React-Native"],
      link: "https://github.com/Dmytro27Ind/city-desk"
    },
    {
      name: "Web CV",
      desc: "This project is my resume written in React. Also, the project used packages like Redux for state management and Particles.js for dynamic background.",
      lang: ["css", "scss", "JavaScript", "React"],
      link: "https://github.com/Dmytro27Ind/web-cv",
      demo: 'https://dmytro27ind.github.io/web-cv/'
    },
    {
      name: "App Chat",
      desc: "Messenger app written with React Native for android.",
      lang: ["JavaScript", "React-Native"],
      link: "https://github.com/Dmytro27Ind/app-chat"
    },
    {
      name: "Chess Environment",
      desc: "This is the Gym environment from OpenAI for AI training.",
      lang: ["Python"],
      link: "https://github.com/Dmytro27Ind/chess-env-ai"
    },
  ])

  return (
    <div className='project__section' id='projects'>
      <h2>Projects</h2>
      <div className='projects'>
        {projects.map((project, ind) =>
          <ProjectItem key={ind} name={project.name} desc={project.desc} lang={project.lang} link={project.link} demo={project.demo}/>
        )}
      </div>
    </div>
  )
}

export default ProjectsSection