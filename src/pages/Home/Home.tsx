import { Button, Typography } from '@material-ui/core'
import React from 'react'

const Home = (): JSX.Element => {
  return (
    <div className="App">
      <header className="App-header">
        <Typography component="p" variant="h6">
          Edit <code>src/pages/Home/Home.tsx</code> and save to reload.
        </Typography>

        <Button href="https://reactjs.org" target="_blank">
          Learn React
        </Button>
      </header>
    </div>
  )
}

export { Home }
