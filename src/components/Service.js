import React from 'react'

import { faCode, faCoffee, faMap, faUsersBetweenLines } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Chip from '@mui/material/Chip'
import Grid from '@mui/material/Grid'
import PropTypes from 'prop-types'

const checkIcon = (icon) => {
  switch (icon) {
  case 'Software Development':
    return <FontAwesomeIcon icon={faCode} size='2x' />
  case 'Product Development':
    return <FontAwesomeIcon icon={faMap} size='2x' />
  case 'Product Design':
    return <FontAwesomeIcon icon={faUsersBetweenLines} size='2x' />
  default:
    return <FontAwesomeIcon icon={faCoffee} size='2x' />
  }
}

const Service = ({capabilities, description, image, odd, title}) => {
  if (!odd) {
    return (
      <Grid
        container
        spacing={4}
      >
        <Grid item xs={12} md={6}>
          {checkIcon(title)}
          <h3>{title}</h3>
          {description}
          <p><strong>Capabilities:</strong></p>
          {capabilities.map((skill, index) =>
            <Chip key={index} label={skill} />
          )}
        </Grid>
        <Grid item xs={12} md={6} sx={{ display: { xs: 'none', md: 'flex' } }}>
          <div className='service-image'>
            <img alt={image.title} src={image.url}  className='even'/>
          </div>
        </Grid>
      </Grid>
    )
  }
  return (
    <Grid
      container
      spacing={4}
    >
      <Grid item xs={12} md={6} sx={{ display: { xs: 'none', md: 'flex' } }}>
        <div className='service-image'>
          <img alt={image.title} src={image.url}  className='even'/>
        </div>
      </Grid>
      <Grid item xs={12} md={6}>
        {checkIcon(title)}
        <h3>{title}</h3>
        {description}
        <p><strong>Capabilities:</strong></p>
        {capabilities.map((skill, index) =>
          <Chip key={index} label={skill} />
        )}
      </Grid>
    </Grid>
  )
}

Service.propTypes = {
  capabilities: PropTypes.array,
  description: PropTypes.array,
  image: PropTypes.object,
  odd: PropTypes.bool,
  title: PropTypes.string
}

export default Service