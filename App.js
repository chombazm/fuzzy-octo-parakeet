import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/Screens/HomeScreen';
import GrudgesScreen from './src/Screens/GrudgesScreen';
import GrudgersScreen from './src/Screens/GrudgersScreen';
import AboutAppScreen from './src/Screens/AboutAppScreen';
const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Home' }}
        />
        <Stack.Screen
          name="Grudges"
          component={GrudgesScreen}
          options={{ title: 'Grudges' }}
        />
        <Stack.Screen
          name="Grudgers"
          component={GrudgersScreen}
          options={{ title: 'Grudgers' }}
        />
        <Stack.Screen
          name="about"
          component={AboutAppScreen}
          options={{ title: 'About app' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
