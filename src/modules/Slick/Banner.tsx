import React from 'react'
import styled from 'styled-components'

import { Text } from 'common/UI'

const Card = styled.div`
  position: relative;
  width: 100%;
  display: inline-block;
  padding: 0.5rem;
  border-radius: 0.3125rem;
  background-color: var(--color-white);
  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.14),
    0 2px 1px -1px rgba(0, 0, 0, 0.12), 0 1px 3px 0 rgba(0, 0, 0, 0.2);
`

const Content = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  pointer-events: none;
  align-items: center;
  justify-content: flex-end;
  display: flex;
`

const Holder = styled.div`
  width: 45%;
  text-align: center;
  padding-right: 1rem;
  pointer-events: visible;
`

const Banner: React.FC<{ image: string }> = ({ image }) => {
  return (
    <Card>
      <img src={image} alt="Hello" />

      <Content>
        <Holder>
          <Text size="title" color="black">
            Big Sale
          </Text>
          <Text size="huge" color="black" weight="bold">
            Women&apos;s Summer Collection
          </Text>
        </Holder>
      </Content>
    </Card>
  )
}

export { Banner }
