import React from 'react'

import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import Grid from '@mui/material/Grid'
import PropTypes from 'prop-types'

import Project from '../components/Project'
import richTextOptions from '../utils/richTextOptions'

const Projects = ({projectData}) => {
  return (
    <article id='projects'>
      <h1>Projects</h1>
      <Grid
        container
        rowSpacing={10} 
        spacing={2}
      >
        {projectData.map((project, index) =>
          <Project
            key={index}
            title={project.title}
            image={project.image}
            demo={project.demo}
            source={project.source}
            description={documentToReactComponents(project.description.json, richTextOptions)}
          />
        )}
      </Grid>
    </article>
  )
}

Projects.propTypes = {
  projectData: PropTypes.array
}

export default Projects