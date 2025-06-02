import React from 'react';
import { Link, useLoaderData } from 'react-router';

const JobDetails = () => {
    const job = useLoaderData()
    console.log(job);
    return (
        <div>
            <h1>Job details</h1>
            <div className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-lg">
                <h2 className="text-2xl font-bold mb-4">{job?.title}</h2>
                <p className="text-gray-700 mb-4">{job?.description}</p>
                <p className="text-gray-600 mb-2"><strong>Company:</strong> {job?.company}</p>
                <p className="text-gray-600 mb-2"><strong>Location:</strong> {job?.location}</p>
                <p className="text-gray-600 mb-2"><strong>Salary:</strong> ${job?.salary}</p>
                <Link to={`/job-apply/${job?._id}`} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Apply Now</Link>
            </div>
        </div>
    );
};

export default JobDetails;