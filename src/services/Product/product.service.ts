import axios from 'axios';

import { IFindAllResponse, IProduct } from './product.interface';
import { API_URL } from 'common/constants';

axios.defaults.baseURL = API_URL;

export const findAll = async () => {
  const { data } = await axios.get<IFindAllResponse>('/products');

  return data.items;
};

export const findById = async (id: string) => {
  const { data } = await axios.get<IProduct>(`/products/${id}`);

  return data;
};
