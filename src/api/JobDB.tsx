import axios from 'axios';

import { Platform } from 'react-native';

const JobDB = axios.create({
    baseURL: Platform.OS === 'android'? 'http://10.0.2.2:3000/api/jobs' : 'http://localhost:3000/api/jobs'
})

export default JobDB

