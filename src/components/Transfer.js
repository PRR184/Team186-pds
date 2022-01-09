import React, { Component } from 'react'
import { Form, Button, InputGroup, FormControl} from 'react-bootstrap'
import './App.css';
import { connect } from 'react-redux'
import {pdsSelector,accountSelector} from '../store/selectors'

class Transfer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fromId:'',
            toId:'',
            bagId:'',
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
                    placeholder="Bag Id"
                    aria-label="Bag Id"
                    aria-describedby="basic-addon1"
                    className='hr'
                    onChange = { event => this.setState({bagId:event.target.value})}
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
            fromId:this.state.fromId,
            toId:this.state.toId,
            bagIds:[this.state.bagId],
        }

          await pds.methods.transferedBags(order.fromId,order.toId,order.bagIds).send({ from: sender })
          .on('transactionHash', (hash) => {
              console.log('Add Transfered Bags', hash);
              alert('Adding Transfered Bags to Database successful')

          })
          .on('error',(error) => {
            console.error(error)
            window.alert(`There was an error with Transaction! or No access to database`)
          })

    }catch(err){
        this.setState({errorMessage:err.message});
    }        

};
    render() {
        return (
            <div>
                <div className='heading1'>
                    <h2 className='head'>Add Transfered BagIds</h2>
                </div>

                <Form className='Har' onSubmit={this.onSubmit}>
                    
                    <Form.Group className="mb-4" controlId="oid">
                        <Form.Label>From Id</Form.Label>
                        <Form.Control type="cid" placeholder="Enter From Id" className='hr' onChange = { event => this.setState({fromId:event.target.value})}/>
                    </Form.Group>

                    <Form.Group className="mb-4 xs={6}" controlId="did">
                        <Form.Label>To Id</Form.Label>
                        <Form.Control type="sid" placeholder="Enter To Id" className='hr' onChange = { event => this.setState({toId:event.target.value})}/>
                    </Form.Group>

                    <Form.Group className="mb-3 xs={6}" controlId="itemid">
                        <Form.Label>Transfered BagIds</Form.Label>
                        {this.state.inputs.map(input => this.Grid())}
                    </Form.Group>

                    <button onClick={ (e) => this.appendInput(e) }>
                        ADD A BAG
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
  
export default connect(mapStateToProps)(Transfer)