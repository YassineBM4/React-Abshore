import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import image1 from '../images/first.png'
import image2 from '../images/second.png'
import image3 from '../images/third.png'
import help from '../images/help.png'
import Footer from '../Components/Footer';

function GroupExample() {
    return (
        <div style={{ marginTop: '80px' }}>
            <h1>How to deposit a check ?</h1>
            <p>Deposit a check with the Abshore website or mobile app in a few simple steps.</p>
            <CardGroup style={{ marginTop: '20px', gap: '40px' }}>
                <Container fluid>
                    <Row xs={1} md={3} className="g-2">
                        <Col>
                            <Card className='Card' style={{ alignItems: 'center', textAlign: 'center', height: '320px' }} >
                                <Card.Img variant="top" style={{ width: '200px' }} src={image1} />
                                <Card.Body>
                                    <Card.Title>Sign Up First !</Card.Title>
                                    <Card.Text>
                                        Sign in to the Abshore website on your laptop, phone or tablet and take advantage of the benefits of our service.
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                    <small className="text-muted"></small>
                                </Card.Footer>
                            </Card>
                        </Col>
                        <Col>
                            <Card className='Card' style={{ alignItems: 'center', textAlign: 'center', height: '320px' }} >
                                <Card.Img variant="top" style={{ width: '200px' }} src={image2} />
                                <Card.Body>
                                    <Card.Title>Deposit Your Check !</Card.Title>
                                    <Card.Text>
                                        Deposit your check
                                        Choose the account where you want to deposit the check, photograph the front of your check first and then the back.{' '}
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                    <small className="text-muted"></small>
                                </Card.Footer>
                            </Card>
                        </Col>
                        <Col>
                            <Card className='Card' style={{ alignItems: 'center', textAlign: 'center', height: '320px' }} >
                                <Card.Img variant="top" style={{ width: '200px' }} src={image3} />
                                <Card.Body>
                                    <Card.Title>Validate Your Deposit</Card.Title>
                                    <Card.Text>
                                        Modify your extracted info if you find an error then Validate the transaction and that’s it!
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                    <small className="text-muted"></small>
                                </Card.Footer>
                            </Card>
                        </Col>
                    </Row>
                    <Container>
                        <Card style={{ border: 'transparent', background: 'transparent' }}>
                            <Card.Body >
                                <blockquote className="blockquote mb-0">
                                    <p>
                                        <Card.Img variant="top" style={{ width: '50px', marginRight:'10px' }} src={help} />
                                        {' '}
                                        Need more help? We made a demo video to show you how to do it.{' '}
                                        <Button style={{width:'150px', marginLeft:'30px', background: '#E68F36', border: '#E68F36'}}>Watch here</Button>
                                    </p>
                                </blockquote>
                            </Card.Body>
                        </Card>
                    </Container>
                </Container>

            </CardGroup>
        </div>
    );
}

export default GroupExample;