import React, { useState } from 'react';
import { Button, Modal, Nav, Tab } from 'react-bootstrap';
import SignUpForm from '../SignupForm';
import LoginForm from '../LoginForm';
import ContactForm from '../ContactForm';



const LandingPage = () => {

    const [showModal, setShowModal] = useState(false);
    const [key, setKey] = useState('login')
    const [showContactModal, setShowContactModal] = useState(false);

    return (
        <div>
            <div className="container">
                <div className="col-md-12 col-xs-12 col-sm-12" style={{ textAlign: "center" }}>
                    <div className="display-4" style={{ marginTop: "1em" }}>FIND YOUR NEW BEST FRIENDS TODAY</div>
                    <div style={{ fontSize: "20px", marginBottom: "1em"}}>Looking for friends with children? Do you have children? Start looking for your new best friends today!</div>
                    <div className="mb-2" style={{ marginBottom: "2em" }}>
                        <Button variant="primary" size="lg" onClick={() => {
                            setKey('signup')
                            setShowModal(true)
                            }} style={{ margin: "1em", width: "200px" }} >Join Free</Button>
                        <Button variant="primary" size="lg" onClick={() => setShowContactModal(true)} style={{ margin: "1em", width: "200px" }}>Contact us</Button>
                    </div> 
                </div>
            </div>
            <Modal
                size='lg'
                show={showModal}
                onHide={() => setShowModal(false)}
                aria-labelledby='signup-modal'>
                {/* tab container to do either signup or login component */}
                <Tab.Container defaultActiveKey='login' activeKey={key}>
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
            

            <Modal
                size='lg'
                show={showContactModal}
                onHide={() => setShowContactModal(false)}
                aria-labelledby='contact-modal'>
                {/* tab container to do either signup or login component */}
                <Tab.Container defaultActiveKey='contact'>
                <Modal.Header closeButton>
                    <Modal.Title id='contact-modal'>
                    <Nav variant='pills'>
                        <Nav.Item>
                        <Nav.Link eventKey='contact'>Contact Us</Nav.Link>
                        </Nav.Item>
                    </Nav>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Tab.Content>
                    <Tab.Pane eventKey='contact'>
                        <ContactForm handleModalClose={() => setShowModal(false)} />
                    </Tab.Pane>
                    </Tab.Content>
                </Modal.Body>
                </Tab.Container>
            </Modal>
        </div>
    )
    

} 

export default LandingPage; 