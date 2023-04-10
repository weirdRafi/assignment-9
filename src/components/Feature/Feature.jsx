import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDollarSign, faLocation, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { Link, useParams } from 'react-router-dom';

const Feature = ({feature}) => {
    const {id, img, title, subtitle, location, salary } = feature;
    
    

    return (
        <div className='shadow-xl border p-2 rounded-xl'>
            <img src={img} alt="" />
            <h1 className='text-xl font-bold'>{title}</h1>
            <p className='text-gray-400'>{subtitle}</p>
            <div className='flex gap-3 mt-3 mb-3'>
                <button className='btn btn-outline btn-primary btn-sm'>Remote</button>
                <button className='btn btn-outline btn-primary btn-sm'>Full Time</button>
            </div>
            <p className='pb-3'><FontAwesomeIcon icon={faLocationDot} className="text-center" />
             {location}  <FontAwesomeIcon icon={faDollarSign} className="text-center" />  Salary: {salary}
            </p>
            <Link to={`/${id}`} className='btn bg-gradient-to-r from-blue-500 to-purple-500 btn-sm'>View Details</Link>

        </div>
    );
};

export default Feature;