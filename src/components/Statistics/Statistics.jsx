import React from 'react';

import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';



const Statistics = () => {
    const marks = [
        {
            id: "A1",
            Marks: 57
        },
        {
            id: "A2",
            Marks: 58
        },
        {
            id: "A3",
            Marks: 57
        },
        {
            id: "A4",
            Marks: 58
        },
        {
            id: "A5",
            Marks: 45
        },
        {
            id: "A6",
            Marks: 57
        },
        {
            id: "A7",
            Marks: 60
        },
        {
            id: "A8",
            Marks: 50
        },
    ]

    return (
        <div className=' '>
            <h1 className='text-2xl font-bold text-center'>My Assignment Marks</h1>
 
                <AreaChart className='mx-auto mt-10'
                    width={500}
                    height={400}
                    data={marks}
                    margin={{
                        top: 10,
                        right: 30,
                        left: 0,
                        bottom: 0,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="id" />
                    <YAxis />
                    <Tooltip />
                    <Area type="monotone" dataKey="Marks" stroke="#8884d8" fill="#8884d8" />
                </AreaChart>
        </div>
    );
};

export default Statistics;