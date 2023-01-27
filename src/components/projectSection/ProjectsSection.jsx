import React from 'react'
import { useState } from 'react'
import ProjectItem from './ProjectItem'

function ProjectsSection() {
  let [projects] = useState([
    {
      name: "City Desk",
      desc: "Application for notification of failures or breakdowns in the city. App written with React Native for Android.",
      lang: ["JavaScript", "React-Native"],
      link: "https://github.com/Dmytro27Ind/city-desk"
    },
    {
      name: "App Chat",
      desc: "Messenger app written with React Native for android.",
      lang: ["JavaScript", "React-Native"],
      link: "https://github.com/Dmytro27Ind/app-chat"
    },
    {
      name: "Web CV",
      desc: "This project is my resume written in React. Also, the project used packages like Redux for state management and Particles.js for dynamic background.",
      lang: ["css", "scss", "JavaScript", "React"],
      link: "https://github.com/Dmytro27Ind/web-cv"
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
          <ProjectItem key={ind} name={project.name} desc={project.desc} lang={project.lang} link={project.link}/>
        )}
      </div>
    </div>
  )
}

export default ProjectsSection