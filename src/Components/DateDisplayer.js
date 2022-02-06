import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Color } from '../constants/Colors';

const DateDisplayer = () => {
  return (
    <View style={style.container}>
      <Text>DateDisplayer</Text>
    </View>
  );
};
const style = StyleSheet.create({
  container: {
    height: 120,
    backgroundColor: Color.shadeSecondary,
  },
});
export default DateDisplayer;
