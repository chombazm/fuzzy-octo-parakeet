import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Color } from '../constants/Colors';

const Grudge = () => {
  return (
    <View style={style.container}>
      <View></View>
      <View>
        <Text>Grudge</Text>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    height: 100,
    backgroundColor: Color.shadeSecondary,
  },
  containerBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  barHeaderTxt: {
    fontSize: 18,
  },
});
export default Grudge;
