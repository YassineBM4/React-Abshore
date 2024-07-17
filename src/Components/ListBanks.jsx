import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import image0 from '../images/linkAccount.png';
import image1 from '../images/bankAdd.png';
import click from '../images/arrowClick.png';
import { Link } from 'react-router-dom';

function ListBanks({ image, name, rib }) {

    return (
        <div>
            <Card.Body style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', columnGap: '30px', marginBottom:'10px' }}>
                <Card.Img style={{ width: '55px' }} src={image} />
                <Card.Text style={{marginBottom:'0px'}}>
                    {name} Bank
                    <p style={{marginBottom:'0px', color:'grey'}}>
                        RIB : {rib}
                    </p>
                </Card.Text>
                <Button as={Link} to='#' style={{ background: '#0D7CC3', border: '#0D7CC3', alignItems: 'flex-end' }}>Select</Button>
            </Card.Body>
        </div>
    )
}

export default ListBanks