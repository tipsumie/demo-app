import { Dimensions, Image, ImageBackground, StyleSheet, View } from 'react-native'
import React from 'react'
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'
import {IMAGES, COLORS} from '../constants';

const {width} = Dimensions.get('screen')


const CustomDrawer = (props: any) => {
  return (
    <DrawerContentScrollView {...props}>
      <ImageBackground source={IMAGES.bgPattern} style={styles.backgroundImage} >
        <Image source={IMAGES.user} style={styles.userImage} />
      </ImageBackground>
      <View style={styles.drawerList}>
        <DrawerItemList {...props}/>  
      </View>
    </DrawerContentScrollView>
  )
}

export default CustomDrawer

const styles = StyleSheet.create({
  backgroundImage:{
    height:140,
  },
  userImage:{
    width: 100,
    height:100,
    borderRadius: 50,
    borderColor: COLORS.white,
    borderWidth:2,
    left: width/2 - 100,
    top:50,
  },
  drawerList: {
    top:50,
  }
})