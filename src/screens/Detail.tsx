import { StyleSheet, Text, View, ScrollView, RefreshControl } from 'react-native';
import React, { useState, useCallback } from 'react';
import { StackScreenProps } from '@react-navigation/stack';
import { ProfileStackParams } from '../navigator/ProfileStack';
import Qualifications from '../components/Tabs/Qualifications';
import About from '../components/Tabs/About';
import Responsabilities from '../components/Tabs/Responsabilities';
import Tab from '../components/Tabs/Tab';
import Company from '../components/Company';
import Footer from '../components/Footer';

interface Props extends StackScreenProps<ProfileStackParams, 'Detail'>{};

const Detail = ({ route }: Props) => {

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
    </>
  )
}

export default Detail

const styles = StyleSheet.create({})