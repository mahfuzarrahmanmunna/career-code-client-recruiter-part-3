import React from 'react';
import useAxiosSecure from '../Hooks/useAxiosSecure';

const useJobApi = () => {
    const axiosSecure = useAxiosSecure();

    const JobPromisedByMyPostedJob = (email) => {
        return axiosSecure.get(`jobs?email=${email}`)
            .then(res => res.data)
    }
    return {
        JobPromisedByMyPostedJob
    }
};

export default useJobApi;