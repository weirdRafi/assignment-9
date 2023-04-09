import React from 'react';

const Category = ({data}) => {
    const {name, img, jobs} = data;
    return (
        <div>
            <div className='border p-3 m-3 '>
                <img src={img} alt="" />
                <h2 className='text-xl font-bold'>{name}</h2>
                <p>{jobs}</p>
            </div>
        </div>
    );
};

export default Category;