import { TextField, FormControl } from '@material-ui/core'
import Button from '@material-ui/core/Button'
import FaceIcon from '@material-ui/icons/Face'
import React from 'react'
import SplitPane from 'react-split-pane'
import styled from 'styled-components'

import logoSrc from 'common/assets/logo.svg'
import { Container as BaseContainer } from 'common/UI'

const Banner = styled.div`
  background-color: lightblue;
  padding: 100%;
`

const Container = styled(BaseContainer)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80%;
  width: 100%;
  padding: 0;
  margin: 0;
`

const Row = styled.div`
  width: auto;
  text-align: center;
`

const Logo = styled.img`
  height: 300px;
`

const Login: React.FC = () => {
  return (
    <SplitPane split="vertical" minSize="30%">
      <Container>
        <Row>
          <Logo src={logoSrc} />
          <FormControl margin="dense">
            <TextField id="username" label="Username" />
            <TextField id="password" label="Password" />

            <Button variant="contained" color="primary">
              Login
            </Button>
            <Button variant="text">Esqueci minha senha</Button>

            <Button variant="contained" startIcon={<FaceIcon />}>
              Entrar com Google
            </Button>
          </FormControl>
        </Row>
      </Container>
      <Banner />
    </SplitPane>
  )
}

export { Login }
