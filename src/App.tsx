import {
  useMediaQuery,
  createMuiTheme,
  ThemeProvider,
  CssBaseline,
} from '@material-ui/core'
import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import { Home } from './pages'

const MainWrapper: React.FC = () => (
  <Switch>
    <Route exact path="/" component={Home} />
  </Switch>
)

const App = (): JSX.Element => {
  const prefersDarkMode = useMediaQuery('prefers-color-scheme: dark')

  const theme = React.useMemo(
    () =>
      createMuiTheme({
        palette: {
          type: prefersDarkMode ? 'dark' : 'light',
        },
      }),
    [prefersDarkMode]
  )

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <BrowserRouter>
        <Switch>
          <Route path="/" component={MainWrapper} />
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
