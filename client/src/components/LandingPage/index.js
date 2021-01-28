import React from 'react';
import { photos, photos2 } from './photos';

import { render } from 'react-dom';
import Gallery from 'react-photo-gallery';
import {  Card } from 'react-bootstrap';;

const LandingPage = () => {

    return (
        <div>
            <div>
                <Gallery photos={photos} />
            </div>
            <div>            
                <Card style={{ width: '18rem', textAlign: "center", margin: "0 auto", marginBottom: 10 }}>
                    <Card.Body>
                        <Card.Title>Parents Only</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Join us today!</Card.Subtitle>
                        <Card.Text>
                            insert text here
                        </Card.Text>
                        <Card.Link href="/login">Login</Card.Link>
                        <Card.Link href="">Sign up</Card.Link>
                    </Card.Body>
                </Card>
            </div>
            <div>
                <Gallery photos={photos2} />
            </div>
        </div>
    )
    

} 
   


export default LandingPage; 