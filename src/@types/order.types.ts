import { IProduct } from "./products.types";

export interface IOrder {
  user: string;
  orderItems: {
    itemTotalPrice: number;
    qty: number;
    product: IProduct;
  }[];
  shippingAddress: {
    address: string;
    city: string;
    postalCode: string;
    country: string;
  };
  paymentMethod: string;
  clientSecret?: string;
  taxPrice: number;
  shippingPrice: number;
  totalPrice: number;
  isPaid: boolean;
  paidAt: string;
  isDelivered: boolean;
  deliveredAt: string;
}

export type ActionsType = null;
