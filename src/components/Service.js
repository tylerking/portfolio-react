import React from 'react'

import { faChartLine, faCode, faCoffee, faMap, faPenRuler, faUniversalAccess, faUsersBetweenLines } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Grid from '@mui/material/Grid'
import PropTypes from 'prop-types'

const checkIcon = (icon) => {
  switch (icon) {
  case 'Software Development':
    return <FontAwesomeIcon icon={faCode} size='2x' />
  case 'Accessibility':
    return <FontAwesomeIcon icon={faUniversalAccess} size='2x' />
  case 'Data Visualization':
    return <FontAwesomeIcon icon={faChartLine} size='2x' />
  case 'Product Development':
    return <FontAwesomeIcon icon={faMap} size='2x' />
  case 'User Experience':
    return <FontAwesomeIcon icon={faUsersBetweenLines} size='2x' />
  case 'Interface Design':
    return <FontAwesomeIcon icon={faPenRuler} size='2x' />
  default:
    return <FontAwesomeIcon icon={faCoffee} size='2x' />
  }
}

const Service = ({description, image, odd, title}) => {
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
        </Grid>
        <Grid item xs={12} md={6}>
          <img alt={image.title} src={image.url}  className='even'/>
        </Grid>
      </Grid>
    )
  }
  return (
    <Grid
      container
      spacing={4}
    >
      <Grid item xs={12} md={6}>
        <img alt={image.title} src={image.url}  />
      </Grid>
      <Grid item xs={12} md={6}>
        {checkIcon(title)}
        <h3>{title}</h3>
        {description}
      </Grid>
    </Grid>
  )
}

Service.propTypes = {
  description: PropTypes.array,
  image: PropTypes.object,
  odd: PropTypes.bool,
  title: PropTypes.string
}

export default Service