import { createStackNavigator } from '@react-navigation/stack';
import React from 'react'
import { Home, Profile} from '../screens';
import { ROUTES} from '../constants';

export type SettingStackParams = {
  Home: undefined;
  Profile: undefined;
}


const Stack = createStackNavigator<SettingStackParams>();

const HomeNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false,
    }} initialRouteName={ROUTES.HOME}>
      <Stack.Screen name={ROUTES.HOME} component={Home} />
      <Stack.Screen name={ROUTES.PROFILE} component={Profile} />
    </Stack.Navigator>
  )
}

export default HomeNavigator