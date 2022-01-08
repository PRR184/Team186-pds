import React, { Component } from 'react'
import { Form, Button } from 'react-bootstrap'
import {Message} from 'semantic-ui-react';
import { connect } from 'react-redux'
import { addShop } from '../store/interactions';
import { accountSelector, pdsSelector} from '../store/selectors';

class Addistrict extends Component {
    state = {
        id:'',
        name:'',
        address:'',
        location:'',
        errorMessage:'',
        loading:false
    };

    onSubmit = async(event)=>{
        event.preventDefault();
        const {dispatch,pds,sender}=this.props
        this.setState({loading:true,errorMessage:''});
        console.log(pds,sender);

        try{
            // const accounts = await web3.eth.getAccounts();
            // await factory.methods.createCampaign(this.state.minimumContribution).send({from:accounts[0]});
            // // Redirect user to home page.
            // Router.pushRoute('/');
            const order = {
                id:this.state.id,
                name:this.state.name,
                address:this.state.address,
                location:this.state.location
            }
            console.log('order',order);
            await addShop(dispatch,pds,order,sender);

        }catch(err){
            this.setState({errorMessage:err.message});
        }        

        this.setState({        
        id:'',
        name:'',
        address:'',
        location:'',
        errorMessage:'',
        loading:false
        });
    };

    render() {
        return (
            <div>
                <h1>Add a Shop</h1>
                <Form onSubmit={this.onSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicId">
                        <Form.Label>Id</Form.Label>
                        <Form.Control type="text" placeholder="Id" onChange = { event => this.setState({id:event.target.value})}/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Name" onChange = { event => this.setState({name:event.target.value})}/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicAddress">
                        <Form.Label>Address</Form.Label>
                        <Form.Control type="text" label="Address" onChange = { event => this.setState({address:event.target.value})}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicLocation">
                        <Form.Label>Location</Form.Label>
                        <Form.Control type="text" label="location" onChange = { event => this.setState({location:event.target.value})}/>
                    </Form.Group>
                    <Button primary type="submit" loading={this.state.loading}>Create!</Button>
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
  
export default connect(mapStateToProps)(Addistrict)
