import { useRouter } from 'next/router';
import React, { useContext, useEffect } from 'react';

import { AuthContext } from 'common/contexts';
import { SignUpForm } from 'modules/Login';

const Register = () => {
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

  return <SignUpForm onSuccessSubmit={handleSuccessAuth} />;
};

export default Register;
