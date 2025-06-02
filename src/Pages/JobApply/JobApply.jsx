import React from 'react';
import { useParams } from 'react-router';
import useAuth from '../../Hooks/useAuth';
import axios from 'axios';
import Swal from 'sweetalert2';

const JobApply = () => {
    const { id: jobId } = useParams();
    const { user } = useAuth()
    console.log(user, jobId);

    const handleApply = (e) => {
        e.preventDefault();
        const form = e.target;
        const linkedIn = form.linkedIn.value;
        const gitHub = form.gitHub.value;
        const resume = form.resume.value;

        const applicationData = {
            jobId,
            userId: user?.uid,
            applicant: user?.email,
            applicantName: user?.displayName,
            linkedIn,
            gitHub,
            resume
        };

        console.log(applicationData);

        // Here you can send the applicationData to your server or API
        axios.post('http://localhost:3000/applications', applicationData)
            .then(res => {
                console.log(res.data);
                if (res.data.insertedId) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Application  has been saved..!",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
            .catch(err => {
                console.log(err);
            })
    }
    return (
        <div>
            < h1 className='text-center text-3xl font-bold my-6'>Apply for Job</h1>
            <div className='text-center'></div>
            <form onSubmit={handleApply} className='max-w-sm mx-auto p-6 bg-white shadow-md rounded-lg space-y-4 my-12 fieldset'>
                <fieldset className="fieldset border-base-200 rounded-box w-xs border p-4">
                    <label className="label">LinkedIn Link</label>
                    <input type="url" className="input" name='linkedIn' placeholder="Linked in profile link" />
                </fieldset>
                <fieldset className="fieldset border-base-200 rounded-box w-xs border p-4">
                    <label className="label">GitHub Link</label>
                    <input type="url" className="input" name='gitHub' placeholder="GitHub profile link" />
                </fieldset>
                <fieldset className="fieldset border-base-200 rounded-box w-xs border p-4">
                    <label className="label">Resume Link</label>
                    <input type="url" className="input" name='resume' placeholder="Resume link" />
                </fieldset>
                <div className='px-4'>
                    <input type="submit" value="Apply" className='btn btn-outline btn-primary btn-block ' />
                </div>
            </form>
        </div>
    );
};

export default JobApply;