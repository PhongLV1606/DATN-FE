import axios from 'axios';
import { IUser } from '~/@types/user.type';

export const getContentType = () => ({
    'Content-Type': 'application/json',
});

export const getAccessToken = () => {
    return localStorage.getItem('access_token');
};
export const getRefreshToken = () => {
    return localStorage.getItem('refresh_token');
};

export const setUserInfo = (data: IUser) => {
    return localStorage.setItem('user', JSON.stringify(data));
};
export const setAccessToken = (token: string) => {
    return localStorage.setItem('access_token', token);
};

const axiosOptions = {
    baseURL: import.meta.env.VITE_REACT_API_URL,
    withCredentials: true,
};
const instance = axios.create(axiosOptions);

instance.interceptors.request.use(
    (config) => {
        const accessToken = getAccessToken();

        if (config && config.headers && accessToken) {
            config.headers.Authorization = `Bearer ${accessToken}`;
        }

        return config;
    },
    (error) => Promise.reject(error)
);

instance.interceptors.response.use(
    (config) => config,
    async (error) => {
        throw error;
    }
);

export default instance;
