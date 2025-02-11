import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

function Footer() {
    return (
        <div>
            <MDBFooter className='bg-secondary text-white'>
                <MDBContainer className='p-4'>
                    <MDBRow>
                        <MDBCol lg="6" md="12" className='mb-4 mb-md-0'>
                            <h5 className='text-uppercase'>Abshore</h5>
                            <p>
                            Here you can use rows and columns to organize your footer content.
                            </p>
                        </MDBCol>
                        <MDBCol lg="3" md="6" className='mb-4 mb-md-0'>
                            <h5 className='text-uppercase'>Links</h5>
                            <ul className='list-unstyled mb-0'>
                                <li>
                                    <a href='#!' className='text-white'>
                                        Link 1
                                    </a>
                                </li>
                                <li>
                                    <a href='#!' className='text-white'>
                                        Link 2
                                    </a>
                                </li>
                                <li>
                                    <a href='#!' className='text-white'>
                                        Link 3
                                    </a>
                                </li>
                                <li>
                                    <a href='#!' className='text-white'>
                                        Link 4
                                    </a>
                                </li>
                            </ul>
                        </MDBCol>
                        <MDBCol lg="3" md="6" className='mb-4 mb-md-0'>
                            <h5 className='text-uppercase mb-0'>Links</h5>

                            <ul className='list-unstyled'>
                                <li>
                                    <a href='#!' className='text-white'>
                                        Link 1
                                    </a>
                                </li>
                                <li>
                                    <a href='#!' className='text-white'>
                                        Link 2
                                    </a>
                                </li>
                                <li>
                                    <a href='#!' className='text-white'>
                                        Link 3
                                    </a>
                                </li>
                                <li>
                                    <a href='#!' className='text-white'>
                                        Link 4
                                    </a>
                                </li>
                            </ul>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
                <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                    © 2020 Copyright:
                    <a className='text-white' href='https://mdbootstrap.com/'>
                        MDBootstrap.com
                    </a>
                </div>
            </MDBFooter>
        </div>
    )
}

export default Footer