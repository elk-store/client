import React from 'react'
import styled from 'styled-components'

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

const Title = styled.div`
  font-weight: 400;
  font-size: 2.813rem;
  line-height: 3rem;
  color: var(--color-black);

  @media (max-width: 767px) {
    font-size: 2rem;
    line-height: 1;
  }

  @media (max-width: 599px) {
    font-size: 1.5rem;
    margin-bottom: 0.3125rem;
  }
`

const Description = styled.div`
  font-weight: 900;
  font-size: 3.25rem;
  letter-spacing: -0.0625rem;
  line-height: 3.5rem;
  color: var(--color-black);

  @media (max-width: 959px) {
    font-size: 3rem;
    line-height: 1;
  }

  @media (max-width: 767px) {
    font-size: 2.5rem;
  }

  @media (max-width: 599px) {
    font-size: 1.8rem;
  }
`

const Banner: React.FC<{
  image: string
  title: string
  description: string
}> = ({ image, title, description }) => {
  return (
    <Card>
      <img src={image} alt="Hello" />

      <Content>
        <Holder>
          <Title>{title}</Title>
          <Description>{description}</Description>
        </Holder>
      </Content>
    </Card>
  )
}

export { Banner }
