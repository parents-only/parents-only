import React from 'react';
import { Navbar, Nav, Container, Modal, Tab } from 'react-bootstrap';

const footerNav = () => {

    return (
        <Navbar bg='dark' variant='dark' expand='lg' fixed="bottom" >
        <ul style={{ color: "white"}}>© Parents Only</ul> 
        </Navbar>
    )
}

export default footerNav;