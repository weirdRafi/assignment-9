import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Category from '../Category/Category';
import Feature from '../Feature/Feature';

const Home = () => {
    const features = useLoaderData()

    const [datas, setDatas] = useState([])
    useEffect(()=>{
        fetch('category.json')
        .then(res => res.json())
        .then(data => setDatas(data))
    },[])

    return (
        <div className='px-24'>
            <header className='md:flex items-center'>
                <div>
                    <h1 className='text-5xl'>One Step <br /> Closer To Your <br /> <span className='text-blue-400'>Dream Job</span></h1>
                    <p className='text-gray-500 pt-3 pb-3'>Explore thousands of job opportunities with all the <br /> information you need. Its your future. Come find it. Manage all  <br />
                        your job application from start to finish.</p>
                    <button className='btn btn-primary'>Get Started</button>
                </div>

                <div>
                    <img src="../../../public/All Images/P3OLGJ1 copy 1.png" alt="" />
                </div>
            </header> {/* <!-- Header End --> */}

            <section>
                <h1 className='text-3xl text-center pt-5 font-bold'>Job Category List</h1>
                <p className='text-gray-500 text-center'>Explore thousands of job opportunities with all the information you need. Its your future</p>

                <div className='grid md:grid-cols-4 pt-5'>
                    {
                        datas.map(data => <Category data={data} key={data.id}></Category>)
                    }
                </div>
            </section> {/* <!-- Category End --> */}

            <section>
                <h1 className='text-3xl text-center pt-5 font-bold'>Featured Jobs</h1>
                <p className='text-gray-500 text-center'>Explore thousands of job opportunities with all the information you need. Its your future</p>

                <div>
                    {
                        features.map(feature => <Feature key={feature.id} feature={feature}></Feature>)
                    }
                </div>
            </section>      


        </div>
    );
};

export default Home;