import { Card, CardActionArea, CardActions, Tabs, Tab } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import React from 'react'

import Addresses from './Addresses'
import Header from './Header'
import OrderHistory from './OrderHistory'
import Payment from './Payment'
import TabPanel from './Tab'
import UserForm from 'modules/Forms/User'

const useStyles = makeStyles({
  root: {},
  content: {
    display: 'flex',
    flexDirection: 'row',
  },
  actions: {
    display: 'flex',
    alignItems: 'center',
  },
})

const ProfileCard: React.FC = () => {
  const classes = useStyles()
  const [value, setValue] = React.useState(0)

  const handleChange = (_event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue)
  }

  return (
    <Card className={classes.root}>
      <CardActionArea className={classes.content}>
        <Header />
      </CardActionArea>
      <CardActions className={classes.actions}>
        <Tabs value={value} onChange={handleChange} orientation="vertical">
          <Tab label="Settings" />
          <Tab label="Orders" />
          <Tab label="Addresses" />
          <Tab label="Payment" />
        </Tabs>
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

export default ProfileCard
