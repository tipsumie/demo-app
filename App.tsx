import React from 'react';
import { Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import AuthNavigator from './app/navigations/AuthNavigator';


const App = () => {
  const linking = {
    prefixes: [
      'vajira://vajira','vajira://'
    ],
    config: {
      screens: {
        ForgotPassword: 'forgotPassword',
        // Profile : 'profile',
        // Home: {
        //   screens: {
        //     Profile: 'profile',
        //   },
        },
    },
  };

  return (
    <NavigationContainer linking={linking} fallback={<Text>Loading...</Text>}>
      <AuthNavigator/>
    </NavigationContainer>
  );
};


export default App;
