import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { COLORS, ROUTES } from '../constants';
import { Home, Information, Notifications} from '../screens';
import SettingNavigator from './SettingNavigator';

export type BottomStackParams = {
  Home: undefined;
  Information: undefined;
  Notifications: undefined;
  SettingNavigator: undefined;
}

const Tab = createBottomTabNavigator<BottomStackParams>();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown:false, tabBarActiveTintColor: COLORS.primary}}>
      <Tab.Screen name={ROUTES.HOME} component={Home} />
      <Tab.Screen name={ROUTES.INFORMATION} component={Information} />
      <Tab.Screen name={ROUTES.NOTIFICATIONS} component={Notifications} />
      <Tab.Screen name={ROUTES.SETTINGS_NAVIGATOR} component={SettingNavigator} options={{tabBarLabel: 'Setting'}}/>
    </Tab.Navigator>
  );
}

export default BottomTabNavigator