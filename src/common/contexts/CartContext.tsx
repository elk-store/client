/* eslint-disable @typescript-eslint/no-empty-function */
import React, { createContext, useState } from 'react';

import { IProduct } from 'services/Product';

export const CartContext = createContext({
  items: [] as IProduct[],
  addToCart: (_item?: IProduct) => {},
  deleteFromCart: (_index: number) => {},
});

export const CartProvider: React.FC = ({ children }) => {
  const [items, setItems] = useState<IProduct[]>([]);

  function addToCart(item?: IProduct) {
    if (item) {
      setItems((items) => items.concat(item));
    }
  }

  function deleteFromCart(index: number) {
    setItems(items.splice(index, 1));
  }

  const defaultContext = {
    items,
    addToCart,
    deleteFromCart,
  };

  return (
    <CartContext.Provider value={defaultContext}>
      {children}
    </CartContext.Provider>
  );
};
