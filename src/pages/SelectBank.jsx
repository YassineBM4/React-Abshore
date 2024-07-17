import React from 'react';
import { Banks } from '../Helpers/Banks';
import BankList from '../Components/Banks';
import { Row, Col, Container } from 'react-bootstrap';
import SearchBar from '../Components/SearchBar';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

function SelectBank() {
    return (
        <Container style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '30px' }}>
            <h1 className="text-center my-4">Select your check's bank</h1>
            <SearchBar />
            <Row xs={1} sm={2} md={3} className="justify-content-center g-3">
                {Banks.map((bankItem, key) => (
                    <Col key={key} className="d-flex justify-content-center">
                        <BankList
                            image={bankItem.image}
                            name={bankItem.name}
                            status={bankItem.status}
                        />
                    </Col>
                ))}
            </Row>
            <Row style={{gap:'20px'}}>
                <Button as={Link} to="/BankLink" style={{ width: '200px', height: '40px', background: '#0D7CC3', border: '#0D7CC3' }}>Back</Button>
                <Button as={Link} to="/TakePhoto" style={{ width: '200px', height: '40px', background: '#E68F36', border: '#E68F36' }}>Continue</Button>
            </Row>
        </Container>
    );
}

export default SelectBank;
