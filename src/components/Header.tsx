import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Header = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headerMenuContainer}>
        <Image
          style={styles.headerMenu}
          source={require('../assets/HeaderMenu.png')}
        />
      </View>
      <Image style={styles.dp} source={require('../assets/AccountW.png')} />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
  },
  headerMenu: {
    height: 28,
    width: 28,
  },
  headerMenuContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 22,
    height: 44,
    width: 44,
    alignItems: 'center',
    justifyContent: 'center',
  },
  dp: {
    height: 44,
    width: 44,
    borderRadius: 22,
  },
});
