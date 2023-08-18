import { StyleSheet, Text, View } from 'react-native'
import React, { useState, useEffect } from 'react';

import JobDB from '../api/JobDB';
import { Job } from '../interfaces/JobInterface';

interface JobState {
    jobs: Job[]
}

const useJobs = () => {

    const [isLoading, setisLoading] = useState(true);

    const [JobState, setJobsState] = useState<JobState>({
        jobs:[]
    });

    const getJobs = async () =>{
      const allJobs = JobDB.get('/');

      const res = await Promise.all([allJobs])

      setJobsState({ jobs: res[0].data });

      setisLoading(false);
    } 

    useEffect(() => {
     getJobs();
    }, [])
    

  return {
    ...JobState, 
    isLoading
  }
}

export default useJobs
