import { OrderInterface } from 'interfaces/order';
import { SellerInterface } from 'interfaces/seller';
import { GetQueryInterface } from 'interfaces';

export interface ProductInterface {
  id?: string;
  name: string;
  description?: string;
  seller_id?: string;
  created_at?: any;
  updated_at?: any;
  order?: OrderInterface[];
  seller?: SellerInterface;
  _count?: {
    order?: number;
  };
}

export interface ProductGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  description?: string;
  seller_id?: string;
}
