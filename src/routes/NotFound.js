import React from 'react'

import { faFaceSadCry} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Container from '@mui/material/Container'

const NotFound = () => {
  return (
    <Container id='not-found'>
      <section>
        <header className='title'>
          <h1>404 Error</h1>
          <p>Oop...this page can not be found</p>
        </header>
      </section>
      <section>
        <FontAwesomeIcon icon={faFaceSadCry} size='10x' />
      </section>
    </Container>
  )
}

export default NotFound