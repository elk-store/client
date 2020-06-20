import { Grid } from '@material-ui/core';
import axios from 'axios';
import React, { useEffect } from 'react';
import styled from 'styled-components';

import { API_URL } from 'common/constants';
import { Container as BaseContainer, Text } from 'common/UI';
import { ProductCard } from 'common/UI/ProductCard';

axios.defaults.baseURL = API_URL;

const Container = styled(BaseContainer)`
  margin-top: 1.5625rem;
  margin-bottom: 1.5625rem;
`;

const Title = styled(Text)`
  padding-bottom: 1.5rem;
`;

type ProductCardProps = {
  id: number;
  pictures: string[];
  name: string;
  price: number;
};

const Products: React.FC = () => {
  const [products, setProducts] = React.useState<ProductCardProps[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get<ProductCardProps[]>(`/products`);
      setProducts(response.data);
    };
    fetchData();
  }, []);

  return (
    <Container>
      <Title as="h2" color="black" size="title">
        Top Products
      </Title>

      <Grid container spacing={2}>
        {products.map((product) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
            <ProductCard
              id={product.id}
              name={product.name}
              picture={product.pictures[0]}
              price={product.price}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export { Products };
