import {
  Table,
  TableHead,
  TableRow,
  Button,
  TableCell,
  TableBody,
} from '@material-ui/core';
import { Delete } from '@material-ui/icons';
import React, { useContext } from 'react';

import { CartContext } from 'common/contexts/CartContext';
import { Container } from 'common/UI';
import Core from 'modules/Core';
import { IProduct } from 'services/Product';

function formatPrice(price: number) {
  return `$${(price * 0.01).toFixed(2)}`;
}

function totalPrice(items: IProduct[]) {
  return items.reduce((acc, item) => acc + item.quantity * item.price, 0.0);
}

const Cart: React.FC = () => {
  const ctx = useContext(CartContext);

  return (
    <Core>
      <Container>
        <Table aria-label="products">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="right">Price</TableCell>
              <TableCell align="right">Quantity</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {ctx.items.map((item: IProduct, index: number) => (
              <TableRow key={item.name}>
                <TableCell component="th" scope="row">
                  {item.name}
                </TableCell>
                <TableCell align="right">{formatPrice(item.price)}</TableCell>
                <TableCell align="right">{item.quantity}</TableCell>
                <TableCell align="right">
                  <Button
                    variant="contained"
                    color="secondary"
                    startIcon={<Delete />}
                    onClick={() => ctx.deleteFromCart(index)}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
            <TableRow>
              <TableCell colSpan={2}>Total</TableCell>
              <TableCell align="right">
                {formatPrice(totalPrice(ctx.items))}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
        <Button variant="contained" color="secondary">
          Buy
        </Button>
      </Container>
    </Core>
  );
};

export default Cart;
