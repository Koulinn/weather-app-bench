import React from 'react'
import { Form } from 'react-bootstrap'
import {debounce} from 'lodash'


function Header({ setLocationValue }) {

    const searchInputHandler = debounce((e) =>{
        setLocationValue(e.target.value)
      }, 500)

    return (
        <div>
            <h1 className="text-center mb-4">Weather cloud</h1>
            <Form>
                <Form.Group controlId="locationForm">
                    <Form.Control type="text" placeholder="Enter location"
                        onChange={e => {
                            searchInputHandler(e)
                        }
                        }
                    />
                </Form.Group>
            </Form>
        </div>
    )
}

export default Header
