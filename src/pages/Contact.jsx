import React from 'react';
import Button from 'react-bootstrap/Button';
import Footer from '../Components/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhoneSquare, faMapMarkerAlt, faGlobe } from '@fortawesome/free-solid-svg-icons';
import {
    MDBTextArea,
    MDBContainer,
    MDBCard,
    MDBCardBody,
    MDBRow,
    MDBCol,
    MDBInput
} from 'mdb-react-ui-kit';

function Contact() {
    return (
        <div>
            <form>
                <MDBContainer className="my-5" >
                    <MDBCard style={{ border: 'transparent', boxShadow: 'rgba(0, 0, 0, 0.10) 0px 1px 1px, rgba(0, 0, 0, 0.16) 0px 5px 10px' }}>
                        <MDBRow className='g-0' >
                            <MDBCol md='6' >
                                <MDBCardBody className='d-flex flex-column' style={{ marginTop: '20px', marginBottom: '20px' }}>
                                    <h3 className="fw-normal my-4 pb-3" style={{ letterSpacing: '1px' }}>Contact Us</h3>
                                    <MDBInput placeholder='Name' wrapperClass='mb-4' />
                                    <MDBInput placeholder='E-mail Address' wrapperClass='mb-4' />
                                    <MDBInput placeholder='Subject' wrapperClass='mb-4' />
                                    <MDBTextArea wrapperClass='mb-4' placeholder='Write a message ...' />
                                    <Button style={{ background: '#E68F36', border: '#E68F36' }} type="submit"> Send Now </Button>
                                </MDBCardBody>
                            </MDBCol>
                            <MDBCol md='6' style={{ background: '#0D7CC3', padding:'20px', alignContent:'center', textAlign:'center' }}>
                                <h3 style={{color:'white', fontFamily:'Montserrat, sans-serif'}}>Let's get in touch</h3>
                                <p style={{color:'white', borderBottom: '0.5px solid white', marginBottom: '20px', paddingBottom: '20px', fontFamily:'Montserrat, sans-serif'}}>We're open for any suggestions or just to have a chat</p>
                                <h5 style={{ color: 'white', borderBottom: '0.5px solid white', marginTop:'30px', marginBottom: '20px', paddingBottom: '10px', fontFamily:'Montserrat, sans-serif' }}><FontAwesomeIcon icon={faGlobe} /><span> E-mail Address : Commercial@abshore.com</span></h5>
                                <h5 style={{ color: 'white', borderBottom: '0.5px solid white', marginBottom: '20px', paddingBottom: '20px', fontFamily:'Montserrat, sans-serif'}}><FontAwesomeIcon icon={faEnvelope} /> <span>E-mail Address : Commercial@abshore.com</span>  </h5>
                                <h5 style={{ color: 'white', fontFamily:'Montserrat, sans-serif' }}><FontAwesomeIcon icon={faPhoneSquare} /><span> Phone numbers : +216 71 96 34 53 / +216 71 96 34 66</span> </h5>
                            </MDBCol>
                        </MDBRow>
                    </MDBCard>
                </MDBContainer>
            </form>
            
        </div>
    )
}

export default Contact;
