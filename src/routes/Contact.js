import React from 'react'

import Container from '@mui/material/Container'
import Grid from '@mui/material/Unstable_Grid2'

import Form from '../components/Form'

const Contact = () => {
  return (
    <Container id='contact'>
      <section>
        <header>
          <h1>Contact</h1>
          <p>Blurb about the contact page</p>
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