import { Grid, Container } from '@material-ui/core'
import React from 'react'

import Order from '../../modules/Cards/Order'

const OrderHistory: React.FC = () => {
  return (
    <Container>
      <Grid container spacing={2}>
        {[0, 1, 2].map((value) => (
          <Grid item xs key={value}>
            <Order key={value} />
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}

export default OrderHistory
