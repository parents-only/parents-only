import React from 'react';
import { photos, photos2 } from './photos';

import { render } from 'react-dom';
import Gallery from 'react-photo-gallery';
import {  Card, Button } from 'react-bootstrap';;

const LandingPage = () => {

    return (
        <div>
            <div>
                <Gallery photos={photos} />
            
                <Card style={{ width: '18rem', textAlign: "center", margin: "0 auto", marginBottom: 10, position: "absolute", left: "calc( 50% - 144px )", backgroundColor: "rgb( 255, 255, 255, 0.8 )" }}>
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
            
            
                <Gallery photos={photos2} />
            </div>
            <div className="container">
                <div className="col-md-12 col-xs-12 col-sm-12" style={{ textAlign: "center" }}>
                    <div className="display-4" style={{ marginTop: "1em" }}>FIND YOUR NEW BEST FRIENDS TODAY</div>
                    <div style={{ fontSize: "20px", marginBottom: "1em"}}>Looking for friends with children? Do you have children? Start looking for your new best friends today!</div>
                    <div className="mb-2" style={{ marginBottom: "2em" }}>
                        <Button variant="primary" size="lg" style={{ margin: "1em" }}>Join Free</Button>
                        <Button variant="primary" size="lg">Contact us</Button>
                    </div>
                    
                </div>
            </div>
            
        </div>
    )
    

} 
   


export default LandingPage; 



