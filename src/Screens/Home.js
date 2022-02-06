import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import DateDisplayer from '../Components/DateDisplayer';
import GrudgeContainer from '../Components/GrudgesContainer';
import UserCard from '../Components/UserCard';

const HomeScreen = () => {
  return (
    <SafeAreaView style={style.container}>
      <View style={style.UserCardContainer}>
        <UserCard />
      </View>

      <View>
        <DateDisplayer />
      </View>

      <View>
        <GrudgeContainer />
      </View>
      <TouchableOpacity>
        <Text>Home Screen</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  UserCardContainer: {
    justifyContent: 'center',
  },
});
export default HomeScreen;
