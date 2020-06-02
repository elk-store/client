import { Grid } from '@material-ui/core';
import React from 'react';

import { PaymentCard } from './PaymentCard';

const PAYMENTS = [1, 2, 3, 4];

const Payment: React.FC = () => {
  return (
    <Grid container spacing={2}>
      {PAYMENTS.map((value) => (
        <Grid item xs={12} sm={6} key={value}>
          <PaymentCard />
        </Grid>
      ))}
    </Grid>
  );
};

export { Payment };
