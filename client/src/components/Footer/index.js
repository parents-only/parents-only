import React from 'react';
import { Navbar, Nav, Container, Modal, Tab } from 'react-bootstrap';
import Auth from '../../utils/auth';
import Chat from '../../components/Chat/index';

const Footer = () => {

    return (
        <Navbar bg='dark' variant='dark' expand='lg' fixed="sticky" >
            <ul style={{ color: "white" }}>© Parents Only</ul>

            {
                Auth.loggedIn() ? (
                    <>
                        <Chat />
                    </>
                ) : (
                        <>
                        
                        </>
                    )
            }
        </Navbar>
    )
}

export default Footer;