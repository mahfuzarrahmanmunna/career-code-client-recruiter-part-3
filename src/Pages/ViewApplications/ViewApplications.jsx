import axios from 'axios';
import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import Swal from 'sweetalert2';

const ViewApplications = () => {
    const { id } = useParams()
    const data = useLoaderData()
    console.log(id);
    console.log(id, data);

    const handleStatusChange = (e, id) => {
        console.log(e.target.value, id);

        axios.patch(`https://career-code-server-for-recruiter-pa-tau.vercel.app/applications/${id}`, { status: e.target.value })
            .then(res => {
                if (res.data.matchedCount) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Your applications status has been updated",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
                console.log(res.data);
            })
            .catch(err => {
                console.log(err.code);
            })
    }
    return (
        <div className='py-12 lg:mx-24 px-24'>
            <h1 className='py-4'>View Applications: {data.length}</h1>
            <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((item, index) => <tr key={index}>
                                <th>{index + 1}</th>
                                <td>{item?.applicant}</td>
                                <td>Tax Accountant</td>
                                <td>
                                    <select onChange={(e) => handleStatusChange(e, item._id)} defaultValue={item?.status} className="select">
                                        <option disabled={true}>Update Status</option>
                                        <option>Pending</option>
                                        <option>Interview</option>
                                        <option>Hired</option>
                                        <option>Rejected</option>
                                    </select>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ViewApplications;