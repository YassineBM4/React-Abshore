import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Button, Container, Row, Card, Col } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { Link } from 'react-router-dom';

const OCR = () => {
    const location = useLocation();
    const { screenshot, secondScreenshot } = location.state || {};
    console.log('screenshot from OCR:', screenshot);
    console.log('secondScreenshot from OCR:', secondScreenshot);


    return (
        <div>
            <Container style={{ marginTop: '30px' }}>
                <Row>
                    <Col style={{ justifyContent: 'center', gap: '20px' }}>
                        {screenshot && (
                            <Card style={{ width: '100%', maxWidth: '700px' }}>
                                <Card.Img variant="top" src={screenshot} alt="Front Check" />
                                <Card.Body>
                                    <Card.Title style={{ color: '#0D7CC3' }}>Front Check Photo</Card.Title>
                                </Card.Body>
                            </Card>
                        )}
                    </Col>
                    <Col>
                        {secondScreenshot && (
                            <Card style={{ width: '100%', maxWidth: '700px' }}>
                                <Card.Img variant="top" src={secondScreenshot} alt="Back Check" />
                                <Card.Body>
                                    <Card.Title style={{ color: '#0D7CC3' }}>Back Check Photo</Card.Title>
                                </Card.Body>
                            </Card>
                        )}
                    </Col>
                </Row>
            </Container>
            <Container style={{ marginTop: '20px' }}>
                <Card body>
                    <InputGroup className='mb-3'>
                        <InputGroup.Text>Pay to the order of ( Payee )</InputGroup.Text>
                        <Form.Control aria-label="Payee" />
                    </InputGroup>
                    <InputGroup className='mb-3'>
                        <InputGroup.Text>Date</InputGroup.Text>
                        <Form.Control aria-label="Date" />
                    </InputGroup>
                    <InputGroup className='mb-3'>
                        <InputGroup.Text>Amount Line</InputGroup.Text>
                        <Form.Control aria-label="Amount" />
                    </InputGroup>
                    <InputGroup className='mb-3'>
                        <InputGroup.Text>Memo Line</InputGroup.Text>
                        <Form.Control aria-label="Memo" />
                    </InputGroup>
                    <InputGroup className='mb-3'>
                        <InputGroup.Text>Amount Box</InputGroup.Text>
                        <Form.Control aria-label="Dollar amount (with dot and two decimal places)" />
                        <InputGroup.Text>0.00</InputGroup.Text>
                        <InputGroup.Text>TND</InputGroup.Text>
                    </InputGroup>
                    <InputGroup className='mb-3'>
                        <InputGroup.Text>Endorsement Area</InputGroup.Text>
                        <Form.Control aria-label="endorsement" />
                    </InputGroup>
                    <InputGroup className='mb-3'>
                        <InputGroup.Text>Payer Signature Line</InputGroup.Text>
                        <Form.Control aria-label="Signature Line" />
                    </InputGroup>
                </Card>
            </Container>
            <Container>
                <Row style={{ gap: '20px', justifyContent: 'flex-end', marginBottom:'10px' }}>
                    <Button style={{ background: '#0D7CC3', border: '#0D7CC3', width: '200px', height: '40px', marginTop: '20px' }} >
                        Save
                    </Button>
                    <Button style={{ background: '#E68F36', border: '#E68F36', width: '200px', height: '40px', marginTop: '20px' }}>
                        Confirm Deposit
                    </Button>
                </Row>
            </Container>
        </div>
    );
};

export default OCR;
