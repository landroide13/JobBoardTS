import { StyleSheet, Text, View, Image, TouchableOpacity, Linking } from 'react-native'
import React from 'react'
import { Job } from '../interfaces/JobInterface'

interface Props{
    data: Job,
    url: string
}

const Footer = ({ data, url }: Props) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.likeBtn} onPress={() => {}}>
        <Image
          source={require('../assets/heart.png')}
          resizeMode='contain'
          style={styles.likeBtnImage}
        />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.applyBtn}
        onPress={() => Linking.openURL(url)}      
      >
        <Text style={styles.applyBtnText}>Apply for job</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Footer

const styles = StyleSheet.create({
    container: {
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        padding: 8,
        backgroundColor: "#FFF",
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
      },     
      likeBtn: {
        width: 55,
        height: 55,
        borderWidth: 1,
        borderColor: "#F37A09",
        borderRadius: 12,
        justifyContent: "center",
        alignItems: "center",
      },
      likeBtnImage: {
        width: "40%",
        height: "40%",
        tintColor: "#F37A09",
      },
      applyBtn: {
        flex: 1,
        backgroundColor: "#F37A09",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
        marginLeft: 12,
        borderRadius: 12,
      },
      applyBtnText: {
        fontSize: 20,
        color: 'white',
        //fontFamily: Platform.OS === 'android' ? 'Roboto' : null,
      },
})