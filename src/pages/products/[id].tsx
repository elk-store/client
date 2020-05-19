import {
  Grid,
  Paper,
  makeStyles,
  Button,
  Select,
  MenuItem,
  Typography,
} from '@material-ui/core'
import React from 'react'

import Core from 'modules/Core'

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
})

const Post: React.FC = () => {
  const classes = useStyles()
  const [color, setColor] = React.useState(1)
  const [size, setSize] = React.useState(2)
  const [quantity, setQuantity] = React.useState(1)

  const handleColorChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setColor(event.target.value as number)
  }

  const handleSizeChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setSize(event.target.value as number)
  }

  const handleQuantityChange = (
    event: React.ChangeEvent<{ value: unknown }>
  ) => {
    setQuantity(event.target.value as number)
  }

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
            <Grid item xs={12} sm={6}>
              <Select value={size} onChange={handleSizeChange} fullWidth>
                <MenuItem value={1}>Small</MenuItem>
                <MenuItem value={2}>Medium</MenuItem>
                <MenuItem value={3}>Large</MenuItem>
              </Select>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Select
                value={quantity}
                onChange={handleQuantityChange}
                fullWidth
              >
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
        </Grid>
      </Grid>
    </Core>
  )
}

export default Post
