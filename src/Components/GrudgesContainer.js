import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Color } from '../constants/Colors';

import Grudge from './Grudge';

const GrudgeContainer = () => {
  return (
    <View style={style.container}>
      <View style={style.containerBar}>
        <Text style={style.barHeaderTxt}>Grudges</Text>
        <Text style={style.barHeaderTxt}>Today</Text>
      </View>
      <Grudge />
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    height: 150,
    backgroundColor: Color.background,
  },
  containerBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  barHeaderTxt: {
    fontSize: 18,
  },
});
export default GrudgeContainer;
