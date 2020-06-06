import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';

import { Text } from 'common/UI';

const Card = styled.div`
  overflow: hidden;
  border-radius: 0.25rem;
  transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  background: var(--color-white);

  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.14),
    0 2px 1px -1px rgba(0, 0, 0, 0.12), 0 1px 3px 0 rgba(0, 0, 0, 0.2);
`;

const Header = styled.div`
  min-height: 16rem;
  height: 16rem;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const Content = styled.div`
  position: relative;
  padding: 1.25rem;
  padding-top: 1.875rem;
`;

const Line = styled.hr`
  border: none;
  height: 1px;
  margin: 0;
  flex-shrink: 0;
  background: rgba(0, 0, 0, 0.12);
`;

const Title = styled(Text)`
  text-overflow: ellipsis;
  max-width: 100%;
  overflow: hidden;
  word-break: break-word;
  word-wrap: break-word;
  white-space: nowrap;
  margin-bottom: 1rem;
`;

const ProductCard: React.FC = (props) => {
  return (
    <Card>
      <Header>
        {/* TODO: Mudar o `a` para `Link` */}
        <Link href="/product/[slug]" as={`/product/${props.id}`}>
          <img
            src="https://cdn-demo.algolia.com/bestbuy-0118/5477500_sb.jpg"
            alt="Amazon - Fire TV Stick with Alexa Voice Remote - Black"
            height="140px"
          />
        </Link>
      </Header>
      <Line />
      <Content>
        <Title as="h5" color="black" size="heading" weight="medium">
          Amazon - Fire TV Stick with Alexa Voice Remote - Black
        </Title>

        <Text as="span" color="primary" weight="medium">
          $ 34.99
        </Text>
      </Content>
    </Card>
  );
};

export { ProductCard };
