import React from 'react';
import { FaLocationDot } from 'react-icons/fa6';
import { Link } from 'react-router';

const JobCard = ({ job }) => {
    const { title, location, requirements, salaryRange, _id, description, company, company_logo } = job || {}
    return (
        <div className="card bg-base-100 lg:w-96 shadow-sm">
            <div className='flex items-center gap-4 p-4'>
                <figure>
                    <img
                        src={company_logo}
                        alt={company}
                        className='h-12 w-12 rounded-2xl '
                    />
                </figure>
                <div>
                    <h3 className='text-2xl font-bold'>
                        {company || 'company name not found'}
                    </h3>
                    <p className='flex items-center gap-2 text-gray-500'>
                        <FaLocationDot />
                        {location}
                    </p>
                </div>
            </div>
            <div className="card-body">
                <h2 className="card-title">
                    {title}
                    <div className="badge badge-secondary">NEW</div>
                </h2>
                <p>
                    Salary: {salaryRange.min} - {salaryRange.max} {salaryRange.currency || 'USD'}
                </p>
                <p className='text-gray-500'>
                    {description || 'No description available for this job.'}
                </p>
                <div className="card-actions">
                    {
                        requirements && requirements.map((req, index) => (
                            <div key={index} className="badge badge-info badge-outline">{req}</div>
                        ))
                    }
                </div>
                <div className="card-actions justify-end">
                    <Link to={`/jobs/${_id}`} className="btn btn-primary btn-outline">Apply Now</Link>
                </div>
            </div>
        </div>
    );
};

export default JobCard;