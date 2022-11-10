import Grid from '@mui/material/Grid'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import richTextOptions from '../utils/richTextOptions'
import Project from '../components/Project'

const Projects = ({data}) => {
  return (
    <article id='projects'>
      <h1>Projects</h1>
      <Grid
        container
        rowSpacing={10} 
        spacing={2}
        >
        {data.map((project, index) =>
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

export default Projects