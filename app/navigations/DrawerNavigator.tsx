import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {Information, Notifications} from '../screens';
import {ROUTES, COLORS} from '../constants';
import BottomTabNavigator from './BottomTabNavigator';
import Icon from 'react-native-vector-icons/FontAwesome';

export type DrawerStackParams = {
  Home: undefined;
  Information: undefined;
  Notifications: undefined;
};

const Drawer = createDrawerNavigator<DrawerStackParams>();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        drawerActiveBackgroundColor: COLORS.primary,
        drawerActiveTintColor: COLORS.white,
        drawerLabelStyle:{
          marginLeft:-20,
        }
      }}>
      <Drawer.Screen
        name={ROUTES.HOME_TAB}
        component={BottomTabNavigator}
        options={{
          drawerLabel: 'Home',
          drawerIcon: ({color}) => <Icon name="home" size={24} color={color} />,
        }}
      />
      <Drawer.Screen
        name={ROUTES.INFORMATION_DRAWER}
        component={Information}
        options={{
          drawerLabel: 'Information',
          drawerIcon: ({color}) => <Icon name="podcast" size={24} color={color} />,
        }}
      />
      <Drawer.Screen
        name={ROUTES.NOTIFICATIONS_DRAWER}
        component={Notifications}
        options={{
          drawerLabel: 'Notifications',
          drawerIcon: ({color}) => <Icon name="bell" size={24} color={color} />,
        }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
