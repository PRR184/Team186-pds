import React, { Component } from 'react'
import { Form, Button } from 'react-bootstrap'
import {Message} from 'semantic-ui-react';
import { connect } from 'react-redux'
import { InputGroup,FormControl } from 'react-bootstrap'
import {pdsSelector} from '../store/selectors'

class Details extends Component {
    state = {
        id:'',
        errorMessage:'',
        loading:false,
        shop:{
            id:'',
            name:'',
            address:'',
            location:'',
        }
    };

    onSubmit = async(event)=>{
        event.preventDefault();
        this.setState({loading:true,errorMessage:''});
        const {pds}=this.props
        try{
            const shop = await pds.methods.shops(this.state.id).call();
            this.setState({
                shop:shop
            })
        }catch(e){
            this.setState({
                errorMessage:e
            })
        }
        this.setState({        
            loading:false,
        });
    };

    render() {
        return (
            <div>
                <h2> Find the Shop Details Below!</h2>
                
                <Form onSubmit={this.onSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicId">
                        <Form.Label>ShopId</Form.Label>
                        <Form.Control type="text" placeholder="Id" onChange = { event => this.setState({id:event.target.value})}/>
                    </Form.Group>

                    <Button primary type="submit" loading={this.state.loading}>Create!</Button>
                </Form>
                {this.state.shop.name}
            </div>
        )
    }
}

function mapStateToProps(state) {
  
    return {
      pds: pdsSelector(state),
    }
  }
  
export default connect(mapStateToProps)(Details)
