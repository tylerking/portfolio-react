import React, { useEffect, useState } from 'react'

import { 
  faCss3, faDigitalOcean, faDocker, faFigma, faGit, faGrunt, faGulp, faHtml5, faJira, faJs,
  faLess, faNodeJs, faPython, faReact, faSass, faVuejs } from '@fortawesome/free-brands-svg-icons'
import { faCode, faDatabase, faImage, faNetworkWired, faServer} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Chip from '@mui/material/Chip'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Unstable_Grid2'
import PropTypes from 'prop-types'

const iconSkills = (icon) => {
  switch (icon) {
  case 'Python':
    return <FontAwesomeIcon icon={faPython} size='1x' />
  case 'Django':
    return <FontAwesomeIcon icon={faPython} size='1x' />
  case 'JavaScript':
    return <FontAwesomeIcon icon={faJs} size='1x' />
  case 'Node':
    return <FontAwesomeIcon icon={faNodeJs} size='1x' />
  case 'React':
    return <FontAwesomeIcon icon={faReact} size='1x' />
  case 'Vue':
    return <FontAwesomeIcon icon={faVuejs} size='1x' />
  case 'Next':
    return <FontAwesomeIcon icon={faReact} size='1x' />
  case 'Nuxt':
    return <FontAwesomeIcon icon={faVuejs} size='1x' />
  case 'Gulp':
    return <FontAwesomeIcon icon={faGulp} size='1x' />
  case 'Grunt':
    return <FontAwesomeIcon icon={faGrunt} size='1x' />
  case 'CSS3':
    return <FontAwesomeIcon icon={faCss3} size='1x' />
  case 'Less':
    return <FontAwesomeIcon icon={faLess} size='1x' />
  case 'SASS':
    return <FontAwesomeIcon icon={faSass} size='1x' />
  case 'HTML5':
    return <FontAwesomeIcon icon={faHtml5} size='1x' />
  case 'Pug':
    return <FontAwesomeIcon icon={faCode} size='1x' />
  default:
    return <FontAwesomeIcon icon={faServer} size='1x' />
  }
}

const iconTools = (icon) => {
  switch (icon) {
  case 'GIT':
    return <FontAwesomeIcon icon={faGit} size='1x' />
  case 'Docker':
    return <FontAwesomeIcon icon={faDocker} size='1x' />
  case 'Jira':
    return <FontAwesomeIcon icon={faJira} size='1x' />
  case 'MongoDB':
    return <FontAwesomeIcon icon={faDatabase} size='1x' />
  case 'Headless APIs':
    return <FontAwesomeIcon icon={faServer} size='1x' />
  case 'Netlify':
    return <FontAwesomeIcon icon={faNetworkWired} size='1x' />
  case 'Heroku':
    return <FontAwesomeIcon icon={faNetworkWired} size='1x' />
  case 'Digital Ocean':
    return <FontAwesomeIcon icon={faDigitalOcean} size='1x' />
  case 'Figma':
    return <FontAwesomeIcon icon={faFigma} size='1x' />
  case 'Adobe CS':
    return <FontAwesomeIcon icon={faImage} size='1x' />
  default:
    return <FontAwesomeIcon icon={faServer} size='1x' />
  }
}

const Stats = ({skillData}) => {
  const [githubData, setGithubData] = useState([])
  const [treehouseData, setTreehouseData] = useState()
  const githubUser = 'tylerking'
  const treehouseUser = 'doitliketyler'
  
  useEffect(() => {
    const fetchGithubData = () => {
      return fetch(`https://api.github.com/users/${githubUser}`)
        .then((response) => response.json())
        .then((data) => setGithubData(data))
    }
    const fetchTreehouseData = () => {
      return fetch(`https://teamtreehouse.com/profiles/${treehouseUser}.json`)
        .then((response) => response.json())
        .then((data) => setTreehouseData(data.badges.length))
    }
    fetchTreehouseData()
    fetchGithubData()
  }, [])
  
  return (
    <section className='skillset'>
      <Container>
        <Grid className='stats' container spacing={2}>
          <Grid xs={3}>
            <h3>15+</h3>
            <span>Years Experience</span>
          </Grid>
          <Grid xs={3}>
            <h3>50+</h3>
            <span>Projects Done</span>
          </Grid>
          <Grid xs={3}>
            <h3>{githubData.public_repos}</h3>
            <span>Github Repos</span>
          </Grid>
          <Grid xs={3}>
            <h3>{treehouseData}</h3>
            <span>Treehouse Badges</span>
          </Grid>
        </Grid>
        <Grid classname='skills' container spacing={2}>
          <Grid xs={12} md={6}>
            <h5>{skillData.title}</h5>
            {skillData.skill.map((skill, index) =>
              <Chip icon={iconSkills(skill)} key={index} label={skill} />
            )}
          </Grid>
          <Grid xs={12} md={6}>
            <h5>Tools</h5>
            {skillData.tool.map((tool, index) =>
              <Chip icon={iconTools(tool)} key={index} label={tool} />
            )}
          </Grid>
        </Grid>
      </Container>
    </section>
  )
}

Stats.propTypes = {
  skillData: PropTypes.object
}

export default Stats