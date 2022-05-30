import React from 'react';
import { Area, AreaChart, Bar, BarChart, CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';
import useDataChart from '../../hooks/useDataChart';

const Dashboard = () => {
    const [chart] = useDataChart();
    return (
        <div>
            <h2 className='text-center text-primary text-decoration-underline'>Welcome to Dashboard</h2>
            <div className='d-flex'>
                <div className='m-4'>
                    <h3 className='text-center'>Month Wise Investment</h3>
                    <AreaChart
                        width={500}
                        height={300}
                        data={chart && chart}
                        margin={{
                            top: 10,
                            right: 30,
                            left: 0,
                            bottom: 0,
                        }}
                        >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                        <Area type="monotone" dataKey="investment" stroke="#8884d8" fill="#8884d8" />
                    </AreaChart>
                </div>
                <div className='m-4'>
                    <h3 className='text-center'>Month Wise Investment vs Revenue</h3>
                    <LineChart
                        width={500}
                        height={300}
                        data={chart && chart}
                        margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                        >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" />
                        <YAxis/>
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="investment" stroke="#8884d8" strokeDasharray="5 5" />
                        <Line type="monotone" dataKey="revenue" stroke="#82ca9d" strokeDasharray="3 4 5 2" />
                    </LineChart>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;