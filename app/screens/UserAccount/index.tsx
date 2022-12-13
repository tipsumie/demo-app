import { View, Text, Button } from 'react-native'
import React from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack';

type RootStackParamList = {
  UserAccount: undefined;
};

type Props = NativeStackScreenProps<RootStackParamList, 'UserAccount'>;

const UserAccount = ({ route, navigation }: Props) => {
  return (
    <View>
      <Text>UserAccount</Text>
    </View>
  )
}

export default UserAccount