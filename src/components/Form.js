import { useState } from 'react'
import Button from '@mui/material/Button'
import MenuItem from '@mui/material/MenuItem'
import Grid from '@mui/material/Unstable_Grid2'
import Select from '@mui/material/Select'
import Snackbar from '@mui/material/Snackbar'
import TextField from '@mui/material/TextField'

const AIRTABLE_KEY = process.env.REACT_APP_AIRTABLE_KEY
const Airtable = require('airtable')
const base = new Airtable({apiKey: `${AIRTABLE_KEY}`}).base('appAlpFTjJfNWcSEw')

const Form = () => {
  const [open, setOpen] = useState(false)
  const [status, setStatus] = useState('Send')

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [number, setNumber] = useState('')
  const [reason, setReason] = useState('General Question')
  const [message, setMessage] = useState('')

  const reasons = ['General Question', 'Contract Work', 'Hiring']

  const resetForm = () => {
    setName('')
    setEmail('')
    setNumber('')
    setReason('General Question')
    setMessage('')
  }

  const handleSnackbar = () => {
    setOpen(false)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('Sending')
    base('Contact').create([
      {
        'fields': {
          'Name': `${name}`,
          'Email': `${email}`,
          'Number': `${number}`,
          'Reason': `${reason}`,
          'Message': `${message}`,
        }
      }
    ], {typecast: true}, function(err, records) {
      if (err) {
        console.error(err)
        return
      }
      records.forEach(function (record) {
        console.log(record.getId())
        setStatus('Send')
        handleSnackbar(e)
        resetForm()
        setOpen(true)
      })
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      <Grid 
        container
        spacing={2}
        >
        <Grid xs={12} md={6}>
          <TextField
            id='name'
            fullWidth
            label='Name'
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Grid>
        <Grid xs={12} md={6}>
          <Select
            id='reason'
            fullWidth
            label='Reason'
            value={reason}
            onChange={(e) => setReason(e.target.value)}
          >
            {reasons.map((reason, index) =>
              <MenuItem
                key={index}
                value={reason}>
                  {reason}
              </MenuItem>
            )}
          </Select>
        </Grid>
        <Grid xs={12} md={6}>
          <TextField
            id='email'
            fullWidth
            label='Email'
            required
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Grid>
        <Grid xs={12} md={6}>
          <TextField
            id='number'
            fullWidth
            label='Number'
            required
            value={number}
            onChange={(e) => setNumber(e.target.value)}
          />
        </Grid>
        <Grid xs={12}>
          <TextField
            id='message'
            fullWidth
            label='Message'
            multiline
            required
            rows={6}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </Grid>
        <Grid xs={12}>
          <Button type='submit' variant='contained'>{status}</Button>
          <Snackbar
            open={open}
            autoHideDuration={6000}
            onClose={handleSnackbar}
            message='Message Sent'
          />
        </Grid>
      </Grid>
    </form>
  )
}

export default Form