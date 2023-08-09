import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { Job } from '../interfaces/JobInterface';
import { useNavigation } from '@react-navigation/native';

interface Props{
    job: Job
}

const JobCard = ({ job }: Props) => {

  const navigation = useNavigation<any>();

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('Detail', job)}>
        <Image source={{ uri: job.employer_logo! }} resizeMode='contain' style={styles.logoImage} />
      </TouchableOpacity>
      <View style={styles.textContainer}>
        <Text style={styles.employer}>{ job.employer_name }</Text>
        <Text>{ job.job_title }</Text>
        <Text>{ job.job_country }</Text>
      </View>
    </View> 
  )
}

export default JobCard

const styles = StyleSheet.create({

    container:{
      height: '65%',
      padding: 11,
      flexDirection: 'row',
      alignSelf:'center',
      backgroundColor: '#d3d3d3',
      marginVertical: 8,
      marginHorizontal: 8,
      borderRadius: 8
    },
  
    textContainer:{
      marginVertical: 7,
      marginHorizontal: 7,
      flexDirection:'column',
      justifyContent:'center',
      alignItems: 'center'
    },
  
    employer:{
      textAlign: 'center',
      justifyContent:'center',
      fontSize: 15,
      fontWeight: 'bold'
    },
  
    logoImage: {
      width: 55,
      height: 55,
      borderRadius:15
    },
  })