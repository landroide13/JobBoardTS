import { StyleSheet, Text, View, TouchableOpacity, Platform } from 'react-native';
import React from 'react';

interface Props{
    name: string,
    activeTab: string,
    onHandleSearchType: any
}

const BtnTab = ({ name, activeTab, onHandleSearchType }: Props) => {
  return (
    <TouchableOpacity
      style={{...styles.btn , backgroundColor: name === activeTab ? '#F37A09' : "#F3F4F8" }}
      onPress={onHandleSearchType}
    >
    <Text 
      style={{ ...styles.btnText, color: name === activeTab ? "white" : "#AAA9B8" }}
    >{name}</Text>
  </TouchableOpacity>
  )
}

export default BtnTab

const styles = StyleSheet.create({
   
     btn:{
        paddingVertical: 10,
        paddingHorizontal: 8,
        borderRadius: 12,
        marginLeft: 2,
        shadowColor: '#efefef',
      },
      btnText:{
        //fontFamily: Platform.OS === 'android'? 'Roboto' : null,
        fontSize: 16,
        fontWeight: '900'
      },
})