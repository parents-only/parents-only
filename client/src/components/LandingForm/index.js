import React, { useState } from 'react';
import { Card, Modal, Nav, Tab } from 'react-bootstrap';
import SignUpForm from '../SignupForm';
import LoginForm from '../LoginForm';



const LandingForm = () => {
    
    const [showModal, setShowModal] = useState(false);

    return (
        <div>
            <div className="signup-card-overlay" style={{ position: "absolute", top: "300px", left: "100px" }}>
                <Card style={{ width: '18rem', textAlign: "center", margin: "0 auto", marginBottom: 10, backgroundColor: "rgb( 255, 255, 255, 0.8 )" }}>
                    <Card.Body style={{ padding: "0px" }}>
                        <div>
                            <Card.Title style={{ fontSize: "35px", padding: "0.25em" }}>PARENTS ONLY</Card.Title>
                        </div>
                        
                        <Card.Subtitle className="mb-2 text-muted" style={{ paddingTop: "1em", fontSize: "25px" }}>Join us today!</Card.Subtitle>
                        <Card.Text style={{ padding: "0.5em", fontSize: "20px" }}>
                            To join our amazing group of parents looking to meet other parents just like you, click the link below to get started!
                        </Card.Text>
                        <div style={{ paddingBottom: "1em" }}>
                        <Card.Link onClick={() => setShowModal(true)} style={{ fontSize: "20px", border: "1px solid black", padding: "0.5em" }}>JOIN NOW</Card.Link> 
                        </div>
                        
                    </Card.Body>
                </Card>
            </div>
            <div>
                <Modal
                    size='lg'
                    show={showModal}
                    onHide={() => setShowModal(false)}
                    aria-labelledby='signup-modal'>
                    {/* tab container to do either signup or login component */}
                    <Tab.Container defaultActiveKey='login'>
                    <Modal.Header closeButton>
                        <Modal.Title id='signup-modal'>
                        <Nav variant='pills'>
                            <Nav.Item>
                            <Nav.Link eventKey='login'>Login</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                            <Nav.Link eventKey='signup'>Sign Up</Nav.Link>
                            </Nav.Item>
                        </Nav>
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Tab.Content>
                        <Tab.Pane eventKey='login'>
                            <LoginForm handleModalClose={() => setShowModal(false)} />
                        </Tab.Pane>
                        <Tab.Pane eventKey='signup'>
                            <SignUpForm handleModalClose={() => setShowModal(false)} />
                        </Tab.Pane>
                        </Tab.Content>
                    </Modal.Body>
                    </Tab.Container>
                </Modal>
            </div>
        </div>
        
    )   
}

export default LandingForm;
