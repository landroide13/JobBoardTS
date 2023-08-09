import { StyleSheet, Text, 
        TouchableOpacity, View, 
        Image, TextInput, FlatList, 
        ActivityIndicator, 
        StatusBar, SafeAreaView } from 'react-native';
import React, { useState, useEffect } from 'react';
import { StackScreenProps } from '@react-navigation/stack';
import JobCard from '../components/JobCard';
import useJobs from '../hooks/useJobs';
import HorizontalSlider from '../components/HorizontalSlider';
import { DrawerScreenProps } from '@react-navigation/drawer';

import Icon from 'react-native-vector-icons/FontAwesome';

import { colors } from '../themes/AppThemes';

// interface Props extends StackScreenProps<any , any>{};

interface Props extends DrawerScreenProps<any , any>{}

const Main = ({ navigation }: Props) => {

  const [searchTerm, setSearchTerm] = useState("");

  const [selectedJob, setSelectedJob] = useState();

  const { isLoading, jobs } = useJobs();

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <View style={styles.header}>
            <View style={ styles.IdHeader }>
              <Image style={styles.userImg} source={require('../assets/profile.jpg')} />
              <Text style={{ ...styles.user, marginLeft: 13}}>Hello: </Text>
            </View>          
            <TouchableOpacity style={styles.buttonHeader} onPress={() => navigation.toggleDrawer()}>
                <Icon name="bars" size={25} color={ colors.white }  />  
            </TouchableOpacity>
        </View>

        <Text style={styles.title}>Find your Perfect Job</Text>

        <View style={styles.inputContainer}>
            <TextInput 
                placeholder='Find a Job'
                onChangeText={(text) => setSearchTerm(text)}
                // value={searchTerm}
                style={styles.inputSearch}
            />
            <TouchableOpacity style={styles.buttonSearch} onPress={() => { }}>
                <Icon name="map-pin" size={25} color={ colors.white }  />  
            </TouchableOpacity>
        </View>

        <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.buttonOptions} onPress={() =>{}}>
                <Text style={styles.options}>Full-Time</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttonOptions} onPress={() =>{}}>
                <Text style={styles.options}>Part-Time</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttonOptions} onPress={() =>{}}>
                <Text style={styles.options}>Contactor</Text>
            </TouchableOpacity>
        </View>

        <Text style={styles.title}>Popular Jobs</Text>

        <View style={styles.popularContainer}>
        {
          isLoading ? ( <ActivityIndicator size="large" /> ):
            
          <HorizontalSlider jobs={ jobs }  />
        } 
        </View>

        <Text style={styles.title}>Near by Jobs</Text>
        
        <View style={styles.nearByContainer}>
        {
          isLoading ? ( <ActivityIndicator size="large" /> ):
                
          <HorizontalSlider jobs={ jobs }  />
        } 
        </View>

      </View>
    </SafeAreaView>
  )
}

export default Main

const styles = StyleSheet.create({
  container:{
      flex: 1,
      justifyContent: 'flex-start',
      alignItems: 'center',
      backgroundColor: 'white',
      padding: 8,
      //marginTop: StatusBar.currentHeight || 0,
  },
  header:{
      flexDirection: 'row',
      justifyContent:'space-between',
  },

  IdHeader:{
    flexDirection: 'row',
  },

  user:{
      fontSize:18,
      alignSelf:'center'
  },
  userImgSearch:{
      width: 30,
      height: 30,
      tintColor: 'white'
  },
  userImg:{
      width: 50,
      height: 50,
      borderRadius: 10,
  },
  title:{
      fontSize:25,
      alignSelf:'flex-start',
      marginTop: 6
  },
  inputContainer:{
      flexDirection: 'row',
      justifyContent: 'space-between'
  },
  inputSearch:{
      backgroundColor: '#d3d3d3',
      width: '75%',
      paddingHorizontal: 15,
      paddingVertical: 10,
      borderRadius: 10,
      alignSelf:'center',
      marginTop: 5
  },
  buttonContainer:{
      flexDirection:'row',
      justifyContent:'space-around',
      marginTop: 20
  },
  buttonOptions:{
      backgroundColor:'white',
      padding: 15,
      borderColor: 'black',
      borderWidth: 2,
      borderRadius: 15
  },
  options:{
      fontSize: 15,
      fontWeight: 'bold'
  },
  buttonSearch:{
      backgroundColor: '#F37A09',
      width: '18%',
      borderRadius: 10,
      alignItems: 'center',
      justifyContent: 'center'
  },
  buttonHeader:{
      backgroundColor: 'green',
      width: '18%',
      borderRadius: 10,
      alignItems: 'center',
      justifyContent: 'center'
  },

  popularContainer:{
      flexDirection: 'row',
      justifyContent: 'center',
      alignContent: 'flex-start'
  },

  nearByContainer:{
      flex: 1,
      flexDirection: 'column',
  }
})