import axios from 'axios';
import React, {useState} from 'react';
import {ActivityIndicator, SafeAreaView, StyleSheet} from 'react-native';
import {APIMethod, Product} from '../types/types';
import ProductList from '../product/productList';
import {useAPIConfig} from '../API/hooks';

const HomeScreen = () => {
  const [products, setProducts] = useState<Product>();
  const config = useAPIConfig(APIMethod.POST);
  console.log(config);
  axios(config)
    .then(response => {
      setProducts(response.data.data);
    })
    .catch(error => {
      console.log(error);
    });
  if (products === undefined) {
    return <ActivityIndicator />;
  }
  return (
    <SafeAreaView style={styles.background}>
      <ProductList products={products?.items.slice(20, 40)} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#D3D3D3',
  },
});

export default HomeScreen;
