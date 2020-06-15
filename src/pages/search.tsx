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
import { useRouter } from 'next/dist/client/router';
import React from 'react';

import { Container } from 'common/UI';
import { ProductCard } from 'common/UI/ProductCard';
import Core from 'modules/Core';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const PRODUCTS = [1, 2, 3, 4, 5, 6, 7, 8];

const tagSelect = ['Summer', 'Black', 'Clothing'];

const sizesSelect = ['S', 'M', 'L', 'XL'];

const Search: React.FC = () => {
  const router = useRouter();
  const { q } = router.query;
  const [range, setRange] = React.useState<number[]>([0, 100]);
  const [tags, setTags] = React.useState<string[]>([]);
  const [sizes, setSizes] = React.useState<string[]>([]);

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
          <Grid xs={4}>
            <div>{q}</div>
            <div>300 results</div>
            <div>
              <InputLabel id="sort-by-label">Sort by: </InputLabel>
              <Select>
                <MenuItem value={10}>Price: Low to High</MenuItem>
                <MenuItem value={20}>Price: High to Low</MenuItem>
                <MenuItem value={30}>Name</MenuItem>
                <MenuItem value={40}>Date</MenuItem>
              </Select>
            </div>
            <div>
              <InputLabel id="tags-label">Tags</InputLabel>
              <Select
                labelId="tags-label"
                id="tags"
                multiple
                value={tags}
                onChange={handleTagChange}
                input={<Input id="select-tags-chip" />}
                renderValue={(selected) => (
                  <div>
                    {(selected as string[]).map((value) => (
                      <Chip key={value} label={value} />
                    ))}
                  </div>
                )}
                MenuProps={MenuProps}
              >
                {tagSelect.map((tag) => (
                  <MenuItem key={tag} value={tag}>
                    {tag}
                  </MenuItem>
                ))}
              </Select>
              <InputLabel id="sizes-label">Sizes</InputLabel>
              <Select
                labelId="sizes-label"
                id="sizes"
                multiple
                value={sizes}
                onChange={handleSizeChange}
                input={<Input />}
                renderValue={(selected) => (selected as string[]).join(', ')}
                MenuProps={MenuProps}
              >
                {sizesSelect.map((size) => (
                  <MenuItem key={size} value={size}>
                    <Checkbox checked={sizes.indexOf(size) > -1} />
                    <ListItemText primary={size} />
                  </MenuItem>
                ))}
              </Select>
              <InputLabel id="price-range-label">Price range</InputLabel>
              <Slider
                value={range}
                onChange={handleRangeChange}
                valueLabelDisplay="auto"
              />
            </div>
          </Grid>
          <Grid xs={8}>
            {PRODUCTS.map((product) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={product}>
                <ProductCard id={product} />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Container>
    </Core>
  );
};

export default Search;
