import React, { use } from 'react';
import JobApplicationsRow from './JobApplicationsRow';

const ApplicationList = ({ myApplicationsPromise }) => {
    const applications = use(myApplicationsPromise);
    console.log(applications);
    return (
        <div className='py-12'>
            <h3 className="text-3xl py-4">Jobs Applied so far : {applications.length}</h3>
            <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
                <table className="table ">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    Serial
                                </label>
                            </th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            applications.map((application, index) => (
                                <JobApplicationsRow key={index} index={index} application={application} />
                            )
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ApplicationList;