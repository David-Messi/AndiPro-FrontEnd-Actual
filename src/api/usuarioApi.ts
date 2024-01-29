

import axios from 'axios';
import { getEnvVariables } from '../helpers';


const { VITE_APP_API_URL: url } = getEnvVariables();



const usuarioApi = axios.create({
    baseURL: `${url}/usuario`
});



// Configurar Interceptores
usuarioApi.interceptors.request.use( (config: any) => {

    const token = localStorage.getItem('token');

    config.headers = {
        ...config.headers,
        'Authorization': `Bearer ${token}`
    }

    return config;
})





export default usuarioApi;