import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


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
        <div className=''>
            <h1 className='text-2xl font-bold text-center'>My Assignment Marks</h1>
            <LineChart className='mx-auto mt-10' width={500} height={300} data={marks}>
                <Line dataKey="Marks"></Line>
                <XAxis dataKey="id"></XAxis>
                <YAxis></YAxis>
                <Tooltip></Tooltip>
                <Legend></Legend>
                <ResponsiveContainer></ResponsiveContainer>
                <CartesianGrid></CartesianGrid>
            </LineChart>
        </div>
    );
};

export default Statistics;