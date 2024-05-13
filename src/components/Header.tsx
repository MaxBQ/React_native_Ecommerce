import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {ParamListBase, useNavigation, useRoute} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

const Header = () => {
  const {name} = useRoute();
  const {navigate} = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  return (
    <View style={styles.container}>
      {name !== 'Cart' ? (
        <View style={styles.headerMenuContainer}>
          <Image
            style={styles.headerMenu}
            source={require('../assets/HeaderMenu.png')}
          />
        </View>
      ) : (
        <TouchableOpacity
          onPress={() => {
            navigate('HomeStack');
          }}
          style={styles.headerMenuContainer}>
          <Ionicons name="chevron-back" size={25} color={'#E96E6E'} />
        </TouchableOpacity>
      )}
      {name === 'Cart' ? <Text style={styles.title}>My Cart</Text> : null}
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
    padding: 10,
  },
  title: {
    fontSize: 28,
    color: 'black',
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
