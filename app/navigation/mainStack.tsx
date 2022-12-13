import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';


// screen navigators
import HomeScreen from '../screens/Home';
import Screen1Screen from '../screens/Screen1';
import Screen2Screen from '../screens/Screen2';


type MainStackParamList = {
  Screen1: undefined;
  Screen2: undefined;
};

const Stack = createNativeStackNavigator<MainStackParamList>()

const MainStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Screen1" component={Screen1Screen} />
        <Stack.Screen name="Screen2" component={Screen2Screen} />
    </Stack.Navigator>
  )
}

export default MainStack;