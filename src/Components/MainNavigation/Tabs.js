import React from 'react';
import { createBottomTabNavigator } from 'react-navigation-tabs';
// import { HomeScreen } from '../../Screens';
import HomeScreen from '../../Screens/Home';
import GrudgerScreen from '../../Screens/Grudgers';
import GrudgesScreen from '../../Screens/Grudges';

const Tabs = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <Tabs.Navigator>
      <Tabs.Screen name="Home" component={HomeScreen} />
      <Tabs.Screen name="Grudger" component={GrudgerScreen} />
      <Tabs.Screen name="Grudges" component={GrudgesScreen} />
    </Tabs.Navigator>
  );
};
export default BottomTabs;
