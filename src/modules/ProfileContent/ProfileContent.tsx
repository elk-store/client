import { Tabs, Tab } from '@material-ui/core'
import React, { useState, ChangeEvent } from 'react'
import styled from 'styled-components'

import Addresses from './Addresses'
import { Header } from './Header'
import Orders from './Orders'
import Payment from './Payment'
import Settings from './Settings'
import { TabPanel } from './TabPanel'

const Card = styled.div`
  overflow: hidden;
  border-radius: 0.25rem;
  background: var(--color-white);

  transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);
`

const TABS_TITLE = ['Settings', 'Orders', 'Addresses', 'Payment']
const TABS = [Settings, Orders, Addresses, Payment]

const ProfileContent: React.FC = () => {
  const [value, setValue] = useState(0)

  const handleChange = (_event: ChangeEvent<{}>, newValue: number) => {
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
