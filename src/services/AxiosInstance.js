import axios from 'axios';
import { store } from '../store/store';
const state = store.getState();
const axiosInstance = axios.create({
    // headers: {
    //     'x-token': state.auth.auth.idToken
    // },
    baseURL: `https://dataseed.hollox.finance`,
});

axiosInstance.interceptors.request.use((config) => {
    
    const state = store.getState();
    const token = state.auth.auth.idToken;
    config.params = config.params || {};
    // config.params['auth'] = token;
    // config.params['x-token'] = token;
	//console.log(config);
    config.headers =  config.headers || {};
    config.headers['x-token'] = token;
    return config;
});

export default axiosInstance;
