import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createStackNavigator } from '@react-navigation/stack';

import BootomTabNavigator from './bottomTab' 
import DrawerNavigator from './drawer'

// screen navigators
import HomeScreen from '../screens/Home';
import Screen1Screen from '../screens/Screen1';
import Screen2Screen from '../screens/Screen2';


type RootStackParamList = {
  Home: undefined;
  Root: undefined;
  Drawer: undefined;
  MainStack: MainStackParamList;
  HomeStack:{
    name: string;
  };
};


type MainStackParamList = {
  Screen1: undefined;
  Screen2: undefined;
  HomeStack:{
    name: string;
  };
};
const MainStack = createNativeStackNavigator<MainStackParamList>()

const HomeScreenStack = () => {
  return (
    <MainStack.Navigator>
      <MainStack.Screen name="Screen1" component={Screen1Screen} />
        <MainStack.Screen name="Screen2" component={Screen2Screen} />
    </MainStack.Navigator>
  )
}

const Stack = createStackNavigator<RootStackParamList>();

const RootNavigator = () => {
  return (
    <Stack.Navigator initialRouteName='Home'>
        {/* <Stack.Screen name="Home" component ={HomeScreen} /> */}
        {/* <Stack.Screen name="Screen1" component={Screen1Screen} />
        <Stack.Screen name="Screen2" component={Screen2Screen} /> */}
        {/* <Stack.Screen name="Drawer" component={DrawerNavigator} options={{headerShown: false}}/> */}
        <Stack.Screen name="Root" component={BootomTabNavigator}  options={{headerShown: false}} />
        <Stack.Screen name="HomeStack" component={HomeScreenStack}  options={{headerShown: false}} />
      </Stack.Navigator>
  )
}

export const Navigation = () => {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  )
}



