import {RootStackRoutes} from '../navigation/routes';

export type Image = {
  thumbnail: string;
  large: string;
  small: string;
};
export type ProductInfo = {
  id: string;
  title: string;
  price: string;
  images: Image[];
};
export type Product = {
  items: ProductInfo[];
};

export type RootStackParamList = {
  [RootStackRoutes.HOME]: undefined;
  [RootStackRoutes.PRODUCT_DETAILS]: {productID: string};
};

export enum APIMethod {
  POST = 'post',
  GET = 'get',
}
