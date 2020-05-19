import { Grid, Container } from '@material-ui/core'
import React from 'react'

import PaymentCard from '../Cards/PaymentCard'

const Payment: React.FC = () => {
  return (
    <Container>
      <Grid container spacing={2}>
        {[0, 1, 2].map((value) => (
          <Grid item xs key={value}>
            <PaymentCard isDefault={value === 0} />
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}

export default Payment
