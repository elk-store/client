import { Grid } from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import { Container as BaseContainer, Text } from 'common/UI';
import { ProductCard } from 'common/UI/ProductCard';
import { IProduct, ProductService } from 'services/Product';

const Container = styled(BaseContainer)`
  margin-top: 1.5625rem;
  margin-bottom: 1.5625rem;
`;

const Title = styled(Text)`
  padding-bottom: 1.5rem;
`;

const Products = () => {
  const [products, setProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    ProductService.findAll().then(setProducts);
  }, []);

  return (
    <Container>
      <Title as="h2" color="black" size="title">
        Top Products
      </Title>

      <Grid container spacing={2}>
        {products?.map((product) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export { Products };
