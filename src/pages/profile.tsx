import React from 'react'

import { Container } from 'common/UI'
import Core from 'modules/Core'
import ProfileContent from 'modules/ProfileContent'

const Profile: React.FC = () => {
  return (
    <Core>
      <Container>
        <ProfileContent />
      </Container>
    </Core>
  )
}

export default Profile
