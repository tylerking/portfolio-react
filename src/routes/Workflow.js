import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import richTextOptions from '../utils/richTextOptions'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookOpenReader, faCode, faLightbulb, faObjectGroup, faObjectUngroup, faRocket } from '@fortawesome/free-solid-svg-icons'
import { Link as RouterLink } from 'react-router-dom'
import Link from '@mui/material/Link'

import Timeline from '@mui/lab/Timeline'
import TimelineItem from '@mui/lab/TimelineItem'
import TimelineSeparator from '@mui/lab/TimelineSeparator'
import TimelineConnector from '@mui/lab/TimelineConnector'
import TimelineContent from '@mui/lab/TimelineContent'
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent'
import TimelineDot from '@mui/lab/TimelineDot'
import Typography from '@mui/material/Typography'

const Workflow = ({workflowData}) => {
  return (
    <article id='workflow'>
      <h1>Workflow</h1>
      <Timeline position='alternate'>
        {workflowData.map((stage, index) =>
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
                    'code': <FontAwesomeIcon icon={faCode} size='2x' />,
                    'book-open-reader': <FontAwesomeIcon icon={faBookOpenReader} size='2x' />,
                    'lightbulb': <FontAwesomeIcon icon={faLightbulb} size='2x' />,
                    'object-group': <FontAwesomeIcon icon={faObjectGroup} size='2x' />,
                    'object-ungroup': <FontAwesomeIcon icon={faObjectUngroup} size='2x' />,
                    'rocket': <FontAwesomeIcon icon={faRocket} size='2x' />
                  }[stage.icon] || <FontAwesomeIcon icon={faCode} size='2x' />
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

export default Workflow
