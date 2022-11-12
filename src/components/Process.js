import React from 'react'

import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { faBookOpenReader, faCode, faLightbulb, faObjectGroup, faObjectUngroup, faRocket } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Timeline from '@mui/lab/Timeline'
import TimelineConnector from '@mui/lab/TimelineConnector'
import TimelineContent from '@mui/lab/TimelineContent'
import TimelineDot from '@mui/lab/TimelineDot'
import TimelineItem from '@mui/lab/TimelineItem'
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent'
import TimelineSeparator from '@mui/lab/TimelineSeparator'
import Link from '@mui/material/Link'
import Typography from '@mui/material/Typography'
import PropTypes from 'prop-types'
import { Link as RouterLink } from 'react-router-dom'

import richTextOptions from '../utils/richTextOptions'

const Process = ({processData}) => {
  return (
    <article id='process'>
      <h2>How I Work</h2>
      <Timeline position='alternate'>
        {processData.map((stage, index) =>
          <TimelineItem key={index}>
            {stage.case && 
              <TimelineOppositeContent
                sx={{ m: 'auto 0' }}
                align='right'
                variant='body2'
                color='text.secondary'
              >
                <Link component={RouterLink} to={stage.link}>{stage.case}</Link>
              </TimelineOppositeContent>
            }
            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot>
                {
                  {
                    'Ideation': <FontAwesomeIcon icon={faLightbulb} size='2x' />,
                    'Discovery': <FontAwesomeIcon icon={faBookOpenReader} size='2x' />,
                    'Prototype': <FontAwesomeIcon icon={faObjectUngroup} size='2x' />,
                    'Design': <FontAwesomeIcon icon={faObjectGroup} size='2x' />,
                    'Develop': <FontAwesomeIcon icon={faCode} size='2x' />,
                    'Release': <FontAwesomeIcon icon={faRocket} size='2x' />
                  }[stage.title] || <FontAwesomeIcon icon={faCode} size='2x' />
                }
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: '12px', px: 2 }}>
              <Typography variant='h6' component='span'>
                {stage.title}
              </Typography>
              {documentToReactComponents(stage.description.json, richTextOptions)}
            </TimelineContent>
          </TimelineItem>
        )}
      </Timeline>
    </article>
  )
}

Process.propTypes = {
  processData: PropTypes.array
}

export default Process
