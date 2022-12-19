import { createStackNavigator } from '@react-navigation/stack';
import React from 'react'
import { Settings, SettingsDetail} from '../screens';
import { ROUTES} from '../constants';

export type SettingStackParams = {
  Settings: undefined;
  SettingsDetail: undefined;
}


const Stack = createStackNavigator<SettingStackParams>();

const SettingNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false,
    }} initialRouteName={ROUTES.LOGIN}>
      <Stack.Screen name={ROUTES.SETTINGS} component={Settings} />
      <Stack.Screen name={ROUTES.SETTINGS_DETAIL} component={SettingsDetail} />
    </Stack.Navigator>
  )
}

export default SettingNavigator