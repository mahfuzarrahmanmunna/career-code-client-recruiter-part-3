import React, { Suspense } from 'react';
import ApplicationStates from '../Shared/ApplicationStates/ApplicationStates';
import ApplicationList from './ApplicationList';
import useAuth from '../../Hooks/useAuth';
import useApplicationApi from '../../API/useApplicationApi';



const MyApplications = () => {
    const { user } = useAuth()
    const { myApplicationsPromise } = useApplicationApi();
    // console.log('token in the context', user.accessToken)
    return (
        <div className='lg:px-24 px-6 py-12'>
            <ApplicationStates />
            <Suspense fallback={
                <div className="flex justify-center items-center h-screen">
                    <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-blue-500"></div>
                </div>}>
                <ApplicationList
                    myApplicationsPromise={myApplicationsPromise(user?.email)}
                />
            </Suspense>
        </div>
    );
};

export default MyApplications;