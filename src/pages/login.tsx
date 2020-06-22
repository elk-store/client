import { useRouter } from 'next/router';
import React, { useContext, useEffect } from 'react';

import { AuthContext } from 'common/contexts';
import { LoginForm } from 'modules/Login';

const Login = () => {
  const router = useRouter();
  const { setToken, isAuthenticated } = useContext(AuthContext);

  useEffect(() => {
    if (isAuthenticated) {
      router.push('/');
    }
  }, [isAuthenticated, router]);

  const handleSuccessAuth = (token: string) => {
    setToken(token);
  };

  return <LoginForm onSucessSubmit={handleSuccessAuth} />;
};

export default Login;
