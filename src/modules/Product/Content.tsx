import { Grid, Select, MenuItem, Button } from '@material-ui/core';
import React, { ChangeEvent } from 'react';
import styled from 'styled-components';

import { Text } from 'common/UI';

type ContentProps = {
  color: number;
  size: number;
  quantity: number;
  name: string;
  handleColorChange: (event: ChangeEvent<{ value: unknown }>) => void;
  handleSizeChange: (event: ChangeEvent<{ value: unknown }>) => void;
  handleQuantityChange: (event: ChangeEvent<{ value: unknown }>) => void;
};

const Title = styled(Text)`
  margin-bottom: 0.9375rem;
  text-transform: capitalize;
`;

const Price = styled(Text)`
  margin-bottom: 1rem;
`;

const List = styled.ul`
  margin-bottom: 1.25rem;
`;

const ListItem = styled.li`
  margin-bottom: 0.625rem;
`;

const ListItemDescription = styled(Text)`
  margin-left: 0.3125rem;
`;

const Description = styled(Text)`
  padding-bottom: 1.25rem;
`;

const Content: React.FC<ContentProps> = ({
  color,
  quantity,
  size,
  name,
  handleColorChange,
  handleQuantityChange,
  handleSizeChange,
}) => {
  return (
    <>
      <Title as="h3" color="black" size="title" weight="medium">
        {name}
      </Title>
      <Price as="h4" color="primary" size="heading" weight="medium">
        $ 25.75
      </Price>
      <List>
        <ListItem>
          <Text as="span" color="black" size="normal" weight="medium">
            Availability:
          </Text>
          <ListItemDescription as="span" color="black" size="normal">
            In Stocks
          </ListItemDescription>
        </ListItem>
        <ListItem>
          <Text as="span" color="black" size="normal" weight="medium">
            Product Code:
          </Text>
          <ListItemDescription as="span" color="black" size="normal">
            #EM1205
          </ListItemDescription>
        </ListItem>
        <ListItem>
          <Text as="span" color="black" size="normal" weight="medium">
            Tags:
          </Text>
          <ListItemDescription as="span" color="black" size="normal">
            Black
          </ListItemDescription>
          <ListItemDescription as="span" color="black" size="normal">
            Summer
          </ListItemDescription>
        </ListItem>
      </List>

      <Description color="black-light">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio
        aperiam debitis ipsa veniam eos quas excepturi quae? Recusandae
        distinctio nihil quia quis, eaque aspernatur perferendis repudiandae
        adipisci labore, impedit beatae!
      </Description>

      <Grid container spacing={1}>
        <Grid item xs={12} sm={6}>
          <Select value={color} onChange={handleColorChange} fullWidth>
            <MenuItem value={1}>Black</MenuItem>
            <MenuItem value={2}>Red</MenuItem>
            <MenuItem value={3}>Blue</MenuItem>
          </Select>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Select value={size} onChange={handleSizeChange} fullWidth>
            <MenuItem value={1}>Small</MenuItem>
            <MenuItem value={2}>Medium</MenuItem>
            <MenuItem value={3}>Large</MenuItem>
          </Select>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Select value={quantity} onChange={handleQuantityChange} fullWidth>
            <MenuItem value={1}>1</MenuItem>
            <MenuItem value={2}>2</MenuItem>
            <MenuItem value={3}>3</MenuItem>
          </Select>
        </Grid>
      </Grid>
      <Grid container spacing={1}>
        <Grid item>
          <Button variant="contained" color="primary">
            Add to cart
          </Button>
        </Grid>
        <Grid item>
          <Button variant="contained" color="secondary">
            Buy now
          </Button>
        </Grid>
      </Grid>
    </>
  );
};

export { Content };
