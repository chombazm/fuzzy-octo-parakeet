import React from 'react';
import { View, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Color } from '../../constants/Colors';
import { icons } from '../../constants/Icons';
const Tabs = createBottomTabNavigator();

import HomeScreen from '../../Screens/Home';
import GrudgesScreen from '../../Screens/Grudges';
import AddGrudgeScreen from '../../Screens/AddGrudge';
import ProfileScreen from '../../Screens/Profile';
import NotificationsScreen from '../../Screens/Notifications';

const BottomTabs = () => {
  return (
    <Tabs.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: Color.background,
          elevation: 0,
          borderTopWidth: 0,
          position: 'absolute',
          marginBottom: 15,
        },
        tabBarOptions: {
          showLabel: true,
        },
      }}>
      <Tabs.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              <Image
                source={focused ? icons.homeActive : icons.home}
                style={style.logoIcon}
              />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="Grudges"
        component={GrudgesScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              <Image
                source={focused ? icons.grudgesActive : icons.grudges}
                style={style.logoIcon}
              />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="AddGrudge"
        component={AddGrudgeScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              <Image
                source={focused ? icons.addGrudge : icons.addGrudge}
                style={style.cta}
              />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="Notifications"
        component={NotificationsScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              <Image
                source={
                  focused ? icons.notificationsActive : icons.notifications
                }
                style={style.logoIcon}
              />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              <Image
                source={focused ? icons.profileActive : icons.profile}
                style={style.logoIcon}
              />
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
  logoIcon: {
    width: 32,
    height: 32,
  },
  cta: {
    width: 64,
    height: 64,
  },
});

export default BottomTabs;
