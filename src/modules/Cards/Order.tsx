import {
  Card,
  CardContent,
  Stepper,
  Step,
  StepLabel,
  Typography,
  CardActions,
  Button,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import React from 'react'

const useStyles = makeStyles({
  root: {
    height: '100%',
  },
  title: {
    fontSize: 14,
  },
  actions: {
    display: 'flex',
    justifyContent: 'space-around',
  },
})

const Order: React.FC = () => {
  const classes = useStyles()
  const [activeStep, _setActiveStep] = React.useState(1)
  const steps = ['Payment confirmed', 'Order shipped', 'Order delivered']

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          Order ###.###.###
        </Typography>
        <Stepper alternativeLabel activeStep={activeStep}>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
      </CardContent>
      <CardActions className={classes.actions}>
        <Button variant="contained" size="small" color="primary">
          Change
        </Button>
        <Button variant="contained" size="small" color="primary">
          Shippment
        </Button>
        <Button variant="contained" size="small" color="primary">
          More info
        </Button>
      </CardActions>
    </Card>
  )
}

export default Order
