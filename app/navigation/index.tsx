import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createStackNavigator } from '@react-navigation/stack';

import BottomTabNavigator from './bottomTab' 
import DrawerNavigator from './drawer'
import MainStack from './MainStack'

// screen navigators
import HomeScreen from '../screens/Home';
import Screen1Screen from '../screens/Screen1';
import Screen2Screen from '../screens/Screen2';


type RootStackParamList = {
  Home: undefined;
  Root: undefined;
  Drawer: undefined;
};

const RootStack = createStackNavigator<RootStackParamList>();

const RootNavigator = () => {
  return (
    <RootStack.Navigator initialRouteName='Home'>
       <RootStack.Screen name="Root" component={BottomTabNavigator}  options={{headerShown: false}} />
        <RootStack.Screen name="Home" component ={HomeScreen} />
        {/* <RootStack.Screen name="Screen1" component={Screen1Screen} />
        <RootStack.Screen name="Screen2" component={Screen2Screen} /> */}
        {/* <RootStack.Screen name="Drawer" component={DrawerNavigator} options={{headerShown: false}}/> */}
        {/* <RootStack.Screen name="ScreenStack" component={ScreenStack}  options={{headerShown: false}} /> */}
      </RootStack.Navigator>
  )
}

export const Navigation = () => {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  )
}



