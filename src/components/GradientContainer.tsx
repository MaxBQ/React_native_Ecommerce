import {StyleSheet, Text, View} from 'react-native';
import React, {ReactNode} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Header from './Header';

interface GradientContainerProps {
  children: ReactNode;
}

const GradientContainer = (props: GradientContainerProps) => {
  const {children} = props;
  return (
    <LinearGradient colors={['#FDF0F3', '#FFFBFC']} style={styles.container}>
      <Header />
      {children}
    </LinearGradient>
  );
};

export default GradientContainer;

const styles = StyleSheet.create({
  container: {flex: 1, paddingHorizontal: 20},
});
