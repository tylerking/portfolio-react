import Grid from '@mui/material/Unstable_Grid2'
import Form from './Form'

const Contact = () => {
  return (
    <Grid
      container
      alignItems="center"
      justifyContent="center"
      >
      <Grid xs={12} md={6}>
        <Form />
      </Grid>
    </Grid> 
  )
}

export default Contact