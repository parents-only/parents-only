import React from 'react';
import {photos} from './photos';
import { render } from 'react-dom';
import Gallery from 'react-photo-gallery';

const LandingPage = () => {
    return (
        <img src={photos[0].src} alt='' style={{height: 500, margin: 20}} />
    )
}

export default LandingPage; 



