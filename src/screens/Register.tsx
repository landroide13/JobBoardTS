import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'

import { StackScreenProps } from '@react-navigation/stack'

interface Props extends StackScreenProps<any , any>{}

const Register = ({ navigation }: Props) => {
  return (
    <View>
      <Text>Register</Text>

      <Button  title='Register' onPress={() => navigation.navigate('Profile')}/>
      <Button  title='SignIn' onPress={() => navigation.navigate('Signin')}/>
    </View>
  )
}

export default Register

const styles = StyleSheet.create({})