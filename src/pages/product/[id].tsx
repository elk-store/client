import { Grid } from '@material-ui/core';
import { useRouter } from 'next/router';
import React, { useState, ChangeEvent, useEffect } from 'react';
import styled from 'styled-components';

import { Container } from 'common/UI';
import Core from 'modules/Core';
import { Image, Content } from 'modules/Product';
import { IProduct, ProductService } from 'services/Product';

const Wrapper = styled.div`
  background: var(--color-white);
`;

const Product: React.FC = () => {
  const router = useRouter();

  const [product, setProduct] = useState<IProduct>();
  const [_size, setSize] = useState(['']);
  const [_quantity, setQuantity] = useState(1);

  useEffect(() => {
    ProductService.findById(router.query.id as string).then(setProduct);
  }, [router]);

  const handleSizeChange = (event: ChangeEvent<{ value: unknown }>) => {
    setSize(event.target.value as string[]);
  };

  const handleQuantityChange = (event: ChangeEvent<{ value: unknown }>) => {
    setQuantity(event.target.value as number);
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
                handleQuantityChange={handleQuantityChange}
                handleSizeChange={handleSizeChange}
              />
            </Grid>
          </Grid>
        </Container>
      </Wrapper>
    </Core>
  );
};

export default Product;
