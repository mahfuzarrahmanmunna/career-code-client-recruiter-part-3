import React, { use } from 'react';
import MyPostedRow from './MyPostedRow';

const MyPostedJobList = ({ JobPromisedByMyPostedJob }) => {
    const data = use(JobPromisedByMyPostedJob)
    console.log(data);
    return (
        <div className='lg:max-w-5xl mx-auto px-6'>
            <h1>My Job list : {data.length}</h1>
            <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Serial</th>
                            <th>Title</th>
                            <th>Deadline</th>
                            <th>Count</th>
                            <th>View Applications</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data && data?.map((item, index) => <MyPostedRow key={index} item={item} index={index} />)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyPostedJobList;