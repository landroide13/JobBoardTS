import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

interface Props{
  title: string,
  points: string[]
}

const Responsabilities = ({ title, points }: Props) => {
  return (
    <View style={styles.container}>
    <Text style={styles.title}>{title}:</Text>

    <View style={styles.pointsContainer}>
      {points.map((item, index) => (
        <View style={styles.pointWrapper} key={item + index}>
          <View style={styles.pointDot} />
          <Text style={styles.pointText}>{item}</Text>
        </View>
      ))}
    </View>
  </View>
  )
}

export default Responsabilities

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    backgroundColor: "#FFF",
    borderRadius: 12,
    padding: 10,
    marginBottom: 35
  },
  title: {
    fontSize: 24,
    color: 'grey',
    //fontFamily: Platform.OS === 'android'? 'Roboto' : null,
  },
  pointsContainer: {
    marginVertical: 8,
  },
  pointWrapper: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    marginVertical: 5,
  },
  pointDot: {
    width: 6,
    height: 6,
    borderRadius: 6,
    backgroundColor: 'grey',
    marginTop: 6,
  },
  pointText: {
    fontSize: 18,
    color: 'grey',
    //fontFamily: Platform.OS === 'android'? 'Roboto' : null,
    marginLeft: 5,
  },
})