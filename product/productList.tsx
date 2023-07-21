import React from 'react';
import {FlatList} from 'react-native';
import {ProductInfo} from '../types/types';
import ProductElement from './productElement';
interface Props {
  products: ProductInfo[];
}
const ProductList = ({products}: Props) => {
  return (
    <FlatList
      data={products}
      renderItem={({item}) => (
        <ProductElement
          title={item.title}
          thumbnail={item.images[0].thumbnail}
          price={item.price}
          productID={item.id}
        />
      )}
      keyExtractor={item => item.id}
      numColumns={1}
    />
  );
};

export default ProductList;
