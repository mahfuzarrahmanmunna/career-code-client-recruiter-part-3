import React, { Suspense } from 'react';
import MyPostedJobList from './MyPostedJobList';
import useAuth from '../../Hooks/useAuth';
import { JobPromisedByMyPostedJob } from '../../API/Job/JobAPI';

const MyPostedJob = () => {
    const { user } = useAuth()
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