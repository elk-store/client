import { Grid } from '@material-ui/core';
import React from 'react';

import { OrderCard } from './OrderCard';

const ORDERS: Array<{ id: number; step: 1 | 2 | 3 | 4 }> = [
  { id: 1, step: 1 },
  { id: 2, step: 2 },
  { id: 3, step: 3 },
  { id: 4, step: 4 },
];

const Orders: React.FC = () => {
  return (
    <Grid container spacing={2}>
      {ORDERS.map((order) => (
        <Grid item xs={12} key={order.id}>
          <OrderCard id={order.id} activeStep={order.step} />
        </Grid>
      ))}
    </Grid>
  );
};

export { Orders };
