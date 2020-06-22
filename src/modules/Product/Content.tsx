import { Grid, Select, MenuItem, Button, InputBase } from '@material-ui/core';
import React, { ChangeEvent } from 'react';
import styled from 'styled-components';

import { Text } from 'common/UI';

type ContentProps = {
  sizes: string[] | undefined;
  quantity: number | undefined;
  name: string | undefined;
  price: number | undefined;
  code: string | undefined;
  tags: string[] | undefined;
  description: string | undefined;
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

const Input = styled(InputBase)`
  color: inherit !important;

  input {
    padding: 8px;
    transition: width 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    width: 100%;
  }
`;

const Content: React.FC<ContentProps> = ({
  quantity,
  sizes,
  name,
  price,
  code,
  tags,
  description,
  handleQuantityChange,
}) => {
  return (
    <>
      <Title as="h3" color="black" size="title" weight="medium">
        {name}
      </Title>
      <Price as="h4" color="primary" size="heading" weight="medium">
        {price}
      </Price>
      <List>
        <ListItem>
          <Text as="span" color="black" size="normal" weight="medium">
            Availability:
          </Text>

          <ListItemDescription as="span" color="black" size="normal">
            {quantity ? 'In stocks' : 'Out of stocks'}
          </ListItemDescription>
        </ListItem>
        <ListItem>
          <Text as="span" color="black" size="normal" weight="medium">
            Product Code:
          </Text>
          <ListItemDescription as="span" color="black" size="normal">
            {code}
          </ListItemDescription>
        </ListItem>
        <ListItem>
          <Text as="span" color="black" size="normal" weight="medium">
            tags:
          </Text>
          {tags?.map((tag, index) => (
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

      <Description color="black-light">{description}</Description>

      <Grid container spacing={1}>
        <Grid item xs={12} sm={6}>
          <Select fullWidth>
            {sizes?.map((size, index) => (
              <MenuItem key={index} value={index}>
                {size}
              </MenuItem>
            ))}
          </Select>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Input
            defaultValue={quantity}
            onChange={handleQuantityChange}
            type="number"
            placeholder="quantity"
            inputProps={{ 'aria-label': 'quantity' }}
          />
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
