import illustration from '../assets/coding.svg'
import Grid from '@mui/material/Grid'
import PropTypes from 'prop-types'
import Social from '../components/Social'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import richTextOptions from '../utils/richTextOptions'
import Service from '../components/Service'

const Home = ({companyData, introData, serviceData, socialData}) => {
  return (
    <article id='home'>

      <section id='intro'>
        <h1>{introData.name}</h1>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <h3>{introData.title}</h3>
            <div>{documentToReactComponents(introData.description.json, richTextOptions)}</div>

            - Download Resume
            - View My Process
            
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
            <img src={illustration} alt={introData.name} />
          </Grid>
        </Grid>    
      </section>

      <section id='companies'>
        <h2>Companies I've Worked With</h2>
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
  introData: PropTypes.object,
  serviceData: PropTypes.array,
  socialData: PropTypes.array
}

export default Home