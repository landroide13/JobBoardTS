
import React from 'react'

import { createStackNavigator } from '@react-navigation/stack';
import SignIn from '../screens/SignIn';
import Register from '../screens/Register';
import DrawerMain from './DrawerMain';

const Stack = createStackNavigator();

const GeneralStack = () => {
  return (
    <Stack.Navigator 
        // screenOptions={{
        //     headerShown: false
        // }}
    >
      <Stack.Screen name="Signin" component={SignIn} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="Profile" component={DrawerMain} />
    </Stack.Navigator>
  )
}

export default GeneralStack
