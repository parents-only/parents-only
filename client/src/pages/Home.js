import React from 'react';
import LandingPage from '../components/LandingPage/index';
import PictureSlider from '../components/Carousel';
import LandingForm from '../components/LandingForm';

const Home = () => {
    return (
        <main>
        <div className="flex-row justify-space-between">
            <PictureSlider />
            <LandingForm /> 
            <LandingPage />
        </div>
        </main>
    )
}

export default Home;