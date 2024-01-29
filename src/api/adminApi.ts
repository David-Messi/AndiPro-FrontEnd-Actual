
import axios from 'axios';
import { getEnvVariables } from '../helpers';


const { VITE_APP_API_URL: url } = getEnvVariables();



const adminApi = axios.create({
    baseURL: `${url}/conjunto`
});



// Configurar Interceptores
adminApi.interceptors.request.use( (config: any) => {

    const token = localStorage.getItem('token');

    config.headers = {
        ...config.headers,
        'Authorization': `Bearer ${token}`
    }

    return config;
})





export default adminApi;