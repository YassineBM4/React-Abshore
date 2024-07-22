import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../images/logoLight.png';
import { Link } from 'react-router-dom';

function OffcanvasExample() {
    return (
        <Navbar expand="lg" className="bg-body-tertiary" sticky='top'>
            <Container fluid className="d-flex align-items-center">
                <Navbar.Brand href="/">
                    <img src={logo} alt="Logo" style={{ width: "150px" }} />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav className="justify-content-center flex-grow-1 me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
                        <Nav.Link as={Link} to="/" className=' link-75'>Home</Nav.Link>
                        <Nav.Link as={Link} to="/HowToDeposit" className=' link-75'>How To Deposit</Nav.Link>
                        <Nav.Link as={Link} to="/DepositCheck" className=' link-75'>Deposit Check</Nav.Link>
                        <Nav.Link as={Link} to="/AboutUs" className=' link-75'>About Us</Nav.Link>
                        <Nav.Link as={Link} to="/Contact" className=' link-75'>Contact</Nav.Link>
                    </Nav>
                    <div className="d-flex" style={{justifyContent:'center'}}>
                        <Button as={Link} to="/SignIn" className="me-2" style={{ background: '#E68F36', border: '#E68F36', width: '100px' }}>Sign In</Button>
                        <Button as={Link} to="/SignUp" className="me-2" style={{ background: '#5671D1', border: '#5671D1', width: '100px' }}>Sign Up</Button>
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default OffcanvasExample;
