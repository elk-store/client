import { Grid } from '@material-ui/core';
import { useRouter } from 'next/router';
import React, { useState, ChangeEvent, useEffect } from 'react';
import styled from 'styled-components';

import { Container } from 'common/UI';
import Core from 'modules/Core';
import { Image, Content } from 'modules/Product';
import { IProduct, ProductService, Size } from 'services/Product';

const Wrapper = styled.div`
  background: var(--color-white);
`;

const Product: React.FC = () => {
  const router = useRouter();

  const [product, setProduct] = useState<IProduct>();
  const [selectedSize, setSelectedSize] = useState<Size>();
  const [selectedQuantity, setSelectedQuantity] = useState<number>();

  useEffect(() => {
    ProductService.findById(router.query.id as string).then(setProduct);
  }, [router]);

  const handleSelectedSizeChange = (event: ChangeEvent<{ value: unknown }>) => {
    setSelectedSize(event.target.value as Size);
  };

  const handleSelectedQuantityChange = (
    event: ChangeEvent<{ value: unknown }>
  ) => {
    setSelectedQuantity(event.target.value as number);
  };

  return (
    <Core>
      <Wrapper>
        <Container>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <Image name={product?.name} picture={product?.pictures?.[0]} />
            </Grid>
            <Grid item xs={12} md={6}>
              <Content
                product={product}
                handleSelectedQuantityChange={handleSelectedQuantityChange}
                handleSelectedSizeChange={handleSelectedSizeChange}
                selectedQuantity={selectedQuantity}
                selectedSize={selectedSize}
              />
            </Grid>
          </Grid>
        </Container>
      </Wrapper>
    </Core>
  );
};

export default Product;
