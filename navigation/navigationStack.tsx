import React from 'react';
import {HomeScreen} from '../screens';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParamList} from '../types/types';
import {RootStackRoutes} from './routes';
import {NavigationContainer} from '@react-navigation/native';
import ProductDetails from '../screens/productDetails';

const Stack = createNativeStackNavigator<RootStackParamList>();
const NavigationStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={RootStackRoutes.HOME} component={HomeScreen} />
        <Stack.Screen
          name={RootStackRoutes.PRODUCT_DETAILS}
          component={ProductDetails}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default NavigationStack;
