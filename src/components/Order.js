import React, { Component } from 'react'
import { Form, Button, InputGroup, FormControl} from 'react-bootstrap'
import './App.css';
import { connect } from 'react-redux'
import {pdsSelector,accountSelector} from '../store/selectors'

class Order extends Component {
    constructor(props) {
        super(props);
        this.state = {
            address:'',
            shopId:'',
            itemId:'',
            quantity:'', 
            inputs: ['input-0']
        }
    }
        appendInput(event) {
            event.preventDefault();
            var newInput = `input-${this.state.inputs.length}`;
            this.setState(prevState => ({ inputs: prevState.inputs.concat([newInput])}));
        }
    
Grid=(input)=>{
        return(
            <div>
                <InputGroup className="mb-3">
                    <FormControl
                    placeholder="Item Id"
                    aria-label="Item Id"
                    aria-describedby="basic-addon1"
                    className='hr'
                    onChange = { event => this.setState({itemId:event.target.value})}
                    />
                    <FormControl
                    placeholder="Item Quantity"
                    aria-label="Item Quantity"
                    aria-describedby="basic-addon2"
                    className='hr'
                    onChange = { event => this.setState({quantity:event.target.value})}
                    />
                </InputGroup>
            </div>
        )
}

onSubmit = async(event)=>{
    event.preventDefault();
    const {pds,sender}=this.props
    try{
        // const accounts = await web3.eth.getAccounts();
        // await factory.methods.createCampaign(this.state.minimumContribution).send({from:accounts[0]});
        // // Redirect user to home page.
        // Router.pushRoute('/');
        const order = {
            address:this.state.address,
            shopId:this.state.shopId,
            itemId:[this.state.itemId],
            quantity:[this.state.quantity]
        }
        console.log("order 11",order);
          await pds.methods.orderMade(order.address,order.shopId,order.itemId,order.quantity).send({ from: sender })
          .on('transactionHash', (hash) => {
            console.log('Order of Consumer', hash);
            alert('Adding Orders to Database successful')

        })
        .on('error',(error) => {
          console.error(error)
          window.alert(`There was an error with Order Made or No access to the database`)
        })

    }catch(err){
        this.setState({errorMessage:err.message});
    }        
};
    render() {
        return (
            <div>
                <div className='heading1'>
                    <h2 className='head'>Order Made by Shop Owner</h2>
                </div>

                <Form className='Har' onSubmit={this.onSubmit}>
                    
                    <Form.Group className="mb-4" controlId="oid">
                        <Form.Label>Consumer Account Number</Form.Label>
                        <Form.Control type="cid" placeholder="Enter Consumer Account Number" className='hr' onChange = { event => this.setState({address:event.target.value})}/>
                    </Form.Group>

                    <Form.Group className="mb-4 xs={6}" controlId="did">
                        <Form.Label>Shop Id</Form.Label>
                        <Form.Control type="sid" placeholder="Enter shop id" className='hr' onChange = { event => this.setState({shopId:event.target.value})}/>
                    </Form.Group>

                    <Form.Group className="mb-3 xs={6}" controlId="itemid">
                        <Form.Label>Items Taken By Consumer</Form.Label>
                        {this.state.inputs.map(input => this.Grid())}
                    </Form.Group>

                    <button onClick={ (e) => this.appendInput(e) }>
                        ADD A ITEM
                    </button>

                    <Button variant="primary" type="submit">
                        Submit
                    </Button>

                </Form>
            </div>
        )
    }
}

function mapStateToProps(state) {
  
    return {
        sender: accountSelector(state),
      pds: pdsSelector(state),
    }
  }
  
export default connect(mapStateToProps)(Order)