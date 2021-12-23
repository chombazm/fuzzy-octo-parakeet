import React from 'react';
import {View, Text, SafeAreaView, StyleSheet} from 'react-native';
import ColorBox from './components/ColorBox';
function App() {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.appContainer}>
          <Text style={styles.text}>
            Color palets. Lets get the feel in place 😊
          </Text>
        </View>
        <ColorBox text="#FEA443" hexCode="#FEA443" />
        <ColorBox text="#705E78" hexCode="#705E78" />
        <ColorBox text="#A5AAA3" hexCode="#A5AAA3" />
        <ColorBox text="#812F33" hexCode="#812F33" />
        <ColorBox text="#F3FEB0" hexCode="#F3FEB0" />
        <ColorBox />
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
});
export default App;
