import React from 'react'

import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import Grid from '@mui/material/Grid'
import PropTypes from 'prop-types'

import Service from '../components/Service'
import richTextOptions from '../utils/richTextOptions'

const Services = ({serviceData}) => {
  return (
    <article id='services'>
      <h2>How I Can Help Build Your Project</h2>
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
    </article>
  )
}

Services.propTypes = {
  serviceData: PropTypes.array
}

export default Services