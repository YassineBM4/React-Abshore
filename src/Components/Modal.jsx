import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Link } from 'react-router-dom';
import click from '../images/arrowClick.png';
import Card from 'react-bootstrap/Card';
import { BankList } from "../Helpers/BankList";
import ListBanks from "../Components/ListBanks";

function Modals() {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div>
            <Button onClick={handleShow} style={{background:'#0D7CC3', border:'#0D7CC3', display:'flex'}} >
                Change
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>My Bank Cards</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                {BankList.map((BankItem, key) => {
                    return (
                        <ListBanks
                            key={key}
                            image={BankItem.image}
                            name={BankItem.name}
                            rib={BankItem.rib}
                        />
                    )
                })}
                </Modal.Body>
            </Modal>
        </div>
    )
}

export default Modals