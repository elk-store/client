import { Grid } from '@material-ui/core';
import React from 'react';
import styled from 'styled-components';

import { Container } from 'common/UI';
import Core from 'modules/Core';
import { Image, Content } from 'modules/Product';

const Wrapper = styled.div`
  background: var(--color-white);
  padding: 3rem 0;
`;

const Product: React.FC = () => {
  const [size, setSize] = React.useState(['S', 'M', 'X']);
  const [quantity, setQuantity] = React.useState(1);
  const [name, _setName] = React.useState('bag');
  const [price, _setPrice] = React.useState(1);
  const [code, _setCode] = React.useState('code');
  const [tag, _setTag] = React.useState(['bonito', 'estiloso', 'pequeno']);
  const [description, _setDescription] = React.useState('description');

  const handleSizeChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setSize(event.target.value as string[]);
  };

  const handleQuantityChange = (
    event: React.ChangeEvent<{ value: unknown }>
  ) => {
    setQuantity(event.target.value as number);
  };

  return (
    <Core>
      <Wrapper>
        <Container>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <Image />
            </Grid>
            <Grid item xs={12} md={6}>
              <Content
                size={size}
                quantity={quantity}
                name={name}
                price={price}
                code={code}
                tag={tag}
                description={description}
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
