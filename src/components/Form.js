import { useState } from 'react'
import Button from '@mui/material/Button'
import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'
import Snackbar from '@mui/material/Snackbar'
import TextField from '@mui/material/TextField'

const Airtable = require('airtable')
const base = new Airtable({apiKey: 'keyxsPDSxeCVyn00D'}).base('appAlpFTjJfNWcSEw')

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
    <div>
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleSnackbar}
        message='Message Sent'
      />
      <form onSubmit={handleSubmit}>
        <TextField
          id='name'
          label='Required'
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          id='email'
          label='Required'
          required
          type='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          id='number'
          label='Required'
          required
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
        <Select
          id='reason'
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
        <TextField
          id='message'
          label='Required'
          multiline
          required
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <Button type='submit' variant='contained'>{status}</Button>
      </form>
    </div>
  )
}

export default Form