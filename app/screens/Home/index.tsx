import { View, Text, Button } from 'react-native'
import React from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { NativeStackHeaderProps } from '@react-navigation/native-stack'

type RootStackParamList = {
  Home: undefined;
  Screen1: undefined;
  Screen2: undefined;
};

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

const Home = ({ route, navigation }: Props) => {
  return (
    <View>
      <Text>Home</Text>
      <Button title='Go to Screen1' onPress={()=> navigation.navigate('Screen1')}/>
      <Button title='Go to Screen2' onPress={()=> navigation.navigate('Screen2')}/>
    </View>
  )
}

export default Home