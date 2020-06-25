export enum Size {
  XS = 'XS',
  S = 'S',
  M = 'M',
  L = 'L',
  XL = 'XL',
}

export interface IProduct {
  id: string;
  name: string;
  price: number;
  quantity: number;
  description: string;
  tags: string[];
  pictures: string[];
  sizes: Size[];
  createdAt: Date;
  updatedAt: Date;
}

export interface IFindAllResponse {
  items: IProduct[];
  links: {
    first: string;
    last: string;
    next: string;
    previous: string;
  };
  meta: {
    currentPage: number;
    itemCount: number;
    itemsPerPage: number;
    totalItems: number;
    totalPages: number;
  };
}
