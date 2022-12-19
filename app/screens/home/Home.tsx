import {StyleSheet, Text, View, SafeAreaView, TouchableOpacity, Linking} from 'react-native';
import React from 'react';
import {COLORS} from '../../constants';
import { useNavigation } from '@react-navigation/native';

const Home = () => {
  const navigation = useNavigation()

  return (
    <SafeAreaView
    style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: COLORS.bgColor,
    }}>
    <TouchableOpacity
      onPress={async () => await Linking.openURL('vajira://forgotPassword')}
      style={styles.button}
      activeOpacity={0.8}>
      <Text style={styles.buttonText}>Test Linking</Text>
    </TouchableOpacity>
  </SafeAreaView>
  );
};

export default Home;


const styles = StyleSheet.create({
  button: {
    backgroundColor: COLORS.primary,
    padding: 17,
    margin: 10,
    borderRadius: 5,
    fontSize: 18,
    width: 180,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});