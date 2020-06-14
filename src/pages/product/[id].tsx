import {
  Grid,
  Paper,
  makeStyles,
  Select,
  MenuItem,
  Typography,
} from '@material-ui/core';
import React from 'react';

import Core from 'modules/Core';
import { Content } from 'modules/Product';

const useStyles = makeStyles({
  content: {
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
  },
  img: {
    maxHeight: 500,
  },
  info: {
    height: 500,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  buttonWrapper: {
    display: 'flex',
    padding: '2rem',
  },
});

const Post: React.FC = () => {
  const classes = useStyles();
  const [color, setColor] = React.useState(1);
  const [size, setSize] = React.useState(2);
  const [quantity, setQuantity] = React.useState(1);
  const [name, _setName] = React.useState('bag');
  const [price, _setPrice] = React.useState(1);
  const [code, _setCode] = React.useState('code');

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
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <Paper className={classes.content}>
            <img
              className={classes.img}
              src="https://embryo-react.theironnetwork.org/static/media/a-1-a.57b3779d.jpg"
              alt="Bag"
            />
          </Paper>
        </Grid>
        <Grid item xs={6} className={classes.info}>
          <Typography variant="h2">Product Name</Typography>
          <Typography> Price: $25 </Typography>
          <Typography>Tags: Black, Men, Accessories</Typography>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio
          aperiam debitis ipsa veniam eos quas excepturi quae? Recusandae
          distinctio nihil quia quis, eaque aspernatur perferendis repudiandae
          adipisci labore, impedit beatae!
          <Grid container spacing={1}>
            <Grid item xs={12} sm={6}>
              <Select value={color} onChange={handleColorChange} fullWidth>
                <MenuItem value={1}>Black</MenuItem>
                <MenuItem value={2}>Red</MenuItem>
                <MenuItem value={3}>Blue</MenuItem>
              </Select>
            </Grid>
            <Grid item xs={12} md={6}>
              <Content
                color={color}
                size={size}
                quantity={quantity}
                name={name}
                price={price}
                code={code}
                handleColorChange={handleColorChange}
                handleQuantityChange={handleQuantityChange}
                handleSizeChange={handleSizeChange}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Core>
  );
};

export default Post;
