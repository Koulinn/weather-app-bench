import React from 'react'
import { Form } from 'react-bootstrap'

function Header({setLocationValue}) {

    
    return (
        <div>
            <h1>Pick Location</h1>
            <Form>
                <Form.Group controlId="locationForm">
                    <Form.Control type="text" placeholder="Enter location" onChange={e=> setLocationValue(e.target.value)}/>
                </Form.Group>
            </Form>
        </div>
    )
}

export default Header
