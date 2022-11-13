import React from 'react'

import { faFaceSadCry} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const NotFound = () => {
  return (
    <article id='not-found'>
      <header>
        <h1>404 Error</h1>
        <p>Oop...this page can not be found</p>
      </header>
      <FontAwesomeIcon icon={faFaceSadCry} size='10x' />
    </article>
  )
}

export default NotFound