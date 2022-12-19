import { createStackNavigator } from '@react-navigation/stack';
import React from 'react'
import { Register, Login, ForgotPassword } from '../screens';
import { ROUTES, COLORS } from '../constants';
import DrawerNavigator from './DrawerNavigator';

export type StackParams = {
  Login: undefined;
  Register: undefined;
  ForgotPassword: undefined;
  BottomTabNavigator: undefined;
  ROUTES : {
    LOGIN: string;
    REGISTER: string;
    FORGOT_PASSWORD: string;
    HOME: string;
  };
}

const Stack = createStackNavigator<StackParams>();

const AuthNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{
      headerTintColor: COLORS.white,
      headerStyle: {
      backgroundColor: COLORS.primary,
    }}} initialRouteName={ROUTES.LOGIN}>
      <Stack.Screen name={ROUTES.LOGIN} component={Login} />
      <Stack.Screen name={ROUTES.REGISTER} component={Register} />
      <Stack.Screen name={ROUTES.FORGOT_PASSWORD} component={ForgotPassword} />
      <Stack.Screen name={ROUTES.HOME_DRAWER} component={DrawerNavigator} options={{headerShown: true}} />
    </Stack.Navigator>
  )
}

export default AuthNavigator






