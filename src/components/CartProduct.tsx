import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import image from '../assets/imageCard.png';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const CartProduct = () => {
  return (
    <View style={styles.cartProductContainer}>
      <Image style={styles.image} source={image} />
      <View style={styles.detail}>
        <View style={styles.detailParams}>
          <Text style={styles.textTitle}>Jacket Jeans</Text>
          <Text style={styles.textPrice}>$37.9</Text>
          <View style={styles.params}>
            <View style={[styles.color, {backgroundColor: '#F68CB5'}]} />
            <View style={styles.size}>
              <Text style={styles.sizeText}>L</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.deleteButton}>
        <MaterialIcons name="delete-outline" size={24} color={'#F68CB5'} />
      </View>
    </View>
  );
};

export default CartProduct;

const styles = StyleSheet.create({
  cartProductContainer: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    marginTop: 45,
  },
  image: {
    height: 125,
    width: '25%',
    borderRadius: 20,
    objectFit: 'fill',
  },
  detail: {
    flexDirection: 'row',
    paddingLeft: 20,
    alignContent: 'center',
  },
  detailParams: {
    justifyContent: 'space-between',
    paddingTop: 5,
    paddingBottom: 10,
  },
  color: {
    width: 32,
    height: 32,
    borderRadius: 16,
  },
  size: {
    backgroundColor: 'white',
    width: 32,
    height: 32,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  sizeText: {
    fontSize: 18,
    fontWeight: '500',
    color: '#444444',
  },
  textTitle: {
    color: '#444444',
    fontSize: 18,
    fontWeight: '500',
  },
  textPrice: {
    color: '#797979',
    fontSize: 18,
    fontWeight: '500',
  },
  params: {
    flexDirection: 'row',
    gap: 8,
  },
  deleteButton: {
    flex: 1,
    alignItems: 'flex-end',
    paddingEnd: 10,
    paddingTop: 5,
  },
});
