import React from 'react'
import { Button } from 'react-bootstrap'
import HowToDeposit from './HowToDeposit'
import DepositCheck from './DepositCheck'
import AboutUs from './AboutUs'
import Contact from './Contact'
import Footer from '../Components/Footer'
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div>
            <div id='main'>
                <div className='header-heading'>
                    <h2>WELCOME TO YOUR</h2>
                    <h1><span>ABSHORE</span> WEBSITE</h1>
                    <p className='details'>Simplify your check deposits and ensure compliance with ease.</p>
                    <Button as={Link} to='/BankLink' style={{ width: '150px', backgroundColor: '#E68F36', border: '#E68F36' }} size="lg">Get Started</Button>{' '}
                </div>
            </div>
            <div>
                <HowToDeposit />
                <DepositCheck />
                <AboutUs />
                <Contact />
                <Footer />
            </div>
        </div>
    )
}

export default Home