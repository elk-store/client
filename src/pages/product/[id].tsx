import { Grid } from '@material-ui/core';
import axios from 'axios';
import { useRouter } from 'next/router';
import React from 'react';
import styled from 'styled-components';
import useSWR from 'swr';

import { API_URL } from 'common/constants';
import { Container } from 'common/UI';
import Core from 'modules/Core';
import { Image, Content } from 'modules/Product';

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

async function fetchData(url: string): Promise<ContentProps> {
  const response = await axios.get<ContentProps>(url);
  return response.data;
}

const Product: React.FC = () => {
  const router = useRouter();

  const { data } = useSWR<ContentProps>(
    `/products/${router.query.id}`,
    fetchData
  );

  const [_size, setSize] = React.useState(['']);
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
              <Image name={data?.name} picture={data?.pictures} />
            </Grid>
            <Grid item xs={12} md={6}>
              <Content
                sizes={data?.sizes}
                quantity={data?.quantity}
                name={data?.name}
                price={data?.price}
                code={data?.code}
                tags={data?.tags}
                description={data?.description}
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
