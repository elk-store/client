import { Grid } from '@material-ui/core'
import React from 'react'

import Order from '../../modules/Cards/Order'

const OrderHistory: React.FC = () => {
  return (
    <Grid container spacing={2}>
      {[0, 1, 2].map((value) => (
        <Grid item xs={4} key={value}>
          <Order key={value} />
        </Grid>
      ))}
    </Grid>
  )
}

export default OrderHistory
