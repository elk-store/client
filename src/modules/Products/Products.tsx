import { Grid } from '@material-ui/core';
import React from 'react';
import styled from 'styled-components';

import { Container as BaseContainer, Text } from 'common/UI';
import { ProductCard } from 'common/UI/ProductCard';

const Container = styled(BaseContainer)`
  margin-top: 1.5625rem;
  margin-bottom: 1.5625rem;
`;

const Title = styled(Text)`
  padding-bottom: 1.5rem;
`;

const PRODUCTS = [1, 2, 3, 4, 5, 6, 7, 8];

const Products: React.FC = () => {
  return (
    <Container>
      <Title as="h2" color="black" size="title">
        Top Products
      </Title>

      <Grid container spacing={2}>
        {PRODUCTS.map((product) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={product}>
            <ProductCard />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export { Products };
