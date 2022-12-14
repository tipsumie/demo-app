import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Text, SafeAreaView } from 'react-native';

import AuthNavigator from './app/navigations/AuthNavigator';


const App = () => {
  return (
    <NavigationContainer>
      <AuthNavigator/>
    </NavigationContainer>
  );
};


export default App;
