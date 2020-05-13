import { Grid } from '@material-ui/core'
import React from 'react'

import PaymentCard from '../../modules/Cards/PaymentCard'

const Payment: React.FC = () => {
  return (
    <Grid container spacing={2}>
      {[0, 1, 2].map((value) => (
        <Grid item xs={4} key={value}>
          <PaymentCard isDefault={value === 0} />
        </Grid>
      ))}
    </Grid>
  )
}

export default Payment
