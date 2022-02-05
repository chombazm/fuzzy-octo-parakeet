import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const GrudgesScreen = () => {
  return (
    <View style={style.container}>
      <TouchableOpacity>
        <Text>Grudges Screen</Text>
      </TouchableOpacity>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default GrudgesScreen;
