import React, { useState } from 'react';
import { Card, Modal, Nav, Tab } from 'react-bootstrap';
import SignUpForm from '../SignupForm';
import LoginForm from '../LoginForm';



const LandingForm = () => {
    
    const [showModal, setShowModal] = useState(false);

    return (
        <div>
            <div>
                <Card style={{ width: "20rem", position: "absolute", top: "300px", left: "100px", backgroundColor: "rgb(255, 255, 255, 0.8)" }}> 
                    <Card.Header style={{ textAlign: "center", fontSize: "30px", fontWeight: "bold" }}>PARENTS ONLY</Card.Header>
                    <Card.Body style={{ textAlign: "center" }}>
                        <Card.Subtitle>Join us today!</Card.Subtitle>
                        <Card.Text>
                            To join our amazing group of parents looking to meet other parents just like you, click the link below to get started!
                        </Card.Text>
                        <Card.Link style={{ fontSize: "20px", border: "1px solid", padding: "0.5em" }} onClick={() => setShowModal(true)}>JOIN NOW</Card.Link> 
                    </Card.Body>
                </Card>
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
