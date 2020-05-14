import { Grid, Container } from '@material-ui/core'
import React from 'react'

import PaymentCard from '../../modules/Cards/PaymentCard'

const Payment: React.FC = () => {
  return (
    <Container>
      <Grid container spacing={2}>
        {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((value) => (
          <Grid item xs key={value}>
            <PaymentCard isDefault={value === 0} />
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}

export default Payment
