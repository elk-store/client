import { useRouter } from 'next/router';
import React, { useContext, useEffect } from 'react';

import { AuthContext } from 'common/contexts';
import { Container } from 'common/UI';
import Core from 'modules/Core';
import ProfileContent from 'modules/ProfileContent';

const Profile: React.FC = () => {
  const router = useRouter();
  const { isAuthenticated } = useContext(AuthContext);

  useEffect(() => {
    if (!isAuthenticated) {
      router.push('/login');
    }
  }, [isAuthenticated, router]);

  return (
    <Core>
      <Container>
        <ProfileContent />
      </Container>
    </Core>
  );
};

export default Profile;
