import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


const NavBar = () => {
    return (
        <>
            <Navbar bg="black" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href="#home">Custom Name</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#about">About Us</Nav.Link>
                        <Nav.Link href="#services">Services</Nav.Link>
                    </Nav>

                    <Form className="d-flex">
                        <Form.Control type="search" placeholder='Search' className="me-2" />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                </Container>
            </Navbar >
        </>
    );
}

export default NavBar;