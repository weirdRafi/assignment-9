import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDollarSign, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const SingleCart = ({ scart }) => {
    const { id, img, title, location, salary, subtitle } = scart;
    console.log(scart);
    return (
        <div>
            <div className='border rounded-lg shadow-xl flex justify-around items-center'>
                <div className='flex items-center m-5 p-5 gap-5 justify-start'>
                    <div>
                        <img className='w-36' src={img} alt="" />
                    </div>
                    <div>
                        <h1>{title}</h1>
                        <p>{subtitle}</p>
                        <button className='btn btn-outline btn-primary btn-sm my-3'>Remote</button> <button className='btn btn-outline btn-primary btn-sm'>Fulltime</button>
                        <p className='pb-3'><FontAwesomeIcon icon={faLocationDot} className="text-center" />
                            {location}  <FontAwesomeIcon icon={faDollarSign} className="text-center" />  Salary: {salary}
                        </p>
                    </div>
                </div>
                <div>
                    <Link to={`/${id}`} className='btn bg-gradient-to-r from-blue-500 to-purple-500'>View Details</Link>
                </div>
            </div>
        </div>
    );
};

export default SingleCart;