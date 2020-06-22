/* eslint-disable @typescript-eslint/no-empty-function */
import React, { createContext, useState, useEffect } from 'react';
import { useCookies } from 'react-cookie';

export const AuthContext = createContext({
  token: '',
  isAuthenticated: false,
  setToken: (_v: string) => {},
});

export const AuthProvider: React.FC = ({ children }) => {
  const getTokenFromLocalStorage = (): string | undefined => {
    if (process.browser) {
      return window.localStorage.getItem('token') || undefined;
    }

    return;
  };

  const [cookieToken, setCookieToken, removeCookieToken] = useCookies([
    'token',
  ]);
  const [token, setToken] = useState(
    getTokenFromLocalStorage() || cookieToken.token
  );
  const [isAuthenticated, setIsAuthenticated] = useState(Boolean(token));

  useEffect(() => {
    if (token) {
      window.localStorage.setItem('token', token);
      setCookieToken('token', token);
    } else {
      window.localStorage.removeItem('token');
      removeCookieToken('token');
    }

    setIsAuthenticated(Boolean(token));
  }, [token, removeCookieToken, setCookieToken]);

  const defaultContext = {
    token,
    setToken,
    isAuthenticated,
  };

  return (
    <AuthContext.Provider value={defaultContext}>
      {children}
    </AuthContext.Provider>
  );
};
