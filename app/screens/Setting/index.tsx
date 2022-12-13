import { View, Text, Button } from 'react-native'
import React from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack';

type RootStackParamList = {
  Setting: undefined;
};

type Props = NativeStackScreenProps<RootStackParamList, 'Setting'>;

const Setting = ({ route, navigation }: Props) => {
  return (
    <View>
      <Text>Setting</Text>
    </View>
  )
}

export default Setting