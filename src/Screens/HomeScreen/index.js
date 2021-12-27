import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import AddGrudgeForm from '../../Components/AddGrudgeForm';
const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <AddGrudgeForm />
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Grudges');
        }}>
        <Text>Grudges</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Grudgers');
        }}>
        <Text>Grudgers</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          navigation.navigate('about');
        }}>
        <Text>About app</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;
