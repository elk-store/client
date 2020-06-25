export interface IProduct {
  id: string;
  name: string;
  price: number;
  quantity: number;
  description: string;
  tags: string[];
  pictures: string[];
  sizes: number[];
  createdAt: Date;
  updatedAt: Date;
}

export interface IFindAllResponse {
  items: Product[];
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
