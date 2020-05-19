import { CardActions, Tabs, Tab } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import React from 'react'
import styled from 'styled-components'

import Addresses from './Addresses'
import { Header } from './Header'
import OrderHistory from './OrderHistory'
import Payment from './Payment'
import TabPanel from './Tab'
import UserForm from 'modules/Forms/User'

const Card = styled.div`
  overflow: hidden;
  border-radius: 0.25rem;
  background: var(--color-white);

  transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);
`

const useStyles = makeStyles({
  content: {
    display: 'flex',
    flexDirection: 'row',
  },
  actions: {
    display: 'flex',
    flexGrow: 1,
    alignItems: 'center',
  },
})

const ProfileContent: React.FC = () => {
  const classes = useStyles()
  const [value, setValue] = React.useState(0)

  const handleChange = (_event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue)
  }

  return (
    <Card>
      <Header />

      <Tabs value={value} onChange={handleChange} variant="fullWidth">
        <Tab label="Settings" />
        <Tab label="Orders" />
        <Tab label="Addresses" />
        <Tab label="Payment" />
      </Tabs>

      <CardActions className={classes.actions}>
        <TabPanel value={value} index={0}>
          <UserForm />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <OrderHistory />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <Addresses />
        </TabPanel>
        <TabPanel value={value} index={3}>
          <Payment />
        </TabPanel>
      </CardActions>
    </Card>
  )
}

export { ProfileContent }
