import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'

import { StackScreenProps } from '@react-navigation/stack'

interface Props extends StackScreenProps<any , any>{}

const SignIn = ({ navigation }: Props) => {
  return (
    <View>
      <Text>Sign In</Text>

      <Button  title='Sign In' onPress={() => navigation.navigate('Profile')}/>
    </View>
  )
}

export default SignIn

