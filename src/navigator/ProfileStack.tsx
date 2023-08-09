import { StyleSheet, Text, View } from 'react-native'
import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import Main from '../screens/Main';
import Detail from '../screens/Detail';
import { Job } from '../interfaces/JobInterface';

export type ProfileStackParams = {
    Main: undefined,
    Detail: Job
}

const Stack = createStackNavigator<ProfileStackParams>();

const ProfileStack = () => {
  return (
    <Stack.Navigator 
        screenOptions={{
            headerShown: false
        }}
    >
      <Stack.Screen name="Main" component={Main} />
      <Stack.Screen name="Detail" component={Detail} />
    </Stack.Navigator>
  )
}

export default ProfileStack

const styles = StyleSheet.create({})