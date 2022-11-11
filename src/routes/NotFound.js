import React from 'react'

import { faFaceSadCry} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const NotFound = () => {
  return (
    <article id='not-found'>
      <h1>404 Not Found</h1>
      <FontAwesomeIcon icon={faFaceSadCry} size='10x' />
    </article>
  )
}

export default NotFound