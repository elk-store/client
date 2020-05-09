import 'typeface-roboto'
import CssBaseline from '@material-ui/core/CssBaseline'
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import App from 'next/app'
import React from 'react'

class MyApp extends App {
  private theme = createMuiTheme({
    palette: {},
  })

  render() {
    const { Component, pageProps } = this.props

    return (
      <ThemeProvider theme={this.theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    )
  }
}

export default MyApp
