import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const ColorBox = ({text = 'default color', hexCode = '#39f'}) => {
  const bgColor = {
    backgroundColor: hexCode,
  };
  return (
    <View style={[style.box, bgColor]}>
      <Text style={[style.textInColor]}>
        {text}: {hexCode}
      </Text>
    </View>
  );
};

const style = StyleSheet.create({
  textInColor: {
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
  },
  box: {
    padding: 20,
  },
});
export default ColorBox;
