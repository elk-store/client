import {
  ThemeProvider as MuiThemeProvider,
  createMuiTheme,
} from '@material-ui/core/styles';
import App from 'next/app';
import React from 'react';

import 'wipe.css';

import { AuthProvider, CartProvider } from 'common/contexts';
import { ThemeProvider, Layout, theme } from 'common/UI';

class MyApp extends App {
  private muiTheme = createMuiTheme({
    palette: {
      primary: { main: theme.colors.primary },
      secondary: { main: theme.colors.secondary },
      background: { default: theme.colors.light },
    },
  });

  render() {
    const { Component, pageProps } = this.props;

    return (
      <AuthProvider>
        <CartProvider>
          <ThemeProvider>
            <MuiThemeProvider theme={this.muiTheme}>
              <Layout>
                <Component {...pageProps} />
              </Layout>
            </MuiThemeProvider>
          </ThemeProvider>
        </CartProvider>
      </AuthProvider>
    );
  }
}

export default MyApp;
