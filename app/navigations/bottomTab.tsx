import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';

// bottom navigators
import HomeScreen from '../screens/Home';
import MainStack from './MainStack'
import UserAccountScreen from '../screens/UserAccount';
import NotificationScreen from '../screens/Notification';

type RootStackParamList = {
  Home: undefined;
  UserAccount: undefined;
  Notification: undefined; 
};

const BottomTab = createBottomTabNavigator<RootStackParamList>();

const BottomTabNavigator = () => {
  return (
    <BottomTab.Navigator initialRouteName="Home" tabBarOptions={{
      activeTintColor: '#480d64',
    }}>
      <BottomTab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color}) => <Icon name="home" size={30} color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Notification"
        component={NotificationScreen}
        options={{
          tabBarLabel: 'Notification',
          tabBarIcon: ({color}) => <Icon name="bell" size={30} color={color} />,
        }}
      />
      <BottomTab.Screen
        name="UserAccount"
        component={UserAccountScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({color}) => <Icon name="user" size={30} color={color}/>,
        }}
      />
    </BottomTab.Navigator>
  );
};

export default BottomTabNavigator;
