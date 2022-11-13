import React from 'react'

import Grid from '@mui/material/Unstable_Grid2'

import Form from '../components/Form'

const Contact = () => {
  return (
    <article id='contact'>
      <header>
        <h1>Contact</h1>
        <p>Blurb about the contact page</p>
      </header>
      <Grid
        container
        alignItems='center'
        justifyContent='center'
      >
        <Grid xs={12} md={6}>
          <Form />
        </Grid>
      </Grid> 
    </article>
  )
}

export default Contact