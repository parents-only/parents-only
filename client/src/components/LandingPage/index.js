import React from 'react';
import {photos} from './photos';
import { render } from 'react-dom';
import Gallery from 'react-photo-gallery';

const LandingPage = () => {

    return (
        <Gallery photos={photos}  />
    )
    

} 
   


export default LandingPage; 



