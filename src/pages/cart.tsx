import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from '@material-ui/core';
import React from 'react';

import { Container } from 'common/UI';
import Core from 'modules/Core';

function formatPrice(price: number) {
  return `$${(price * 0.01).toFixed(2)}`;
}

//function totalPrice(items: IProduct[]) {
//  return items.reduce((acc, item) => acc + item.quantity * item.price, 0.0);
//}

const items = [
  {
    name: 'Celular Xiaomi Note 8 64G',
    price: 220000,
    quantity: 1,
  },
  {
    name: 'Smartphone, Apple, iPhone 7',
    price: 250000,
    quantity: 1,
  },
  {
    name: 'Celular Redmi Note 7 4GB',
    price: 180000,
    quantity: 1,
  },
];

const Cart: React.FC = () => {
  return (
    <Core>
      <Container>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="right">Price</TableCell>
              <TableCell align="right">Quantity</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {items.map((item) => (
              <TableRow key={item.name}>
                <TableCell component="th" scope="row">
                  {item.name}
                </TableCell>
                <TableCell align="right">{formatPrice(item.price)}</TableCell>
                <TableCell align="right">{item.quantity}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Container>
    </Core>
  );
};

export default Cart;
