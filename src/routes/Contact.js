import React from 'react'

import Container from '@mui/material/Container'
import Grid from '@mui/material/Unstable_Grid2'

import Form from '../components/Form'

const Contact = () => {
  return (
    <Container id='contact'>
      <section>
        <header className='title'>
          <h1>Contact</h1>
          <p>Lets build something together. To get in touch you can use the form below or email me at <a href='mailto:tk@tylerking.io'>tk@tylerking.io</a>. I should respond within 24 hours.</p>
        </header>
      </section>
      <section>
        <Grid
          container
          alignItems='center'
          justifyContent='center'
        >
          <Grid xs={12} md={6}>
            <Form />
          </Grid>
        </Grid> 
      </section>
    </Container>
  )
}

export default Contact