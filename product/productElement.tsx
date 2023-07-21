import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React from 'react';
import {Image, StyleSheet, Text} from 'react-native';
import {TouchableOpacity} from 'react-native';
import {RootStackParamList} from '../types/types';
import {RootStackRoutes} from '../navigation/routes';

type ItemProps = {
  title: string;
  thumbnail: string;
  price: string;
  productID: string;
};

const ProductElement = ({title, thumbnail, price, productID}: ItemProps) => {
  console.log(thumbnail);
  const {navigate} =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const onPress = () => {
    navigate(RootStackRoutes.PRODUCT_DETAILS, {productID});
  };
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image
        style={styles.image}
        source={{
          uri: thumbnail,
        }}
      />
      <Text style={styles.text}>{title}</Text>
      <Text style={styles.text}>{price}</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 20,
    width: 300,
    marginVertical: 8,
    marginHorizontal: 16,
    padding: 20,
    alignSelf: 'center',
  },
  text: {
    fontSize: 14,
    alignSelf: 'center',
    textAlign: 'center',
    padding: 5,
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 20,
    alignSelf: 'center',
  },
});
export default ProductElement;
