import { Box } from '@material-ui/core'
import React from 'react'

interface TabPanelProps {
  children?: React.ReactNode
  index: any
  value: any
}

const TabPanel: React.FC<TabPanelProps> = (props) => {
  const { children, value, index, ...other } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </div>
  )
}

export default TabPanel
