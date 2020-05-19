import { Typography, Grid, Select, MenuItem, Button } from '@material-ui/core'
import React, { ChangeEvent } from 'react'

const Content: React.FC<{
  color: number
  size: number
  quantity: number
  handleColorChange: (event: ChangeEvent<{ value: unknown }>) => void
  handleSizeChange: (event: ChangeEvent<{ value: unknown }>) => void
  handleQuantityChange: (event: ChangeEvent<{ value: unknown }>) => void
}> = ({
  color,
  quantity,
  size,
  handleColorChange,
  handleQuantityChange,
  handleSizeChange,
}) => {
  return (
    <>
      <Typography variant="h2">Product Name</Typography>
      <Typography> Price: $25 </Typography>
      <Typography>Tags: Black, Men, Accessories</Typography>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio
      aperiam debitis ipsa veniam eos quas excepturi quae? Recusandae distinctio
      nihil quia quis, eaque aspernatur perferendis repudiandae adipisci labore,
      impedit beatae!
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
  )
}

export { Content }
