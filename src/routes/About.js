import React from 'react'

import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { 
  faCss3, faDigitalOcean, faDocker, faFigma, faGit, faHtml5, faJira, faJs,
  faLess, faNodeJs, faReact, faSass, faVuejs } from '@fortawesome/free-brands-svg-icons'
import { faDatabase, faImage, faNetworkWired, faServer} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Grid from '@mui/material/Grid'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import Paper from '@mui/material/Paper'
import PropTypes from 'prop-types'

import richTextOptions from '../utils/richTextOptions'

const About = ({aboutData, skillData}) => {
  return (
    <article id='about'>
      <h1>{aboutData.title}</h1>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={8}>
          <div>{documentToReactComponents(aboutData.bio.json, richTextOptions)}</div>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Paper className='skills'>
            <Grid container spacing={2}>
              <Grid item xs={6} sm={12} md={6}>
                <h3>{skillData.title}</h3>
                <List>
                  {skillData.skill.map((skill, index) =>
                    <ListItem disablePadding key={index}>
                      <ListItemIcon>
                        {
                          {
                            'JavaScript': <FontAwesomeIcon icon={faJs} size='1x' />,
                            'Node': <FontAwesomeIcon icon={faNodeJs} size='1x' />,
                            'React': <FontAwesomeIcon icon={faReact} size='1x' />,
                            'Vue': <FontAwesomeIcon icon={faVuejs} size='1x' />,
                            'CSS': <FontAwesomeIcon icon={faCss3} size='1x' />,
                            'Less': <FontAwesomeIcon icon={faLess} size='1x' />,
                            'SASS': <FontAwesomeIcon icon={faSass} size='1x' />,
                            'HTML': <FontAwesomeIcon icon={faHtml5} size='1x' />,
                            'GIT': <FontAwesomeIcon icon={faGit} size='1x' />,
                            'Docker': <FontAwesomeIcon icon={faDocker} size='1x' />,
                          }[skill] || <FontAwesomeIcon icon={faJs} size='1x' />
                        }
                      </ListItemIcon>
                      <ListItemText primary={skill} />
                    </ListItem>
                  )}
                </List>
              </Grid>
              <Grid item xs={6} sm={12} md={6}>
                <h3>Tools</h3>
                <List>
                  {skillData.tool.map((tool, index) =>
                    <ListItem disablePadding key={index}>
                      <ListItemIcon>
                        {
                          {
                            'GIT': <FontAwesomeIcon icon={faGit} size='1x' />,
                            'Docker': <FontAwesomeIcon icon={faDocker} size='1x' />,
                            'Jira': <FontAwesomeIcon icon={faJira} size='1x' />,
                            'MongoDB': <FontAwesomeIcon icon={faDatabase} size='1x' />,
                            'Headless APIs': <FontAwesomeIcon icon={faServer} size='1x' />,
                            'Netlify': <FontAwesomeIcon icon={faNetworkWired} size='1x' />,
                            'Digital Ocean': <FontAwesomeIcon icon={faDigitalOcean} size='1x' />,
                            'Figma': <FontAwesomeIcon icon={faFigma} size='1x' />,
                            'Adobe CS': <FontAwesomeIcon icon={faImage} size='1x' />
                          }[tool] || <FontAwesomeIcon icon={faJs} size='1x' />
                        }
                      </ListItemIcon>
                      <ListItemText primary={tool} />
                    </ListItem>
                  )}
                </List>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </article>
  )
}

About.propTypes = {
  aboutData: PropTypes.object,
  skillData: PropTypes.object
}

export default About