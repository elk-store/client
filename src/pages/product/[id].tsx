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
  const [color, setColor] = React.useState(1);
  const [size, setSize] = React.useState(2);
  const [quantity, setQuantity] = React.useState(1);
  const [name, _setName] = React.useState('mochila');

  const handleColorChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setColor(event.target.value as number);
  };

  const handleSizeChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setSize(event.target.value as number);
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
                color={color}
                size={size}
                quantity={quantity}
                name={name}
                handleColorChange={handleColorChange}
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
