import React from 'react';
import useAuth from '../../Hooks/useAuth';
import axios from 'axios';
import Swal from 'sweetalert2';

const AddJobs = () => {
    const { user } = useAuth()

    const handleAAddJob = e => {
        e.preventDefault()
        const form = e.target;
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());
        console.log('data', data);

        // Process the salary range data
        const { min, max, currency, ...newJob } = data;
        newJob.salaryRange = { min, max, currency }

        // process the requirements 
        const requirementsString = newJob.requirements;
        const requirementsDirty = requirementsString.split(',')
        const requirementsCleaned = requirementsDirty.map(req => req.trim())
        newJob.requirements = requirementsCleaned;
        console.log('requirements', newJob.requirements);
        // newJob.requirements = newJob.requirements.split(',').map(req => req.trim());   // one line solutions

        // process the responsibilities
        newJob.responsibilities = newJob.responsibilities.split(',').map(res => res.trim())
        newJob.status = 'active'; // default status
        console.log(newJob);

        // Save the job to the database
        axios.post('https://career-code-server-for-recruiter-pa-tau.vercel.app/jobs', newJob)
            .then(res => {
                if (res.data.insertedId) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Your Job has been added successfully",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
            .catch(err => {
                console.log(err.code);
            })
    }
    return (
        <div className="px-4">
            <div className='max-w-6xl lg:px-12 py-8 rounded-3xl shadow-xl bg-base-300 mx-auto my-8'>
                <h1 className='text-3xl font-bold text-center my-8'>Add a Job</h1>
                <form className='px-4' onSubmit={handleAAddJob}>
                    {/* Job Details Form */}
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                        {/* Job Title */}
                        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
                            <label className="label">Title</label>
                            <input type="text" name='title' className="input w-full" placeholder="Job Title" />
                        </fieldset>

                        {/* Company Name */}
                        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
                            <label className="label">Company</label>
                            <input type="text" name='company' className="input w-full" placeholder="Company name" />
                        </fieldset>

                        {/* Company Location */}
                        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
                            <label className="label">Location</label>
                            <input type="text" name='location' className="input w-full" placeholder="Company Location" />
                        </fieldset>

                        {/* Company Logo URL */}
                        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
                            <label className="label">Company Logo</label>
                            <input type="url" name='company_logo' className="input w-full" placeholder="Company Logo URL" />
                        </fieldset>

                        {/* HR name */}
                        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
                            <label className="label">HR Name</label>
                            <input type="text" name='hr_name' className="input w-full" placeholder="HR Name" />
                        </fieldset>

                        {/* HR email */}
                        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
                            <label className="label">HR Email</label>
                            <input defaultValue={user?.email} type="email" name='hr_email' className="input w-full" placeholder="HR Email" />
                        </fieldset>

                        {/* Job Type */}
                        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
                            <label className="label">Job Type</label>
                            <div className="filter">
                                <input className="btn" type="radio" name="jobType" value='On-Site' aria-label="On_Site" />
                                <input className="btn" type="radio" name="jobType" value='Remote' aria-label="Remote" />
                                <input className="btn" type="radio" name="jobType" value='Hybrid' aria-label="Hybrid" />
                            </div>
                        </fieldset>

                        {/* Job Category */}
                        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
                            <label className='label'>Job Category</label>
                            <select defaultValue="Job Category" name='category' className="select w-full">
                                <option disabled={true}>Job Category</option>
                                <option>Engineering</option>
                                <option>Marketing</option>
                                <option>Finance</option>
                            </select>
                        </fieldset>

                        {/* Application Deadline */}
                        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
                            <label className='label'>Application Deadline</label>
                            <input type="date" name='deadline' className="input w-full" />
                        </fieldset>

                        {/* Salary Range */}
                        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4 col-span-1">
                            <label className='label font-bold'>Salary Range</label>
                            <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                                <fieldset>
                                    <label className='label'>Minimum Salary</label>
                                    <input type="text" name='min' className="input w-full" />
                                </fieldset>
                                <fieldset>
                                    <label className='label'>Maximum Salary</label>
                                    <input type="text" name='max' className="input w-full" />
                                </fieldset>
                                <fieldset>
                                    <label className='label'>Currency</label>
                                    <select defaultValue="Currency" name='currency' className="select w-full">
                                        <option disabled={true}>Currency</option>
                                        <option value="BDT">BDT</option>
                                        <option value="USD">USD</option>
                                        <option value="EUR">EUR</option>
                                        <option value="GBP">GBP</option>
                                    </select>
                                </fieldset>
                            </div>
                        </fieldset>

                        {/* Job Requirements */}
                        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
                            <label className='label'>Job Requirements</label>
                            <textarea className="textarea w-full" name='requirements' placeholder="Job Requirements (separate by comma)"></textarea>
                        </fieldset>

                        {/* Job Responsibilities */}
                        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
                            <label className='label'>Job Responsibilities</label>
                            <textarea className="textarea w-full" name='responsibilities' placeholder="Job Responsibilities (separate by comma)"></textarea>
                        </fieldset>

                        {/* Job Description */}
                        <fieldset className="fieldset col-span-1 md:col-span-2 bg-base-200 border-base-300 rounded-box w-full border p-4">
                            <label className='label'>Job Description</label>
                            <textarea className="textarea w-full" name='description' placeholder="Job Description"></textarea>
                        </fieldset>
                    </div>
                    <input type="submit" value="Add A Job" className="btn btn-primary btn-outline btn-block p-4 mt-4" />
                </form>
            </div>
        </div>
    );
};

export default AddJobs;
