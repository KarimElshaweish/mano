import {APIMethod} from '../types/types';

export const useAPIConfig = (method: APIMethod, api?: string) => ({
  method,
  url: `https://staging-api.manoapp.com/api/v1/users/products${
    api === undefined ? '' : api
  }`,
  headers: {
    Authorization: '1009c1a351683ae69c8d6f54d94fb898',
    StoreID: '2',
    UserAddressID: '49769',
  },
});
