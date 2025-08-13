import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <h1>Welcome to the Massive Analytics Platform</h1>
            <p>This is the main landing page for the application.</p>
            <nav>
                <ul>
                    <li>
                        <Link to="/dashboard">Go to Dashboard</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Home;