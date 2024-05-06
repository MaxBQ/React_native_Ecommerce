import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import AntDesign from 'react-native-vector-icons/dist/AntDesign';

interface ProductCardProps {
  isLike: boolean;
  setIsLike: (like: any) => void;
}

const ProductCard = (props: ProductCardProps) => {
  const {isLike, setIsLike} = props;
  const clickLike = () => {
    setIsLike((prev: any) => !prev);
  };
  return (
    <View style={styles.container}>
      <Image
        style={styles.imageCard}
        source={require('../assets/imageCard.png')}
      />
      <View style={styles.containerInfo}>
        <Text style={styles.title}>Jacket Jeans</Text>
        <Text style={styles.price}>$45.9</Text>
      </View>
      <TouchableOpacity style={styles.containerLike} onPress={clickLike}>
        {isLike ? (
          <AntDesign name={'heart'} size={20} color="#E55B5B" />
        ) : (
          <AntDesign name={'hearto'} size={20} color="#E55B5B" />
        )}
      </TouchableOpacity>
    </View>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
  imageCard: {
    width: 'auto',
    height: 256,
    borderRadius: 20,
    margin: 10,
    marginTop: 15,
  },
  title: {
    color: '#444444',
    fontSize: 18,
    lineHeight: 27,
    fontWeight: '500',
  },
  price: {color: '#9C9C9C', fontSize: 18, lineHeight: 27, fontWeight: '500'},
  containerInfo: {marginHorizontal: 13},
  containerLike: {
    position: 'absolute',
    width: 34,
    height: 34,
    borderRadius: 17,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    top: 25,
    right: 25,
  },
});
