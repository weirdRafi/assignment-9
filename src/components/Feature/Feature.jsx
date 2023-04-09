import React from 'react';

const Feature = ({feature}) => {
    const {id, img, title, subtitle, location, salary } = feature;
    return (
        <div>
            <img src={img} alt="" />
            <h1 className='text-xl font-bold'>{title}</h1>
            <p>{subtitle}</p>
            <div className='flex gap-3'>
                <button className='btn btn-outline btn-primary'>Remote</button>
                <button className='btn btn-outline btn-primary'>Full Time</button>
            </div>

        </div>
    );
};

export default Feature;