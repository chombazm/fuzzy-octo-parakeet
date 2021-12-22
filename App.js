import React from 'react';
import {View, Text, SafeAreaView, StyleSheet} from 'react-native';
function App() {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.appContainer}>
          <Text style={styles.text}>
            Color palets. Lets get the feel in place 😊
          </Text>
        </View>
        <View style={styles.box1}>
          <Text style={styles.textInColor}>#FEA443</Text>
        </View>
        <View style={styles.box2}>
          <Text style={styles.textInColor}>#705E78</Text>
        </View>
        <View style={styles.box3}>
          <Text style={styles.textInColor}>#A5AAA3</Text>
        </View>
        <View style={styles.box4}>
          <Text style={styles.textInColor}>#812F33</Text>
        </View>
        <View style={styles.box5}>
          <Text style={styles.textInColor}>#F3FEB0</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
  },
  appContainer: {
    margin: 20,
  },
  text: {
    fontWeight: 'bold',
  },
  textInColor: {
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
  },
  box1: {
    padding: 20,
    backgroundColor: '#FEA443',
  },
  box2: {
    padding: 20,
    backgroundColor: '#705E78',
  },
  box3: {
    padding: 20,
    backgroundColor: '#A5AAA3',
  },
  box4: {
    padding: 20,
    backgroundColor: '#812F33',
  },
  box5: {
    padding: 20,
    backgroundColor: '#F3FEB0',
  },
});
export default App;
