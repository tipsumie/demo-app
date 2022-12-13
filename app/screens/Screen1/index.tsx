import { View, Text, Button } from 'react-native'
import React from 'react'
import { NativeStackHeaderProps } from '@react-navigation/native-stack'
import { NativeStackScreenProps } from '@react-navigation/native-stack';

type RootStackParamList = {
  Screen1: undefined;
  Home: undefined;
};

type Props = NativeStackScreenProps<RootStackParamList, 'Screen1'>;

const Screen1 = ({ route, navigation }: Props) => {
  return (
    <View>
      <Text>Screen1</Text>
      <Button title='Go to Home' onPress={()=> navigation.navigate('Home')}/>
    </View>
  )
}

export default Screen1