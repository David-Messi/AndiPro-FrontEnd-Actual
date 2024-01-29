

import axios from 'axios';
import { getEnvVariables } from '../helpers';


const { VITE_APP_API_URL: url } = getEnvVariables();



const authApi = axios.create({
    baseURL: `${url}/token`
});



// Configurar Interceptores
authApi.interceptors.request.use( (config: any) => {

    // const token = localStorage.getItem('token');
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjk0Nzk0Mzk2LCJpYXQiOjE2OTQ3MDc5OTYsImp0aSI6IjMyMTYxMGM1NmQyYjQyOGI4NDNjYmM4NzAyYTVlZTI4IiwidXNlcl9pZCI6MX0.Y0VOI2VHEnN6Nm1LJtT61mnvdLIrEbuz0BmhRwPa5hg';

    config.headers = {
        ...config.headers,
        'Authorization': `Bearer ${token}`
    }

    return config;
})





export default authApi;