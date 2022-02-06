import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Color } from '../constants/Colors';
const userCard = () => {
  return (
    <View style={style.container}>
      <Text>userCard</Text>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    height: 120,
    backgroundColor: Color.background,
  },
});

export default userCard;
