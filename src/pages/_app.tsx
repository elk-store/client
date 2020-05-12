import {
  ThemeProvider as MuiThemeProvider,
  createMuiTheme,
} from '@material-ui/core/styles'
import App from 'next/app'
import React from 'react'

import 'wipe.css'

import { ThemeProvider, Layout, theme } from 'common/UI'

class MyApp extends App {
  private muiTheme = createMuiTheme({
    palette: {
      primary: { main: theme.colors.primary },
      secondary: { main: theme.colors.secondary },
      background: { default: theme.colors.light },
    },
  })

  render() {
    const { Component, pageProps } = this.props

    return (
      <ThemeProvider>
        <MuiThemeProvider theme={this.muiTheme}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </MuiThemeProvider>
      </ThemeProvider>
    )
  }
}

export default MyApp
