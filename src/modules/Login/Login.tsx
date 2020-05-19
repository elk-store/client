import { TextField, Button } from '@material-ui/core'
import FaceIcon from '@material-ui/icons/Face'
import React from 'react'
import styled from 'styled-components'

import { Core } from './Core'

const ForgotPassword = styled.a`
  text-align: end;
  color: var(--color-primary);
  cursor: pointer;

  margin: 0.5rem 0;
`

const Login: React.FC = () => {
  return (
    <Core>
      <TextField label="Email" style={{ marginBottom: '0.5rem' }} />
      <TextField
        label="Password"
        type="password"
        style={{ marginTop: '0.5rem' }}
      />

      <ForgotPassword href="/forget-password">
        I forgot my password
      </ForgotPassword>

      <Button
        variant="contained"
        color="primary"
        style={{ margin: '0.5rem 0' }}
      >
        Login
      </Button>

      <Button
        variant="contained"
        startIcon={<FaceIcon />}
        style={{ margin: '0.5rem 0' }}
      >
        Login with Google
      </Button>
    </Core>
  )
}

export { Login }
