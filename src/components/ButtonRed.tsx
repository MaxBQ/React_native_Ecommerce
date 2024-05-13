import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';

interface ButtonRedProps {
  text: string;
}

const ButtonRed = (props: ButtonRedProps) => {
  const {text} = props;
  return (
    <TouchableOpacity style={styles.buttonCart}>
      <Text style={styles.buttonCartText}>{text}</Text>
    </TouchableOpacity>
  );
};

export default ButtonRed;

const styles = StyleSheet.create({
  buttonCart: {
    backgroundColor: '#E96E6E',
    padding: 15,
    borderRadius: 20,
    marginHorizontal: 10,
  },
  buttonCartText: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: '500',
    color: 'white',
  },
});
