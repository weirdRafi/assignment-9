import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays, faDollarSign, faEnvelope, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';

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
            <div className='grid md:grid-cols-2 gap-10'>
                <div>
                    <span className='text-2xl font-bold'>Job Description: </span> {jobsId?.description} <br />
                    <span className='text-2xl font-bold'>Job Responsibility: </span>
                    {jobsId?.responsibility} <br />
                    <span className='text-2xl font-bold'>Educational Requirements: </span>
                    {jobsId?.requirements} <br />
                    <span className='text-2xl font-bold'>Experiences: </span>
                    {jobsId?.experience}

                </div>
                <div className='mt-16'>
                    <div>
                        <h1 className='text-3xl mb-3'>Job Details</h1>
                        <p> <FontAwesomeIcon icon={faDollarSign} className="text-center" /> Salary: {jobsId?.salary} (per month)</p>
                        <p><FontAwesomeIcon icon={faCalendarDays} className="text-center" /> Job title:  {jobsId?.title} </p>
                    </div>
                    <div>
                        <h1 className='text-3xl mb-3 mt-5'>Contact Information</h1>
                        <p><FontAwesomeIcon icon={faPhone} className="text-center" /> Phone: {jobsId?.phone}</p>
                        <p><FontAwesomeIcon icon={faEnvelope} className="text-center" /> Email: {jobsId?.email}</p>
                        <p><FontAwesomeIcon icon={faLocationDot} className="text-center" /> Address: {jobsId?.address}</p>
                        <button className='btn bg-gradient-to-r from-blue-500 to-purple-500 btn-sm mt-5'>Apply Now</button>
                    </div>
                </div>

                
            </div>
        </div>
    );
};

export default SingleFeature;