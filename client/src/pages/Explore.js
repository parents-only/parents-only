import React from 'react';
import Switch from 'react-ios-switch';
import SwitchCard from '../components/SwitchCard';
import SwipeButtons from '../components/SwipeButtons';
import './explore.css';


const Explore = () => {

    return (

        <div className="body">
            <SwitchCard /> 
            <SwipeButtons />
        </div>
    )
}

export default Explore;