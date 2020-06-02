import { Grid } from '@material-ui/core';
import React from 'react';

import { AddressCard } from './AddressCard';

const ADDRESSES = [1, 2, 3, 4];

const Addresses: React.FC = () => {
  return (
    <Grid container spacing={2}>
      {ADDRESSES.map((value) => (
        <Grid item xs={12} sm={6} key={value}>
          <AddressCard />
        </Grid>
      ))}
    </Grid>
  );
};

export { Addresses };
