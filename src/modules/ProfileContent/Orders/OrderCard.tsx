import { Stepper, Step, StepLabel, Grid, Button } from '@material-ui/core'
import React from 'react'
import styled from 'styled-components'

import { Text } from 'common/UI'

const Card = styled.div`
  overflow: hidden;
  border-radius: 0.25rem;
  background: var(--color-white);
  padding: 0.75rem;

  transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);
`

const STEPS = [
  'Order received',
  'Payment accept',
  'On carriage',
  'Order delivered',
]

const BUTTONS = ['Exchange or Return', 'Track shipment', 'More information']

const OrderCard: React.FC<{ id: number; activeStep: 1 | 2 | 3 | 4 }> = ({
  id,
  activeStep,
}) => {
  return (
    <Card>
      <Text as="div" color="black-light" size="normal">
        Order #{id}
      </Text>

      <Stepper alternativeLabel activeStep={activeStep}>
        {STEPS.map((step) => (
          <Step key={step}>
            <StepLabel>{step}</StepLabel>
          </Step>
        ))}
      </Stepper>

      <Grid container spacing={2}>
        {BUTTONS.map((button) => (
          <Grid item xs={12} sm={4} key={button}>
            <Button fullWidth variant="contained" color="primary">
              {button}
            </Button>
          </Grid>
        ))}
      </Grid>
    </Card>
  )
}

export { OrderCard }
