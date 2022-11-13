import React from 'react'

import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { faArrowDown, faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import PropTypes from 'prop-types'

//import Process from '../components/Process'
import Project from '../components/Project'
import richTextOptions from '../utils/richTextOptions'

const Home = ({companyData, homeData, projectData}) => {
  return (
    <div id='home'>
      <section className='intro'>
        <header>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <h1>
                {homeData.title}
              </h1>
              {documentToReactComponents(homeData.description.json, richTextOptions)}
              <div className='cta'>
                <Button href={homeData.primaryLink} variant="contained">
                  {homeData.primaryText} &nbsp;
                  <FontAwesomeIcon icon={faArrowUpRightFromSquare} size='1x' />
                </Button>
                <Button href={homeData.secondaryLink} variant="text">
                  {homeData.secondaryText} &nbsp;
                  <FontAwesomeIcon icon={faArrowDown} size='1x' />
                </Button>
              </div>
            </Grid>
          </Grid>
        </header> 
      </section>
      <section className='companies'>
        <Container>
          <h2>Companies I&apos;ve worked with over the years</h2>
          <Grid
            container
            rowSpacing={10} 
            spacing={2}
          >
            {companyData.map((company, index) =>
              <Grid item key={index} xs={6} sm={4} md={2}>
                <img src={company.logo.url} alt={company.logo.title} />
              </Grid>
            )}
          </Grid>
        </Container>
      </section>
      <section className='projects'>
        <Container>
          <h2>Latest Projects</h2>
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
        </Container>
      </section>
      {/*<section className='process'>
           <Container>
             <Process processData={processData} />
          </Container>
       </section>*/}
    </div>
  )
}

Home.propTypes = {
  companyData: PropTypes.array,
  homeData: PropTypes.object,
  projectData: PropTypes.array,
  processData: PropTypes.array
}

export default Home