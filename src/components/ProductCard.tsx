import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import AntDesign from 'react-native-vector-icons/dist/AntDesign';
import data from '../data/data.json';

export interface ProductItem {
  id: number;
  image: string;
  title: string;
  price: number;
  isLike?: boolean;
}

interface ProductCardProps {
  item: ProductItem;
  handleClick: (item: ProductItem) => void;
}

const ProductCard = (props: ProductCardProps) => {
  const {item, handleClick} = props;

  return (
    <View style={styles.container}>
      <Image style={styles.imageCard} src={item.image} />
      <View style={styles.containerInfo}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.price}>${item.price}</Text>
      </View>
      <TouchableOpacity
        style={styles.containerLike}
        onPress={() => handleClick(item)}>
        {item?.isLike ? (
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
