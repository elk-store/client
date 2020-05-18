import { Grid, Paper, makeStyles, Typography, Button } from '@material-ui/core'
import React from 'react'

import Core from 'modules/Core'

const useStyles = makeStyles({
  img: {
    height: 500,
    width: '100%',
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    flexDirection: 'column',
  },
  info: {
    height: 500,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
})

const Post: React.FC = () => {
  const classes = useStyles()

  return (
    <Core>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <Paper className={classes.img}>Product Images go here</Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.info}>
            <Typography component="h5" variant="h5">
              Product Name
            </Typography>
            <Typography>Live From Space</Typography>
            <Typography>Live From Space</Typography>
            <Button variant="contained" color="primary">
              Add to cart
            </Button>
          </Paper>
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.img}>Comments and reviews</Paper>
        </Grid>
      </Grid>
    </Core>
  )
}

export default Post
