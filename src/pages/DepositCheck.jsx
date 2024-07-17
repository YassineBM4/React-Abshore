import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import { Container } from 'react-bootstrap';
import image1 from '../images/firstPhoto.png'
import image2 from '../images/secondPhoto.png'
import image3 from '../images/thirdPhoto.png'
import image4 from '../images/fourthPhoto.png'
import { Link } from 'react-router-dom';

function GroupExample() {
    return (
        <div style={{ marginTop: '50px' }}>
            <h1>Digital Check Deposit Benefits</h1>
            <CardGroup style={{ marginTop: '20px' }}>
                <Container fluid>
                    <Row xs={1} md={3} style={{ justifyContent: 'center', alignItems: 'center', gap: '20px' }}>
                        <Card className='Card' style={{ alignItems: 'center', textAlign: 'center', height: '240px' }} >
                            <Card.Img style={{ width: '70px' }} src={image1} />
                            <Card.Body>
                                <Card.Title>Accessible At All Times</Card.Title>
                                <Card.Text>
                                    Photograph and deposit your check from your website or mobile app anytime, anywhere.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card className='Card' style={{ alignItems: 'center', textAlign: 'center', height: '240px' }} >
                            <Card.Img style={{ width: '70px' }} src={image2} />
                            <Card.Body>
                                <Card.Title>Fast, No-Fee Deposit !</Card.Title>
                                <Card.Text>
                                    Just like at an ATM, your funds are deposited immediately into your account, depending on the withdrawal on deposit (or authorized transit) rating assigned to your file.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card className='Card' style={{ alignItems: 'center', textAlign: 'center', height: '240px' }} >
                            <Card.Img style={{ width: '80px' }} src={image3} />
                            <Card.Body>
                                <Card.Title>Remote Practice</Card.Title>
                                <Card.Text>
                                    No need to go to a branch anymore! You can deposit up to 50,000 TND per month anytime, from the comfort of your home.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card className='Card' style={{ alignItems: 'center', textAlign: 'center', height: '240px' }} >
                            <Card.Img style={{ width: '70px' }} src={image4} />
                            <Card.Body>
                                <Card.Title>Easy To Use</Card.Title>
                                <Card.Text>
                                    Nearly 80% of people who use digital check deposit are satisfied with its ease of use.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Row>
                </Container>
            </CardGroup>
            <Button as={Link} to="/BankLink" style={{ marginTop: '20px', marginBottom: '10px', width: '200px', height: '40px', background: '#E68F36', border: '#E68F36' }}>Get Started</Button>
        </div>
    );
}

export default GroupExample;