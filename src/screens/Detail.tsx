import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { StackScreenProps } from '@react-navigation/stack';
import { ProfileStackParams } from '../navigator/ProfileStack';

interface Props extends StackScreenProps<ProfileStackParams, 'Detail'>{};

const Detail = ({ route }: Props) => {
  return (
    <View>
      <Text>Detail</Text>
    </View>
  )
}

export default Detail

const styles = StyleSheet.create({})