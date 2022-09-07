import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ProjectData from '../data/projects.json'

const ProjectSection = () => {
    return (
        <section className="section--page" id="my-work">
            <h2>Projects & Accomplishments</h2>


            {ProjectData.map((project, key) => {
                return (
                    <div className="card--project" key={key} >
                        <a href={`/project/${project.id}`}><span>🏆 </span>{project.title}</a>
                        {/* <Link to={project.id}><span>🏆 </span>{project.title}</Link> */}

                    </div>
                )
            })}
        </section>  

    )
}

export default ProjectSection