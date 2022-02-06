import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const AddGrudgeScreen = () => {
  return (
    <View style={style.container}>
      <TouchableOpacity>
        <Text>Add grudge screen</Text>
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
export default AddGrudgeScreen;
