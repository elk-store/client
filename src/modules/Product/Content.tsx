import {
  Grid,
  Select,
  MenuItem,
  Button,
  FormControl,
  InputLabel,
  TextField,
} from '@material-ui/core';
import React, { ChangeEvent } from 'react';
import styled from 'styled-components';

import { Text } from 'common/UI';
import { IProduct, Size } from 'services/Product';

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

type ContentProps = {
  product?: IProduct;
  selectedSize?: Size;
  selectedQuantity?: number;
  handleSelectedSizeChange: (event: ChangeEvent<{ value: unknown }>) => void;
  handleSelectedQuantityChange: (
    event: ChangeEvent<{ value: unknown }>
  ) => void;
};

const Content = ({
  product,
  handleSelectedQuantityChange,
  handleSelectedSizeChange,
  selectedQuantity,
  selectedSize,
}: ContentProps) => {
  return (
    <>
      <Title as="h3" color="black" size="title" weight="medium">
        {product?.name}
      </Title>
      <Price as="h4" color="primary" size="heading" weight="medium">
        $ {product?.price}
      </Price>

      <List>
        <ListItem>
          <Text as="span" color="black" size="normal" weight="medium">
            Availability:
          </Text>

          <ListItemDescription as="span" color="black" size="normal">
            {product?.quantity ? 'In stocks' : 'Out of stocks'}
          </ListItemDescription>
        </ListItem>

        <ListItem>
          <Text as="span" color="black" size="normal" weight="medium">
            Tags:
          </Text>

          {product?.tags?.map((tag, index) => (
            <ListItemDescription
              key={index}
              as="span"
              color="black"
              size="normal"
            >
              {tag}
            </ListItemDescription>
          ))}
        </ListItem>
      </List>

      <Description color="black-light">{product?.description}</Description>

      <Grid container spacing={1}>
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <InputLabel>Sizes</InputLabel>
            <Select
              label="Sizes"
              value={selectedSize}
              onChange={handleSelectedSizeChange}
            >
              {product?.sizes?.map((size, index) => (
                <MenuItem key={index} value={index}>
                  {size}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            label="Quantity"
            type="number"
            value={selectedQuantity}
            onChange={handleSelectedQuantityChange}
          />
        </Grid>
      </Grid>

      <Grid container spacing={1} style={{ marginTop: '0.75rem' }}>
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
