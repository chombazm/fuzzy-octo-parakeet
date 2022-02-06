import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Color } from '../constants/Colors';

const GrudgeContainer = () => {
  return (
    <View style={style.container}>
      <Text>GrudgeContainer</Text>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    height: 150,
    backgroundColor: Color.background,
  },
});
export default GrudgeContainer;
