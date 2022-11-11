import React from 'react'

import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import PropTypes from 'prop-types'

import illustration from '../assets/coding.svg'
import Service from '../components/Service'
import Social from '../components/Social'
import richTextOptions from '../utils/richTextOptions'

const Home = ({companyData, homeData, serviceData, socialData}) => {
  return (
    <article id='home'>

      <section id='intro'>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <h1>{homeData.title}</h1>
            <div>{documentToReactComponents(homeData.description.json, richTextOptions)}</div>
            <div className='cta'>
              <Button href={homeData.primaryLink} variant="contained">{homeData.primaryLinkText}</Button>
              <Button href={homeData.secondaryLink} variant="text">
                {homeData.secondaryLinkText} &nbsp;
                <FontAwesomeIcon icon={faArrowRight} size='1x' />
              </Button>
            </div>
            <div className='social'>
              <span>Connect:</span>
              {socialData.map((social, index) =>
                <Social
                  key={index}
                  name={social.name}
                  link={social.link}
                  icon={social.icon}
                />
              )}
            </div>
          </Grid>
          <Grid item xs={12} sm={6} sx={{ display: {xs: 'none', sm: 'flex'} }} >
            <img src={illustration} alt={homeData.name} />
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

      <section id='services'>
        <h2>Services</h2>
        <Grid
          container
          rowSpacing={10} 
          spacing={2}
        >
          {serviceData.map((service, index) =>
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Service
                title={service.title}
                icon={service.icon}
                description={documentToReactComponents(service.description.json, richTextOptions)}
              />
            </Grid>
          )}
        </Grid>
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
  serviceData: PropTypes.array,
  socialData: PropTypes.array
}

export default Home