import { get } from 'lodash'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Grid from '@mui/material/Grid'
import PropTypes from 'prop-types'
import Typography from '@mui/material/Typography'

const Project = ({description, image, title, link}) => {
  return (
    <Grid item xs={12} sm={6}>
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
          <Button size='small'>Share</Button>
          <Button size='small'>Learn More</Button>
        </CardActions>
      </Card>
    </Grid>
  )
}

Project.propTypes = {
  description: PropTypes.array,
  image: PropTypes.object,
  link: PropTypes.string,
  title: PropTypes.string
}

export default Project