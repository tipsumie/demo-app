import { View, Text, Button } from 'react-native'
import React from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack';

type RootStackParamList = {
  Notification: undefined;
};

type Props = NativeStackScreenProps<RootStackParamList, 'Notification'>;

const Notification = ({ route, navigation }: Props) => {
  return (
    <View>
      <Text>Notification</Text>
    </View>
  )
}

export default Notification