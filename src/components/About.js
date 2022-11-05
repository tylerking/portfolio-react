import illustration from '../assets/coding.svg'
import Grid from '@mui/material/Grid'
import PropTypes from 'prop-types'
import Social from './Social'

const About = ({description, name, social, title}) => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6}>
        <h1>{name}</h1>
        <h2>{title}</h2>
        <div>{description}</div>
        {social.map((social, index) =>
          <Social
            key={index}
            name={social.name}
            link={social.link}
            icon={social.icon}
          />
        )}
      </Grid>
      <Grid item xs={12} sm={6}>
        <img src={illustration} alt={name} />
      </Grid>
    </Grid>
  )
}

About.propTypes = {
  description: PropTypes.array,
  name: PropTypes.string,
  social: PropTypes.array,
  title: PropTypes.string
}

export default About