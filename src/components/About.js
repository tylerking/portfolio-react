import illustration from '../assets/coding.svg'
import Grid from '@mui/material/Grid'
import PropTypes from 'prop-types'
import Social from './Social'

const About = ({description, name, social, title}) => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6}>
        <h1>{name}</h1>
        <h3>{title}</h3>
        <div>{description}</div>
        
        <div className="social">
          <span>Connect:</span>
          {social.map((social, index) =>
            <Social
              key={index}
              name={social.name}
              link={social.link}
              icon={social.icon}
            />
          )}
        </div>
      </Grid>
      <Grid item xs={12} sm={6} sx={{ visibility: {xs: 'hidden', sm: 'visible'} }} >
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