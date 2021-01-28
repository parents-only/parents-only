import React from 'react';
import Navbar from '../components/Navbar';
import LandingPage from '../components/LandingPage/index';

const Home = () => {
    return (
        <main>
        <div className="flex-row justify-space-between">
            <LandingPage />
        </div>
        </main>
    )
}

export default Home;