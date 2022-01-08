import React, { Component } from 'react'

export default class Order extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = { inputs: ['input-0'] };
    // }
    // appendInput(event) {
    //     event.preventDefault();
    //     var newInput = `input-${this.state.inputs.length}`;
    //     this.setState(prevState => ({ inputs: prevState.inputs.concat([newInput]) }));
    // }
    render() {
        return (
            <div>
                <h2>Order</h2>

                {/* <Form>
                    
                    <Form.Group className="mb-3" controlId="formid">
                        <Form.Label>Customer Address</Form.Label>
                        <Form.Control type="cid" placeholder="Enter Customer id" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="shopid">
                        <Form.Label>Shop id</Form.Label>
                        <Form.Control type="sid" placeholder="Enter shop id" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="shopid">
                        <Form.Label>Shop id</Form.Label>
                        <Form.Control type="sid" placeholder="Enter shop id" />
                        {this.state.inputs.map(input => <Form.Control type="sid" placeholder="Enter shop id" key={input} />)}

                    </Form.Group>

                    <button onClick={ (e) => this.appendInput(e) }>
                        CLICK ME TO ADD AN INPUT
                    </button>

                    <Form.Group className="mb-3" controlId="shopid">
                        <Form.Label>Shop id</Form.Label>
                        <Form.Control type="sid" placeholder="Enter shop id" />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Submit
                    </Button>

                </Form> */}
            </div>
        )
    }
}