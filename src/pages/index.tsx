import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import React from 'react'

import Core from 'modules/Core'

const Index: React.FC = () => {
  return (
    <Core>
      <Typography component="p" variant="h6">
        Edit <code>src/pages/index.tsx</code> and save to reload.
      </Typography>

      <Button href="https://reactjs.org" target="_blank">
        Learn React
      </Button>

      <div style={{ height: '200vh' }} />
    </Core>
  )
}

export default Index
