import { StyleSheet, Text, View } from 'react-native';
import React, { useState, useEffect } from 'react';
import { Job } from '../interfaces/JobInterface';
import JobDB from '../api/JobDB';

interface JobState {
    jobsType: Job[]
}

const useJobType = (type: string) => {

    const [loading, setisLoading] = useState(true);

    const [JobState, setJobsState] = useState<JobState>({
        jobsType:[]
    });

    const getJobs = async() => {

        const Jobs = JobDB.get(`/types?job_employment_type=${type}`);

        const res = await Promise.all([Jobs]);

        setJobsState({ jobsType: res[0].data });

        setisLoading(false);
    }

    useEffect(() => {
        getJobs();
    }, [type])
    
  return {
    ...JobState,
    loading
  }
}

export default useJobType

const styles = StyleSheet.create({})