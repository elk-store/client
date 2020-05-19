import { TextField, Button } from '@material-ui/core'
import FaceIcon from '@material-ui/icons/Face'
import React from 'react'
import styled from 'styled-components'

import { Core } from './Core'

const ForgotPassword = styled.div`
  text-align: end;
  color: var(--color-primary);
  cursor: pointer;

  margin: 0.5rem 0;
`

const Login: React.FC = () => {
  return (
    <Core>
      <TextField
        id="username"
        label="Username"
        style={{ marginBottom: '0.5rem' }}
      />
      <TextField
        id="password"
        label="Password"
        style={{ marginTop: '0.5rem' }}
      />

      <ForgotPassword>Esqueci minha senha</ForgotPassword>

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
        Entrar com Google
      </Button>
    </Core>
  )
}

export { Login }
