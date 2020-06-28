import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';

import { Text } from 'common/UI';
import { IProduct } from 'services/Product';

const Card = styled.div`
  overflow: hidden;
  border-radius: 0.25rem;
  transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  background: var(--color-white);
  cursor: pointer;

  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.14),
    0 2px 1px -1px rgba(0, 0, 0, 0.12), 0 1px 3px 0 rgba(0, 0, 0, 0.2);
`;

const Header = styled.div`
  min-height: 12rem;
  height: 12rem;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const Content = styled.div`
  position: relative;
  padding: 1rem;
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
  margin-bottom: 0.25rem;
`;

const ProductCard = ({ product }: { product: IProduct }) => {
  return (
    <Card>
      <Header>
        <Link href="/product/[slug]" as={`/product/${product.id}`}>
          <img src={product.pictures?.[0]} alt={name} height="140px" />
        </Link>
      </Header>

      <Line />

      <Content>
        <Title as="h5" color="black" size="heading" weight="medium">
          {product.name}
        </Title>

        <Text as="span" color="primary" weight="medium">
          $ {product.price}
        </Text>
      </Content>
    </Card>
  );
};

export { ProductCard };
