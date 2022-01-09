import React, { Component } from 'react'
import { Form} from 'react-bootstrap'

export default class Grid extends Component {
    render(){
        return(
            <div>
                <Form>
                    <Form.Group className="mb-4" controlId="itemname">
                            <Form.Label>Itemname</Form.Label>
                            <Form.Control type="itd" placeholder="Enter Item Name" />
                            <Form.Label>Quantity</Form.Label>
                            <Form.Control type="qid" placeholder="Enter Quantity" />
                    </Form.Group>
                </Form>
            </div>
        )
    }
}