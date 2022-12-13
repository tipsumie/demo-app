import React from 'react';
import {
  useColorScheme,
} from 'react-native';
import { Navigation } from './app/navigation';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
        <>
          <Navigation />
        </>
  );
};


export default App;
