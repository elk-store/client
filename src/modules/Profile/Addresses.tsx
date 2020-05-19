import { Grid, Container } from '@material-ui/core'
import React from 'react'

import Address from '../Cards/Address'

const Addresses: React.FC = () => {
  return (
    <Container>
      <Grid container spacing={2}>
        {[0, 1, 2].map((value) => (
          <Grid item xs key={value}>
            <Address isDefault={value === 0} />
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}

export default Addresses
