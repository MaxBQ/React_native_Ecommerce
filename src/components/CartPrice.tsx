import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

interface CartPriceProps {
  text: string;
  price: string | number;
  total?: boolean;
}

const CartPrice = (props: CartPriceProps) => {
  const {total, price, text} = props;
  return (
    <View style={styles.cartPriceContainer}>
      <Text style={styles.text}>{text}</Text>
      <Text style={[styles.text2, total && {color: '#3C3C3C'}]}>{price}</Text>
    </View>
  );
};

export default CartPrice;

const styles = StyleSheet.create({
  cartPriceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  text: {
    color: '#757575',
    fontSize: 18,
    fontWeight: '500',
  },
  text2: {
    color: '#757575',
    fontSize: 18,
    fontWeight: '600',
  },
});
