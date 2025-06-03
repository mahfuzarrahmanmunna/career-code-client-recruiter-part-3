import React, { Suspense } from 'react';
import MyPostedJobList from './MyPostedJobList';
import useAuth from '../../Hooks/useAuth';
import useJobApi from '../../API/useJobApi';

const MyPostedJob = () => {
    const { user } = useAuth();
    const { JobPromisedByMyPostedJob } = useJobApi();
    return (
        <div className='my-12'>
            <h1>My posted Job </h1>
            <Suspense fallback={'Loading...'}>
                <MyPostedJobList JobPromisedByMyPostedJob={JobPromisedByMyPostedJob(user?.email)} />
            </Suspense>
        </div>
    );
};

export default MyPostedJob;