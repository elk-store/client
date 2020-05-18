import { Grid } from '@material-ui/core'
import React from 'react'
import styled from 'styled-components'

import logoSrc from 'common/assets/logo.svg'

const Logo = styled.img`
  height: 200px;
  margin-bottom: 1rem;
`

const Core: React.FC = ({ children }) => {
  return (
    <>
      <Grid container style={{ height: '100vh' }}>
        <Grid
          item
          xs={12}
          sm={7}
          md={5}
          style={{
            textAlign: 'center',
            justifyContent: 'center',
            alignItems: 'center',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <Logo src={logoSrc} />
          {children}
        </Grid>
        <Grid
          item
          sm={5}
          md={7}
          style={{ background: 'var(--color-primary)' }}
        />
      </Grid>
    </>
  )
}

export { Core }
