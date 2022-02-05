import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Color } from '../../constants/Colors';
import { icons } from '../../constants/Icons';
const Tabs = createBottomTabNavigator();
import HomeScreen from '../../Screens/Home';
import GrudgesScreen from '../../Screens/Grudges';
import GrudgerScreen from '../../Screens/Grudgers';

const BottomTabs = () => {
  return (
    <Tabs.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: Color.background,
        },
        tabBarOptions: {
          showLabel: true,
        },
      }}>
      <Tabs.Screen
        name="Grudges"
        component={GrudgesScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              <Text style={focused ? style.isActiveTab : style.isNotActive}>
                Grudges
              </Text>
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              <Image source={icons.addGrudge} width={50} height={50} />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="Grudgers"
        component={GrudgerScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              <Text style={focused ? style.isActiveTab : style.isNotActive}>
                Grudgers
              </Text>
            </View>
          ),
        }}
      />
    </Tabs.Navigator>
  );
};
const style = StyleSheet.create({
  isActiveTab: {
    color: Color.primaryText,
    fontWeight: 'bold',
    fontSize: 14,
  },
  isNotActive: {
    color: Color.secondaryText,
  },
  cta: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: Color.primary,
  },
});

export default BottomTabs;
