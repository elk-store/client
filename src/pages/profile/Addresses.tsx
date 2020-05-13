import { Grid } from '@material-ui/core'
import React from 'react'

import Address from '../../modules/Cards/Address'

const Addresses: React.FC = () => {
  return (
    <Grid container spacing={2}>
      {[0, 1, 2].map((value) => (
        <Grid item xs={4} key={value}>
          <Address default={value === 0} />
        </Grid>
      ))}
    </Grid>
  )
}

export default Addresses
