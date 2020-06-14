import { Grid } from '@material-ui/core';
import { useRouter } from 'next/dist/client/router';
import React from 'react';

import { Container } from 'common/UI';
import { ProductCard } from 'common/UI/ProductCard';
import Core from 'modules/Core';

const PRODUCTS = [1, 2, 3, 4, 5, 6, 7, 8];

const Search: React.FC = () => {
  const router = useRouter();
  const { q } = router.query;

  return (
    <Core>
      <Container>
        <Grid container spacing={2}>
          <Grid container xs={4}>
            <div>{q}</div>
            <div>300 resultados</div>
            <div>Aqui vão os parametros de ordenação</div>
            <div>Aqui vão os parametros de filtro</div>
          </Grid>
          <Grid container xs={8}>
            {PRODUCTS.map((product) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={product}>
                <ProductCard id={product} />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Container>
    </Core>
  );
};

export default Search;
