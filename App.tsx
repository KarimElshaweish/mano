import axios from 'axios';
import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';

import {Product} from './types/types';
import {ProductList} from './product';
import NavigationStack from './navigation/navigationStack';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
const config = {
  method: 'post',
  url: 'https://staging-api.manoapp.com/api/v1/users/products',
  headers: {
    Authorization: '1009c1a351683ae69c8d6f54d94fb898',
    StoreID: '2',
    UserAddressID: '49769',
  },
};

const App = () => {
  const [products, setProducts] = useState<Product>();
  axios(config)
    .then(response => {
      setProducts(response.data.data);
    })
    .catch(error => {
      console.log(error);
    });
  // if (products === undefined) {
  //   return <Text>Getting Data</Text>;
  // }
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <NavigationStack />
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#D3D3D3',
  },
});

export default App;
