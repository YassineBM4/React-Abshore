import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import logo from '../images/onlineBanking.png';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Footer from '../Components/Footer';
import addBank from '../images/signUpBankCard.png';
import Validation from '../Components/Validation';
import {
    MDBBtn,
    MDBContainer,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBRow,
    MDBCol,
    MDBIcon,
    MDBInput
}
    from 'mdb-react-ui-kit';

function SignUp() {

    const [values, setValues] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    })

    const [errors, setErrors] = useState({})

    function handleInput(event) {
        const newObj = { ...values, [event.target.name]: event.target.value }
        setValues(newObj)
    }

    function handleValidation(event) {
        event.preventDefault();
        setErrors(Validation(values));
    }

    return (
        <div>
            <form onSubmit={handleValidation}>
                <MDBContainer className="my-4" >
                    <MDBCard style={{ border: 'transparent', boxShadow: 'rgba(0, 0, 0, 0.10) 5px 1px 10px, rgba(0, 0, 0, 0.10) 0px 1px 1px, rgba(0, 0, 0, 0.16) 0px 5px 10px' }}>
                        <MDBRow className='g-0' >

                            <MDBCol md='6' style={{ background: 'whitesmoke' }}>
                                <MDBCardBody className='d-flex flex-column' style={{ marginTop: '10px' }}>
                                    <h3 className="fw-normal my-4 pb-3" style={{ letterSpacing: '1px' }}>Create New Account</h3>
                                    {errors.firstName && <p style={{ color: 'red' }}>{errors.firstName}</p>}
                                    <MDBInput wrapperClass={`mb-4 ${errors.firstName ? 'error-border' : ''}`} name='firstName' placeholder='First Name' type='text' size="lg" onChange={handleInput} />
                                    {errors.lastName && <p style={{ color: 'red' }}>{errors.lastName}</p>}
                                    <MDBInput wrapperClass={`mb-4 ${errors.lastName ? 'error-border' : ''}`} name='lastName' placeholder='Last Name' type='text' size="lg" onChange={handleInput} />
                                    {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
                                    <MDBInput wrapperClass={`mb-4 ${errors.email ? 'error-border' : ''}`} name='email' placeholder='E-mail Address' type='text' size="lg" onChange={handleInput} />
                                    {errors.password && <p style={{ color: 'red' }}>{errors.password}</p>}
                                    <MDBInput wrapperClass={`mb-4 ${errors.password ? 'error-border' : ''}`} name='password' placeholder='Password' type='password' size="lg" onChange={handleInput} />
                                    <Button as={Link} to='/AddBankCard' style={{ background: 'transparent', border: 'transparent', textAlign: 'left' }} type="submit"><MDBCardImage style={{ width: '150px' }} src={addBank} /></Button>
                                    <div style={{ display: 'flex', gap: '10px' }}>
                                        <Form.Check className="blue-border" type="checkbox" aria-label="option 1" id="check" style={{ marginLeft: '10px' }} />
                                        <p>I Accept The <a href="#">Terms & Conditions</a></p>
                                    </div>
                                    <Button style={{ background: '#E68F36', border: '#E68F36' }} type="submit"> Sign Up </Button>
                                    <p className="mb-5 pb-lg-2" style={{ color: '#393f81', marginTop: '20px' }}>Already have an account? <Link to="/SignIn" style={{ color: 'blue' }}>Log in here</Link></p>
                                </MDBCardBody>
                            </MDBCol>

                            <MDBCol md='6' >
                                <MDBCardImage src={logo} alt="login form" className='rounded-start w-100' />
                            </MDBCol>
                        </MDBRow>
                    </MDBCard>
                </MDBContainer>
            </form>
            <Footer />
        </div>
    );
}

export default SignUp