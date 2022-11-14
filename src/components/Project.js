import React from 'react'

import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import { get } from 'lodash'
import PropTypes from 'prop-types'

const Project = ({description, image, title, demo, source}) => {
  return (
    <Grid className='project' item xs={12} sm={6}>
      <Card>
        <CardMedia
          component='img'
          height='140'
          image={get(image, 'url')}
          alt={get(image, 'title')}
        />
        <CardContent>
          <Typography gutterBottom variant='h5' component='div'>
            {title}
          </Typography>
          {description}
        </CardContent>
        <CardActions>
          {demo && <Button href={demo} size='small' target='_blank'>Visit Site</Button>}
          {source && <Button href={source} size='small' target='_blank'>View Source</Button>}
        </CardActions>
      </Card>
    </Grid>
  )
}

Project.propTypes = {
  description: PropTypes.array,
  demo: PropTypes.string,
  image: PropTypes.object,
  link: PropTypes.string,
  title: PropTypes.string,
  source: PropTypes.string,
}

export default Project