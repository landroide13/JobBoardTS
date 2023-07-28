import 'react-native-gesture-handler';

import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import { NavigationContainer } from '@react-navigation/native';
import GeneralStack from './src/navigator/GeneralStack';

const App = () => {
  return (
    <NavigationContainer>
      <GeneralStack/>
    </NavigationContainer>
  )
}

export default App

