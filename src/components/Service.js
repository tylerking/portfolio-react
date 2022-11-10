import React from 'react'

import { faChartLine, faCode, faCoffee, faMap, faPenRuler, faUniversalAccess, faUsersBetweenLines } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import PropTypes from 'prop-types'

const Service = ({description, icon, title}) => {
  return (
    <div className='service'>
      {
        {
          'code': <FontAwesomeIcon icon={faCode} size='2x' />,
          'universal-access': <FontAwesomeIcon icon={faUniversalAccess} size='2x' />,
          'chart-line': <FontAwesomeIcon icon={faChartLine} size='2x' />,
          'map': <FontAwesomeIcon icon={faMap} size='2x' />,
          'users-between-lines': <FontAwesomeIcon icon={faUsersBetweenLines} size='2x' />,
          'pen-ruler': <FontAwesomeIcon icon={faPenRuler} size='2x' />
        }[icon] || <FontAwesomeIcon icon={faCoffee} size='2x' />
      }
      <h3>{title}</h3>
      {description}
    </div>
  )
}

Service.propTypes = {
  description: PropTypes.array,
  icon: PropTypes.string,
  title: PropTypes.string
}

export default Service