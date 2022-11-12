import React from 'react'

import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import PropTypes from 'prop-types'

import Workflow from '../components/Workflow'
import richTextOptions from '../utils/richTextOptions'

const Home = ({companyData, homeData, workflowData}) => {
  return (
    <article id='home'>

      <section id='intro'>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={7}>
            <h1>
              {homeData.title}
              <br/>
              {homeData.name}
            </h1>
            <div>{documentToReactComponents(homeData.description.json, richTextOptions)}</div>
            <div className='cta'>
              <Button href={homeData.primaryLink} variant="contained">{homeData.primaryLinkText}</Button>
              <Button href={homeData.secondaryLink} variant="text">
                {homeData.secondaryLinkText} &nbsp;
                <FontAwesomeIcon icon={faArrowRight} size='1x' />
              </Button>
            </div>
          </Grid>
        </Grid>    
      </section>

      <section id='companies'>
        <h2>Companies I&apos;ve Worked With</h2>
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
      </section>

      <section id='process'>
        <Workflow workflowData={workflowData} />
      </section>

      <section id='featured'>
        <h2>Latest Project</h2>
      </section>
    </article>
  )
}

Home.propTypes = {
  companyData: PropTypes.array,
  homeData: PropTypes.object,
  workflowData: PropTypes.array
}

export default Home