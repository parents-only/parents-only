import React, { useState } from 'react';
import { Button, Card, Modal, Nav, Tab } from 'react-bootstrap';
import EditProfile from '../EditProfile';

const EditModal = () => {
    const [showModal, setShowModal] = useState(false);

    return (
        <div>
            <div>
                <Button.Link style={{ fontSize: "20px", border: "1px solid", padding: "0.5em", fontWeight: "bold" }}
                    onClick={() => setShowModal(true)}>
                    Edit Profile
                    </Button.Link>
            </div>
            <div>
                <Modal
                    size='lg'
                    show={showModal}
                    onHide={() => setShowModal(false)}
                    aria-labelledby='edit-modal'>
                    {/* tab container to do either edit or edit component */}
                    <Tab.Container defaultActiveKey='edit'>
                        <Modal.Header closeButton>
                            <Modal.Title id='edit-modal'>
                                Edit Your Profile
                        </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Tab.Content>
                                <Tab.Pane eventKey='edit'>
                                    <EditProfile handleModalClose={() => setShowModal(false)} />
                                </Tab.Pane>
                            </Tab.Content>
                        </Modal.Body>
                    </Tab.Container>
                </Modal>
            </div>
        </div>
    )
}

export default EditModal;