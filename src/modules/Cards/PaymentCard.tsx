import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import DeleteIcon from '@material-ui/icons/Delete'
import React from 'react'

import { CardProps } from './card.model'

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    height: '100%',
  },
  title: {
    fontSize: 14,
  },
  deleteButton: {
    backgroundColor: 'red',
    color: 'white',
  },
  actions: {
    display: 'flex',
    justifyContent: 'space-between',
  },
})

const PaymentCard: React.FC<CardProps> = (props) => {
  const classes = useStyles()

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} gutterBottom>
          Order ###.###.###
        </Typography>
        {props.default ? <Typography>Default</Typography> : ''}
      </CardContent>
      <CardActions className={classes.actions}>
        <Button variant="contained" size="small" color="primary">
          Change
        </Button>
        <Button
          variant="contained"
          size="small"
          className={classes.deleteButton}
          startIcon={<DeleteIcon />}
        >
          Delete
        </Button>
        <Button variant="contained" size="small" color="primary">
          Set as default
        </Button>
      </CardActions>
    </Card>
  )
}

export default PaymentCard
