import React from 'react'
import { useParams } from 'react-router-dom'
import ProjectData from '../data/projects.json'

const Project = ({ }) => {
  const params = useParams();
  const project = ProjectData[params.id-1]


  return (
    <body>
      <div id="container--main">
        <a href="/">&#x2190; Go Back</a>

            <h1>{project.title}</h1>

            <ul>
              <li><a href={project.demoLink} target="_blank" rel="noreferrer">Live Demo</a></li>
              <li><a href={project.codeLink} target="_blank" rel="noreferrer">Source code</a></li>
            </ul>
            <p>{project.paragraph1}</p>

            <p>{project.paragraph2}</p>

            {/* <ul>
              <li>Contrary to popular belief, Lorem Ipsum is not simply random text</li>
              <li>making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia</li>
              <li>45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem"</li>
            </ul> */}

    </div>
    </body>
  )
}

export default Project