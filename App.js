import React from 'react';

import { NavigationContainer } from '@react-navigation/native';

import BottomTabs from './src/Components/navigation/BottomTabs';

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
