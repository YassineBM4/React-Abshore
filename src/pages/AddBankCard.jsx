import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import logo from '../images/onlineBanking.png';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import sideLogo from '../images/card.png';
import CardValidation from '../Components/CardValidation';
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

function AddBankCard() {

    const [values, setValues] = useState({
        cardName: '',
        cardNumber: '',
        expiration: '',
        cvv: ''
    })

    const [errors, setErrors] = useState({})

    function handleInput(event) {
        const newObj = { ...values, [event.target.name]: event.target.value }
        setValues(newObj)
    }

    function handleValidation(event) {
        event.preventDefault();
        setErrors(CardValidation(values));
    }

    return (
        <div>
            <form onSubmit={handleValidation}>
                <MDBContainer className="my-4" >
                    <MDBCard style={{ border: 'transparent', boxShadow: 'rgba(0, 0, 0, 0.10) 5px 10px 10px, rgba(0, 0, 0, 0.10) 5px 1px 10px, rgba(0, 0, 0, 0.10) 0px 5px 5px, rgba(0, 0, 0, 0.16) 0px 5px 10px' }}>
                        <MDBRow className='g-2' >

                            <MDBCol md='6' style={{ background: 'whitesmoke' }}>
                                <MDBCardBody className='d-flex flex-column'>
                                    <h3 className="fw-normal my-4 pb-3" style={{ letterSpacing: '1px' }}>Add Bank Card</h3>
                                    <div className='d-flex flex-row mt-2'>
                                        <MDBIcon fas icon="cubes fa-3x me-3" />
                                        <img src={sideLogo} style={{ width: '150px', marginBottom: '20px' }} />
                                    </div>
                                    {errors.cardName && <p style={{ color: 'red' }}>{errors.cardName}</p>}
                                    <MDBInput wrapperClass={`mb-4 ${errors.cardName ? 'error-border' : ''}`} placeholder='Name On Card' name='cardName' id='formControlLg' type='text' size="lg" onChange={handleInput} />
                                    {errors.cardNumber && <p style={{ color: 'red' }}>{errors.cardNumber}</p>}
                                    <MDBInput wrapperClass={`mb-4 ${errors.cardNumber ? 'error-border' : ''}`} placeholder='Card Number' name='cardNumber' id='formControlLg' type='text' size="lg" onChange={handleInput} />
                                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                        {errors.expiration && <p style={{ color: 'red' }}>{errors.expiration}</p>}
                                        <MDBInput wrapperClass={`mb-4 ${errors.expiration ? 'error-border' : ''}`} placeholder='Expiration' name='expiration' id='formControlLg' type='text' size="lg" onChange={handleInput} />
                                        {errors.cvv && <p style={{ color: 'red' }}>{errors.cvv}</p>}
                                        <MDBInput wrapperClass={`mb-4 ${errors.cvv ? 'error-border' : ''}`} placeholder='CVC/CVV' name='cvv' id='formControlLg' type='text' size="lg" onChange={handleInput} />
                                    </div>
                                    <Button style={{ background: '#E68F36', border: '#E68F36' }} type="submit"> Add Bank Card </Button>
                                    <p className="mb-5 pb-lg-2" style={{ color: '#393f81', marginTop: '20px' }}>Learn more about the Link Privacy Policy and Cookie Policy.</p>
                                </MDBCardBody>
                            </MDBCol>

                            <MDBCol md='6' >
                                <MDBCardImage src={logo} alt="login form" className='rounded-start w-100' />
                            </MDBCol>
                        </MDBRow>
                    </MDBCard>
                </MDBContainer>
            </form>
        </div>
    )
}

export default AddBankCard