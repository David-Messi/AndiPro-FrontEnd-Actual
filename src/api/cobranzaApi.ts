

import axios from 'axios';
import { getEnvVariables } from '../helpers';


const { VITE_APP_API_URL: url } = getEnvVariables();



const cobranzaApi = axios.create({
    baseURL: `${url}/cobranza`
});



// Configurar Interceptores
cobranzaApi.interceptors.request.use( (config: any) => {

    const token = localStorage.getItem('token');

    config.headers = {
        ...config.headers,
        'Authorization': `Bearer ${token}`
    }

    return config;
})





export default cobranzaApi;