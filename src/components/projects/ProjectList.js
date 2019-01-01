import React from 'react'
import ProjectSummery from './ProjectSummary'

const ProjectList = ({projects}) => {
    return(
        <div className="Project-list section">
           {
               projects && projects.map(project => {
                   return(
                       <ProjectSummery project={project} key={project.id} />
                   )
               })
           }
        </div>
    )
}

export default ProjectList
