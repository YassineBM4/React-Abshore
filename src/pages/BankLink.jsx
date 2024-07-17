import React, { useState } from "react";
import Card from 'react-bootstrap/Card';
import image0 from '../images/linkAccount.png'
import image1 from '../images/bankAdd.png';
import click from '../images/arrowClick.png';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import Modals from '../Components/Modal';
import { BankList } from "../Helpers/BankList";
import Form from 'react-bootstrap/Form';
import pdf from '../Files/terms.pdf'

function BankLink() {

    function handleCheckBoxChange(event) {
        setIsChecked(event.target.checked);
    } 

    const [isChecked, setIsChecked] = useState(false);
    const [modalShow, setModalShow] = useState(false);
    const firstBankItem = BankList[0];

    return (
        <div id='main' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <Card className='card-custom' style={{ display: 'flex', textAlign: 'left' }}>
                <Card.Header>Link Your Bank Account</Card.Header>
                <Card.Body className={`card-custom ${isChecked ? '' : 'blurred'}`} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', columnGap: '30px' }}>
                    <Card.Img style={{ width: '60px' }} src={firstBankItem.image} />
                    <Card.Text>
                        {firstBankItem.name} Bank
                        <p style={{ marginBottom: '0px', color: 'grey' }}>RIB : {firstBankItem.rib}</p>
                    </Card.Text>
                    <Modals
                        show={modalShow}
                        onHide={() => setModalShow(false)}
                    />
                </Card.Body>

                <Card.Body className={`card-custom ${isChecked ? '' : 'blurred'}`} style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', columnGap: '30px' }}>
                    <Card.Img style={{ width: '45px' }} src={image1} />
                    <Card.Text>
                        Create New Bank Card
                    </Card.Text>
                    <Button as={Link} to='/AddBankCard' style={{ background: '#0D7CC3', border: '#0D7CC3' }}>Create</Button>
                </Card.Body>
                <Card.Body style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    <div style={{ display: 'flex', gap: '10px' }}>
                        <Form.Check  className={!isChecked ? 'blue-border' : ''} type="checkbox" aria-label="option 1" id="check" style={{ marginLeft: '10px' }} onClick={handleCheckBoxChange} />
                        <p>I Accept The <a href={pdf} download="Terms & Conditions">Terms & Conditions</a></p>
                    </div>
                    <Button as={Link} to='/SelectBank' id="btn" style={{ background: isChecked? '#E68F36' : '#bc9166', border: isChecked ? '#E68F36' : '#bc9166', width: '100px'}} disabled={!isChecked}>Continue</Button>
                </Card.Body>
            </Card>
        </div>
    )
}

export default BankLink