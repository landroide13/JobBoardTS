import { StyleSheet, Text, View, ScrollView, RefreshControl, TouchableOpacity } from 'react-native';
import React, { useState, useCallback } from 'react';
import { StackScreenProps } from '@react-navigation/stack';
import { ProfileStackParams } from '../navigator/ProfileStack';
import Qualifications from '../components/Tabs/Qualifications';
import About from '../components/Tabs/About';
import Responsabilities from '../components/Tabs/Responsabilities';
import Tab from '../components/Tabs/Tab';
import Company from '../components/Company';
import Footer from '../components/Footer';

import Icon from 'react-native-vector-icons/FontAwesome';

interface Props extends StackScreenProps<ProfileStackParams, 'Detail'>{};

const Detail = ({ route, navigation }: Props) => {

  const [refreshing, setRefreshing] = useState(false);

  const job = route.params;

  const tabs = ["About", "Qualifications", "Responsabilities"];

  const [activeTab, setActiveTab] = useState(tabs[0]);

  const onRefresh = useCallback(() => {    
    setRefreshing(true);
    //refetch()
    setRefreshing(false)
  }, []); 

  const displayTabContent = () => {
    switch (activeTab) {
      case "Qualifications":
        return (
          <Qualifications
            title='Qualifications'
            points={job.Qualifications ?? ["N/A"]}
          />
        );

      case "About":
        return (
          <About info={job.job_description ?? "No data provided"} />
        );

      case "Responsabilities":
        return (
          <Responsabilities
            title='Responsabilities'
            points={job.Responsibilities ?? ["N/A"]}
          />
        );

      default:
        return null;
    }
  };

  return (
    <>
      <ScrollView showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} /> 
        }
        >

        <Company
          companyLogo={job.employer_logo!}
          jobTitle={job.job_title}
          companyName={job.employer_name}
          location={job.job_country}
        />

        <Tab
          tabs={tabs}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />

        { displayTabContent() }

      </ScrollView>  

      <Footer data={job}  url={job?.job_apply_link ?? 'https://careers.google.com/jobs/results/'} />

      <TouchableOpacity style={ styles.backBtn } onPress={() => navigation.pop()} >
        <Icon name='arrow-left' color='white' size={ 38 } />
      </TouchableOpacity>
    </>
  )
}

export default Detail

const styles = StyleSheet.create({

  backBtn:{
    position: 'absolute',
    zIndex: 100,
    elevation: 9,
    top: 30,
    left: 5,
    backgroundColor: '#F37A09',
    borderRadius: 50,
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center'
  }

})