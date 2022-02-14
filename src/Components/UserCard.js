import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Color } from '../constants/Colors';
const userCard = () => {
  return (
    <View style={style.container}>
      <View style={style.userThumb}></View>
      <View style={style.userInfo}>
        <Text style={style.userGreet}>Welcome ✌️</Text>
        <Text style={style.userName}>Bwembya</Text>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    height: 120,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Color.background,
  },
  userThumb: {
    height: 65,
    width: 65,
    borderRadius: 12,
    backgroundColor: Color.primary,
  },
  userInfo: {
    marginLeft: 15,
  },
  userGreet: {
    fontSize: 18,
    color: Color.secondaryText,
  },
  userName: {
    fontSize: 21,
    fontWeight: 'bold',
    color: Color.secondaryText,
  },
});

export default userCard;
