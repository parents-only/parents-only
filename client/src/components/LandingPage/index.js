import React, { useContext} from 'react';
import { photos, photos2 } from './photos';
import {wrapContext} from '../../utils/context';
import Gallery from 'react-photo-gallery';
import {  Card } from 'react-bootstrap';;


const LandingPage = () => {
 const { handlers } = useContext(wrapContext);

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
                        Welcome to Parents Only!
                        </Card.Text>
                        <Card.Text>
                        To get started, sign up or login.
                        </Card.Text>
                        <Card.Link onClick={()=> handlers.setShowModal(true)}>Login</Card.Link>
                        <Card.Link onClick={()=>handlers.setShowModal(true)}>Sign up</Card.Link>
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