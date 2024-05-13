import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import GradientContainer from '../components/GradientContainer';
import CartProduct from '../components/CartProduct';
import ButtonRed from '../components/ButtonRed';
import CartPrice from '../components/CartPrice';

const CartScreen = () => {
  return (
    <GradientContainer>
      <FlatList data={[1, 2]} renderItem={() => <CartProduct />} />
      <View style={{paddingHorizontal: 15}}>
        <CartPrice text="Total:" price="$119.7" />
        <CartPrice text="Shipping:" price="$0.0" />
        <View style={styles.line} />
        <CartPrice text="Grand Total:" price="$119.7" total />
      </View>
      <View style={{marginBottom: 6, marginTop: 20}}>
        <ButtonRed text="Add to Cart" />
      </View>
    </GradientContainer>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  line: {
    backgroundColor: '#C0C0C0',
    height: 1,
    width: 'auto',
    marginVertical: 20,
  },
});
