import {
  Grid,
  Select,
  MenuItem,
  Slider,
  InputLabel,
  Input,
  Chip,
  Checkbox,
  ListItemText,
} from '@material-ui/core';
import Pagination from '@material-ui/lab/Pagination';
import { useRouter } from 'next/dist/client/router';
import React from 'react';
import styled from 'styled-components';

import { Container, Text } from 'common/UI';
import { ProductCard } from 'common/UI/ProductCard';
import Core from 'modules/Core';

const Title = styled(Text)`
  margin-bottom: 0.9375rem;
  text-transform: capitalize;
`;

const PRODUCTS = [1, 2, 3, 4, 5, 6, 7, 8];

const tagSelect = ['Summer', 'Black', 'Clothing'];

const sizesSelect = ['S', 'M', 'L', 'XL'];

const Search: React.FC = () => {
  const router = useRouter();
  const { q } = router.query;
  const [range, setRange] = React.useState<number[]>([0, 100]);
  const [tags, setTags] = React.useState<string[]>([]);
  const [sizes, setSizes] = React.useState<string[]>([]);
  const [results, _setResults] = React.useState<number>(40);
  const [pages, _setPages] = React.useState<number>(Math.ceil(results / 8));

  const handleRangeChange = (_event: unknown, newRange: number | number[]) => {
    setRange(newRange as number[]);
  };

  const handleTagChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setTags(event.target.value as string[]);
  };

  const handleSizeChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setSizes(event.target.value as string[]);
  };

  return (
    <Core>
      <Container>
        <Grid container spacing={2}>
          <Grid container item xs={4} direction="column" spacing={3}>
            <Grid item>
              <Title as="h3" color="black" size="heading" weight="medium">
                {q}
              </Title>
            </Grid>
            <Grid item>{results} results</Grid>
            <Grid item>
              <InputLabel id="sort-by-label">Sort by: </InputLabel>
              <Select fullWidth>
                <MenuItem value={10}>Price: Low to High</MenuItem>
                <MenuItem value={20}>Price: High to Low</MenuItem>
                <MenuItem value={30}>Name</MenuItem>
                <MenuItem value={40}>Date</MenuItem>
              </Select>
            </Grid>
            <Grid item>
              <InputLabel id="tags-label">Tags</InputLabel>
              <Select
                labelId="tags-label"
                id="tags"
                multiple
                value={tags}
                onChange={handleTagChange}
                input={<Input id="select-tags-chip" />}
                renderValue={(selected) => (
                  <Grid>
                    {(selected as string[]).map((value) => (
                      <Chip key={value} label={value} />
                    ))}
                  </Grid>
                )}
                fullWidth
              >
                {tagSelect.map((tag) => (
                  <MenuItem key={tag} value={tag}>
                    {tag}
                  </MenuItem>
                ))}
              </Select>
            </Grid>
            <Grid item>
              <InputLabel id="sizes-label">Sizes</InputLabel>
              <Select
                labelId="sizes-label"
                id="sizes"
                multiple
                value={sizes}
                onChange={handleSizeChange}
                input={<Input />}
                renderValue={(selected) => (selected as string[]).join(', ')}
                fullWidth
              >
                {sizesSelect.map((size) => (
                  <MenuItem key={size} value={size}>
                    <Checkbox checked={sizes.indexOf(size) > -1} />
                    <ListItemText primary={size} />
                  </MenuItem>
                ))}
              </Select>
            </Grid>
            <Grid item>
              <InputLabel id="price-range-label">Price range</InputLabel>
              <Slider
                value={range}
                onChange={handleRangeChange}
                valueLabelDisplay="auto"
              />
            </Grid>
          </Grid>
          <Grid
            container
            item
            xs={8}
            spacing={2}
            direction="column"
            alignItems="center"
          >
            <Grid item container spacing={3}>
              {PRODUCTS.map((product) => (
                <Grid item xs={12} sm={6} md={4} lg={3} key={product}>
                  <ProductCard id={product} />
                </Grid>
              ))}
            </Grid>
            <Grid item>
              <Pagination count={pages} shape="rounded" />
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Core>
  );
};

export default Search;
