import React from 'react'
import Card from 'react-bootstrap/Card';

function Banks({ image, name, status }) {
    return (
        <Card style={{ width: '20rem', display: 'flex', flexDirection: 'row', alignItems: 'center', height: '130px'}}>
            <Card.Img style={{ width: '100px', marginLeft: '10px', filter: status ? 'blur(0px)' : 'blur(10px)'  }} src={image} />
            <Card.Body>
                <Card.Text style={{filter: status ? 'blur(0px)' : 'blur(10px)' }}>
                    {name}
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default Banks