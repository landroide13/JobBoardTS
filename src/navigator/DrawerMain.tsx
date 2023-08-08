import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import { createDrawerNavigator } from '@react-navigation/drawer';
import Main from '../screens/Main';
import History from '../screens/History';
import ProfileStack from './ProfileStack';

const Drawer = createDrawerNavigator();

const DrawerMain = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Main" component={ProfileStack} />
      <Drawer.Screen name="History" component={History} />
    </Drawer.Navigator>
  )
}

export default DrawerMain
