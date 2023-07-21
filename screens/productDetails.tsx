import React, {useState} from 'react';
import {
  ActivityIndicator,
  Image,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useAppStackNavRoute} from '../navigation/navigation';
import {APIMethod, ProductInfo} from '../types/types';
import {RootStackRoutes} from '../navigation/routes';
import {useAPIConfig} from '../API/hooks';
import axios from 'axios';
import dimensions from '../brand/diminsions';
import ImageViewer from 'react-native-image-zoom-viewer';

const ProductDetails = () => {
  const {params} = useAppStackNavRoute<RootStackRoutes.PRODUCT_DETAILS>();
  const [productDetails, setProductDetails] = useState<ProductInfo>();
  const apiConfig = useAPIConfig(APIMethod.GET, `/${params.productID}`);
  const [openImage, setOpenImage] = useState(false);
  axios(apiConfig)
    .then(response => {
      setProductDetails(response.data.data);
    })
    .catch(error => {
      console.log(error);
    });
  if (productDetails === undefined) {
    return <ActivityIndicator />;
  }
  return (
    <View>
      <TouchableOpacity onPress={() => setOpenImage(true)}>
        <Image
          style={styles.image}
          source={{
            uri: productDetails?.images[0].thumbnail,
          }}
        />
      </TouchableOpacity>
      <Text style={styles.title}>{productDetails?.title}</Text>
      <Text style={styles.title}>{productDetails?.price}$</Text>

      <View>
        <Modal
          visible={openImage}
          transparent={true}
          onRequestClose={() => setOpenImage(false)}>
          <ImageViewer
            imageUrls={[{url: productDetails?.images[0].large}]}
            onSwipeDown={() => {
              setOpenImage(false);
            }}
            onMove={data => console.log(data)}
            enableSwipeDown={true}
          />
        </Modal>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  image: {
    width: dimensions.screenWidth,
    height: 400,
  },
  title: {
    fontSize: 22,
  },
});
export default ProductDetails;
