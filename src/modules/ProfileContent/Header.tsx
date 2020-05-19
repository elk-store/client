import { Avatar } from '@material-ui/core'
import React from 'react'
import styled from 'styled-components'

import { Text } from 'common/UI'

const Wrapper = styled.div`
  width: 100%;
  padding: 1rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`

const Content = styled.div`
  padding: 0 1rem;
`

const Header: React.FC = () => {
  return (
    <Wrapper>
      <Avatar>JD</Avatar>
      <Content>
        <Text as="h2" color="black" size="heading" weight="medium">
          John Doe
        </Text>
        <Text as="h6" color="black-light">
          john.doe@gmail.com
        </Text>
      </Content>
    </Wrapper>
  )
}

export { Header }
