import { StyleSheet, Text, View } from 'react-native';
import React, { useState, useEffect } from 'react';
import { Job } from '../interfaces/JobInterface';
import JobDB from '../api/JobDB';

interface JobState {
    jobMode: Job[]
}

const useJobMode = (type: boolean) => {

    const [loads, setisLoading] = useState(true);

    const [JobModeState, setJobModeState] = useState<JobState>({
        jobMode:[]
    });

    const getJobs = async() => {

        const Jobs = JobDB.get(`/types?job_is_remote=${type}`);

        const res = await Promise.all([Jobs]);

        setJobModeState({ jobMode: res[0].data });

        setisLoading(false);
    }

    useEffect(() => {
        getJobs();
    }, [])

  return {
    ...JobModeState,
    loads
  }
}

export default useJobMode;
