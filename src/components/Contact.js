import Box from '@mui/material/Box'
import Grid from '@mui/material/Unstable_Grid2'

import Form from './Form'

const Contact = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} minHeight={160}>
        <Grid xs display='flex' justifyContent='center' alignItems='center'>
          <Form />
        </Grid>
      </Grid>
    </Box>
  )
}

export default Contact