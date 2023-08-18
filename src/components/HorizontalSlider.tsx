import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'
import JobCard from './JobCard';
import { Job } from '../interfaces/JobInterface';

interface Props{
  jobs: Job[]
}

const HorizontalSlider = ({ jobs }: Props) => {

  return (
    <View>  
      <FlatList
        data={ jobs }
        renderItem={({ item } ) => (

          <JobCard job={ item } />

        )}
        keyExtractor={(item) => item._id.toString() }
        horizontal={ true }
      />
    </View>
  )
}

export default HorizontalSlider

const styles = StyleSheet.create({
  popularContainer:{
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'flex-start'
},
})