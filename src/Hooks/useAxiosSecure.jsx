import axios from 'axios';
import React from 'react';
import useAuth from './useAuth';

const axiosInstance = axios.create({
    baseURL: 'https://career-code-server-for-recruiter-pa-tau.vercel.app/',
    withCredentials: true
})

const useAxiosSecure = () => {
    const { user, logOutUser } = useAuth()
    axiosInstance.interceptors.request.use((config) => {
        config.headers.authorization = `Bearer ${user.accessToken}`;
        return config;
    })

    // REsponse Interceptor
    axiosInstance.interceptors.response.use(response => {
        return response
    }, error => {
        console.log(error);
        if (error.status === 401 || error.status === 403) {
            return logOutUser().then(() => {
                console.log('sign out user for 401 user code');
            })
                .catch(err => {
                    console.log(err);
                })
        }
    })
    return axiosInstance;
};

export default useAxiosSecure;