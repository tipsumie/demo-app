import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';

// drawer screens
import HomeScreen from '../screens/Home';
import SettingScreen from '../screens/Setting';
import Screen2Screen from '../screens/Screen2';

type RootStackParamList = {
  Home: undefined;
  Setting: undefined;
  Screen1: undefined;
  Screen2: undefined;
};

const Drawer = createDrawerNavigator<RootStackParamList>();

const DrawerNavigator  = () => {
  return (
    <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Setting" component={SettingScreen} />
    </Drawer.Navigator>
  )
}

export default DrawerNavigator 