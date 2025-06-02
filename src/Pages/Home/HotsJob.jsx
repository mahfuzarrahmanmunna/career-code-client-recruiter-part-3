import { Suspense, use } from "react";
import JobCard from "../Shared/Job/JobCard";

const HotsJob = ({ jobsPromise }) => {
    const jobs = use(jobsPromise)
    // console.log(jobs);
    return (
        <div className="lg:px-24 px-6">
            <h1 className="text=3xl font-bold text-center my-8">
                {jobs.length} Hot Jobs
            </h1>
            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {
                    jobs.map(job => (
                        <Suspense key={job?._id} fallback={
                            <div className="w-full h-64 flex items-center justify-center">
                                <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-blue-500"></div>
                            </div>
                        }>
                            <JobCard key={job._id} job={job} />
                        </Suspense>
                    ))
                }
            </div>
        </div>
    );
};

export default HotsJob;