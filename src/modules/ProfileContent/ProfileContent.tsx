import { Tabs, Tab } from '@material-ui/core'
import React from 'react'
import styled from 'styled-components'

import Addresses from './Addresses'
import { Header } from './Header'
import OrderHistory from './OrderHistory'
import Payment from './Payment'
import { TabPanel } from './TabPanel'
import UserForm from 'modules/Forms/User'

const Card = styled.div`
  overflow: hidden;
  border-radius: 0.25rem;
  background: var(--color-white);

  transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);
`

const TABS_TITLE = ['Settings', 'Orders', 'Addresses', 'Payment']
const TABS = [UserForm, OrderHistory, Addresses, Payment]

const ProfileContent: React.FC = () => {
  const [value, setValue] = React.useState(0)

  const handleChange = (_event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue)
  }

  return (
    <Card>
      <Header />
      <Tabs value={value} onChange={handleChange} variant="fullWidth">
        {TABS_TITLE.map((tab) => (
          <Tab key={tab} label={tab} />
        ))}
      </Tabs>

      {TABS.map((Component, index) => (
        <TabPanel key={index} value={value} index={index}>
          <Component />
        </TabPanel>
      ))}
    </Card>
  )
}

export { ProfileContent }
