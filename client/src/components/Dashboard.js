import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Bar } from 'react-chartjs-2';

const Dashboard = () => {
    const [analyticsData, setAnalyticsData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchAnalyticsData = async () => {
            try {
                const response = await axios.get('/api/analytics');
                setAnalyticsData(response.data);
            } catch (error) {
                console.error('Error fetching analytics data:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchAnalyticsData();
    }, []);

    const chartData = {
        labels: analyticsData.map(data => data.label),
        datasets: [
            {
                label: 'Analytics Data',
                data: analyticsData.map(data => data.value),
                backgroundColor: 'rgba(75, 192, 192, 0.6)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
            },
        ],
    };

    return (
        <div>
            <h1>Dashboard</h1>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <Bar data={chartData} />
            )}
        </div>
    );
};

export default Dashboard;