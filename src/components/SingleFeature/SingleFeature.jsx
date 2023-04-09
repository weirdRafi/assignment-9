import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const SingleFeature = () => {
    const [jobs, setJobs] = useState([])
    let { id } = useParams();
    useEffect(() => {
        fetch('features.json')
            .then(res => res.json())
            .then(data => setJobs(data))
    }, [])

    const jobsId = jobs.find(job => job.id == id)
    console.log(jobsId);

    return (
        <div className='px-24'>
            <div className='grid grid-cols-2'>
                <div>
                    <span className='text-2xl font-bold'>Job Description: </span> {jobsId?.description} <br />
                    <span className='text-2xl font-bold'>Job Responsibility: </span>
                    {jobsId?.responsibility} <br />
                    <span className='text-2xl font-bold'>Educational Requirements: </span>
                    {jobsId?.requirements} <br />
                    <span className='text-2xl font-bold'>Experiences: </span>
                    {jobsId?.requirements}

                </div>
                <div>
                    <h1 className='text-xl'>Job Details</h1>
                    
                </div>
            </div>
        </div>
    );
};

export default SingleFeature;