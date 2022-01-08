import React, { Component } from 'react'
import { Form, Button } from 'react-bootstrap'
import {Message} from 'semantic-ui-react';
import { connect } from 'react-redux'
import { InputGroup,FormControl } from 'react-bootstrap'
import { 
    shopDetailSelector
} from '../store/selectors'

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
        const {shops}=this.props
        this.setState({loading:true,errorMessage:''});

        try{
            const shop=shops.filter(shop=>shop.id===this.state.id);
            if(shop.length===0){
                throw Error("Wrong Id");
            }
            this.setState({
                shop:shop[0]
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

                {console.log('shop',this.state.shop)}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        shops:shopDetailSelector(state)
    }
  }
  
export default connect(mapStateToProps)(Details)
