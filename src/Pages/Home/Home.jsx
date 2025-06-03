import React from 'react';
import Banner from '../Shared/Banner/Banner';
import HotsJob from './HotsJob';
const jobsPromise = fetch('https://career-code-server-for-recruiter-pa-tau.vercel.app/jobs').then(res => res.json())

const Home = () => {

    return (
        <div>
            <Banner />
            <HotsJob jobsPromise={jobsPromise} />
        </div>
    );
};

export default Home;