import {
  Grid,
  Select,
  MenuItem,
  InputLabel,
  Input,
  Chip,
  Checkbox,
  ListItemText,
  TextField,
} from '@material-ui/core';
import Pagination from '@material-ui/lab/Pagination';
import axios from 'axios';
import { useRouter } from 'next/dist/client/router';
import React, { useEffect } from 'react';
import styled from 'styled-components';

import { API_URL } from 'common/constants';
import { Container, Text } from 'common/UI';
import { ProductCard } from 'common/UI/ProductCard';
import Core from 'modules/Core';
import { IProduct, ProductService, IFindAllResponse } from 'services/Product';

axios.defaults.baseURL = API_URL;

const Title = styled(Text)`
  margin-bottom: 0.9375rem;
  text-transform: capitalize;
`;

type ApiResponseMetadata = {
  totalItems: number;
  itemCount: number;
  itemsPerPage: number;
  totalPages: number;
  currentPage: number;
};

const Search: React.FC = () => {
  const router = useRouter();
  const { q } = router.query;
  const [minPrice, setMinPrice] = React.useState<number>(1);
  const [maxPrice, setMaxPrice] = React.useState<number>(1);
  const [tags, setTags] = React.useState<string[]>([]);
  const [sizes, setSizes] = React.useState<string[]>([]);
  const [tagSelect, setTagSelect] = React.useState<string[]>([]);
  const [sizeSelect, setSizeSelect] = React.useState<string[]>([]);
  const [results, setResults] = React.useState<IProduct[]>([]);
  const [meta, setMeta] = React.useState<ApiResponseMetadata>();
  const [page, setPage] = React.useState<number>(1);
  const [searchQuery, setSearchQuery] = React.useState<Record<string, any>>({});

  function setData(results: IFindAllResponse) {
    setResults(results.items);
    setMeta(results.meta);
    setPage(results.meta.currentPage);
  }

  function setFilters(results: IFindAllResponse) {
    const tags: string[] = [];
    const sizes: string[] = [];
    const range: number[] = [];
    results.items.map((item) => {
      tags.push(...item.tags);
      sizes.push(...item.sizes);
      range.push(item.price);
    });
    setTags(Array.from(new Set(tags).values()));
    setTagSelect(Array.from(new Set(tags).values()));
    setSizes(Array.from(new Set(sizes).values()));
    setSizeSelect(Array.from(new Set(sizes).values()));
    setMinPrice(Math.min(...range));
    setMaxPrice(Math.max(...range));
    setData(results);
  }

  const handleMinPriceChange = (
    event: React.ChangeEvent<{ value: unknown }>
  ) => {
    setSearchQuery({
      ...searchQuery,
      'min-price': event.target.value,
      name: q,
    });
    setMinPrice(event.target.value as number);
  };

  const handleMaxPriceChange = (
    event: React.ChangeEvent<{ value: unknown }>
  ) => {
    setSearchQuery({
      ...searchQuery,
      'min-price': event.target.value,
      name: q,
    });
    setMaxPrice(event.target.value as number);
  };

  const handleTagChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setTagSelect(event.target.value as string[]);
    const tags: string[] = event.target.value as string[];
    setSearchQuery({
      ...searchQuery,
      tags: tags.join(),
      name: q,
    });
  };

  const handleSizeChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setSizeSelect(event.target.value as string[]);
    const sizes: string[] = event.target.value as string[];
    setSearchQuery({
      ...searchQuery,
      sizes: sizes.join(),
      name: q,
    });
  };

  const handleSortChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setSearchQuery({ ...searchQuery, order: event.target.value, name: q });
  };

  const handlePageChange = (
    _event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setPage(value);
    setSearchQuery({ ...searchQuery, page: value, name: q });
  };

  useEffect(() => {
    ProductService.search({ name: q }).then(setFilters);
  }, [q]);

  useEffect(() => {
    ProductService.search(searchQuery).then(setData);
  }, [searchQuery]);

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
            <Grid item>{meta?.totalItems} results</Grid>
            <Grid item>
              <InputLabel id="sort-by-label">Sort by: </InputLabel>
              <Select fullWidth onChange={handleSortChange}>
                <MenuItem value={'price'}>Price: Low to High</MenuItem>
                <MenuItem value={'-price'}>Price: High to Low</MenuItem>
                <MenuItem value={'name'}>Name</MenuItem>
                <MenuItem value={'-updatedAt'}>Date</MenuItem>
              </Select>
            </Grid>
            <Grid item>
              <InputLabel id="tags-label">Tags</InputLabel>
              <Select
                labelId="tags-label"
                id="tags"
                multiple
                value={tagSelect}
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
                {tags.map((tag) => (
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
                value={sizeSelect}
                onChange={handleSizeChange}
                input={<Input />}
                renderValue={(selected) => (selected as string[]).join(', ')}
                fullWidth
              >
                {sizes.map((size) => (
                  <MenuItem key={size} value={size}>
                    <Checkbox checked={sizeSelect.indexOf(size) > -1} />
                    <ListItemText primary={size} />
                  </MenuItem>
                ))}
              </Select>
            </Grid>
            <Grid item>
              <InputLabel id="price-range-label">Price range</InputLabel>
              <TextField
                label="Min"
                type="number"
                value={minPrice}
                onChange={handleMinPriceChange}
              />
              <TextField
                label="Max"
                type="number"
                value={maxPrice}
                onChange={handleMaxPriceChange}
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
              {results.map((product) => (
                <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
                  <ProductCard product={product} />
                </Grid>
              ))}
            </Grid>
            <Grid item>
              <Pagination
                count={meta?.totalPages}
                page={page}
                onChange={handlePageChange}
                shape="rounded"
              />
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Core>
  );
};

export default Search;
