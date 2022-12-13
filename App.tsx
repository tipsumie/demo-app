import React from 'react';
import {
  useColorScheme,
} from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Navigation } from './app/navigation';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
        <SafeAreaProvider>
          <Navigation />
        </SafeAreaProvider>
  );
};


export default App;
