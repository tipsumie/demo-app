import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {COLORS, ROUTES} from '../constants';
import {Home, Information, Notifications} from '../screens';
import SettingNavigator from './SettingNavigator';
import HomeNavigator from './HomeNavigator';
import Icon from 'react-native-vector-icons/FontAwesome';
import { StyleSheet } from 'react-native';

export type BottomStackParams = {
  Home: undefined;
  Information: undefined;
  Notifications: undefined;
  SettingNavigator: undefined;
};

const Tab = createBottomTabNavigator<BottomStackParams>();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: COLORS.primary,
        tabBarInactiveTintColor:COLORS.dark,
        tabBarStyle: styles.tabBarStyle,
      }}>
      <Tab.Screen
        name={ROUTES.HOME_NAVIGATOR}
        component={HomeNavigator}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color}) => <Icon name="home" size={30} color={color}  />,
        }}
      />
      <Tab.Screen
        name={ROUTES.INFORMATION}
        component={Information}
        options={{
          tabBarLabel: 'Info',
          tabBarIcon: ({color}) => (
            <Icon name="podcast" size={30} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name={ROUTES.NOTIFICATIONS}
        component={Notifications}
        options={{
          tabBarLabel: 'Notifications',
          tabBarIcon: ({color}) => <Icon name="bell" size={30} color={color} />,
        }}
      />
      <Tab.Screen
        name={ROUTES.SETTINGS_NAVIGATOR}
        component={SettingNavigator}
        options={{
          tabBarLabel: 'Setting',
          tabBarIcon: ({color}) => <Icon name="wrench" size={30} color={color} />,
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;

const styles = StyleSheet.create({
  tabBarStyle: {
    position: 'absolute',
    backgroundColor: 'transparent',
  },
})
