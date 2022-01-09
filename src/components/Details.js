import React, { Component } from 'react'
import { Form, Button, Card } from 'react-bootstrap'
import { connect } from 'react-redux'
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
        },
        shopLoaded:false
    };

    onSubmit = async(event)=>{
        event.preventDefault();
        this.setState({loading:true,errorMessage:''});
        const {pds}=this.props
        try{
            const shop = await pds.methods.shops(this.state.id).call();
            this.setState({
                shop:shop,
                shopLoaded:true
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

    showCard=()=>{
        return(
            <div className='card'>
                <Card className='Cards'>
                <Card.Body>
                    <Card.Title>Name: {this.state.shop.name}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">ShopId: {this.state.shop.id}</Card.Subtitle>
                    <Card.Subtitle className="mb-2 text-muted">Metamask Account No: {this.state.shop.account}</Card.Subtitle>
                    <Card.Text>
                    ShopLocation:<br/>
                    {this.state.shop.location}
                    </Card.Text>
                </Card.Body>
                </Card>
            </div>
        )
    }
    render() {
        return (
            <div>
                <div className='heading1'>
                    <h2 className='head'> Find the Shop Details Below!</h2>
                </div>
                
                <Form onSubmit={this.onSubmit} className='Har'>
                    <Form.Group className="mb-3" controlId="formBasicId">
                        <Form.Label>ShopId</Form.Label>
                        <Form.Control className='hr' type="text" placeholder="Id" onChange = { event => this.setState({id:event.target.value})}/>
                    </Form.Group>

                    <Button primary type="submit" loading={this.state.loading}>Create!</Button>
                </Form>
                {this.state.shopLoaded?this.showCard():null}
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
