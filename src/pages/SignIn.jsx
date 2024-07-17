import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import logo from '../images/signIn.jpg';
import Button from 'react-bootstrap/Button';
import Footer from '../Components/Footer';
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

function SignIn() {

    const [values, setValues] = useState({
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
                <MDBContainer className="my-5" >
                    <MDBCard style={{ border: 'transparent', boxShadow: 'rgba(0, 0, 0, 0.10) 5px 1px 10px, rgba(0, 0, 0, 0.10) 0px 1px 1px, rgba(0, 0, 0, 0.16) 0px 5px 10px' }}>
                        <MDBRow className='g-0' >

                            <MDBCol md='6' style={{ background: 'whitesmoke' }}>
                                <MDBCardBody className='d-flex flex-column' style={{ marginTop: '40px' }}>
                                    <h3 className="fw-normal my-4 pb-3" style={{ letterSpacing: '1px' }}>Sign Into Your Account</h3>
                                    {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
                                    <MDBInput wrapperClass={`mb-4 ${errors.email ? 'error-border' : ''}`} name='email' placeholder='E-mail Address' id='formControlLg' type='text' size="lg" onChange={handleInput}/>
                                    {errors.password && <p style={{ color: 'red' }}>{errors.password}</p>}
                                    <MDBInput wrapperClass={`mb-4 ${errors.password ? 'error-border' : ''}`} name='password' placeholder='Password' id='formControlLg' type='password' size="lg" onChange={handleInput}/>
                                    <Button style={{ background: '#E68F36', border: '#E68F36' }} type="submit"> Sign In </Button>
                                    <a className="small text-muted" href="#!" style={{marginTop:'20px'}}>Forgot password?</a>
                                    <p className="mb-5 pb-lg-2" style={{ color: '#393f81', marginTop: '20px' }}>Don't have an account? <Link to="/SignUp" style={{ color: 'blue' }}>Register here</Link></p>
                                </MDBCardBody>
                            </MDBCol>

                            <MDBCol md='6' >
                                <MDBCardImage src={logo} alt="login form" className='rounded-start w-100' />
                            </MDBCol>
                        </MDBRow>
                    </MDBCard>
                </MDBContainer>
            </form>
            <Footer/>
        </div>
    )
}

export default SignIn