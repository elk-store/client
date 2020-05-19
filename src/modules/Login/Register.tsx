import { TextField, Button } from '@material-ui/core'
import React from 'react'

import { Core } from './Core'

const Register: React.FC = () => {
  return (
    <Core>
      <TextField label="Personal name" style={{ marginBottom: '0.5rem' }} />

      <TextField
        label="Email"
        type="email"
        style={{ marginBottom: '0.5rem' }}
      />

      <TextField
        label="Password"
        type="password"
        style={{ marginBottom: '0.5rem' }}
      />

      <Button
        variant="contained"
        color="primary"
        style={{ margin: '0.5rem 0' }}
      >
        Register
      </Button>
    </Core>
  )
}

export { Register }
