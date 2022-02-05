import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
// import { createBottonNavigator } from 'react-navigation-tabs';
// import { NativeScreenContainer } from 'react-native-screens';
import { NavigationContainer } from '@react-navigation/native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from './src/Screens/Home';
import GrudgerScreen from './src/Screens/Grudgers';
import GrudgesScreen from './src/Screens/Grudges';

const Tabs = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <Tabs.Navigator>
      <Tabs.Screen name="Grudges" component={GrudgesScreen} />
      <Tabs.Screen name="Home" component={HomeScreen} />
      <Tabs.Screen name="Grudgers" component={GrudgerScreen} />
    </Tabs.Navigator>
  );
};
const App = () => {
  return (
    <NavigationContainer>
      <BottomTabs />
    </NavigationContainer>
  );
};

// const style = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#f0f0f0',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
export default App;
