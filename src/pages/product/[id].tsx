import { Grid } from '@material-ui/core';
import axios from 'axios';
import { useRouter } from 'next/router';
import React from 'react';
import styled from 'styled-components';

import { API_URL } from 'common/constants';
import { Container } from 'common/UI';
import Core from 'modules/Core';
import { Image, Content } from 'modules/Product';
import { ProductData } from 'modules/Product/product.model';

axios.defaults.baseURL = API_URL;

const Wrapper = styled.div`
  background: var(--color-white);
  padding: 3rem 0;
`;

type ContentProps = {
  sizes: string[];
  quantity: number;
  name: string;
  price: number;
  code: string;
  tags: string[];
  pictures: string[];
  description: string;
};

const Product: React.FC<ContentProps> = ({
  sizes,
  quantity,
  name,
  price,
  code,
  tags,
  pictures,
  description,
}) => {
  const _router = useRouter();

  const [_size, setSize] = React.useState(['a', 'b', 'c']);
  const [_quantity, setQuantity] = React.useState(1);

  const handleSizeChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setSize(event.target.value as string[]);
  };

  const handleQuantityChange = (
    event: React.ChangeEvent<{ value: unknown }>
  ) => {
    setQuantity(event.target.value as number);
  };

  return (
    <Core>
      <Wrapper>
        <Container>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <Image name={name} picture={pictures} />
            </Grid>
            <Grid item xs={12} md={6}>
              <Content
                sizes={sizes}
                quantity={quantity}
                name={name}
                price={price}
                code={code}
                tags={tags}
                description={description}
                handleQuantityChange={handleQuantityChange}
                handleSizeChange={handleSizeChange}
              />
            </Grid>
          </Grid>
        </Container>
      </Wrapper>
    </Core>
  );
};

export default Product;

type Params = {
  params: {
    id: string;
  };
};

export async function getStaticProps({ params }: Params) {
  const response = await axios.get<ProductData>(`/products/${params.id}`);

  return {
    props: { ...response.data },
  };
}

export async function getStaticPaths() {
  const response = await axios.get<ProductData[]>('/products');

  const paths = response.data.map((product: ProductData) => ({
    params: { id: product.id },
  }));

  return { paths, fallback: false };
}
