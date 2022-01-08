import React, { Component } from 'react'
import './App.css'
import moment from 'moment'

// import Navbar from './Navbar'
// import Content from './Content'
import { connect } from 'react-redux'
import {
  loadWeb3,
  loadAccount,
  loadPDS,
} from '../store/interactions'
import { pdsLoadedSelector } from '../store/selectors'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComp from './NavbarComp';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      transfered:[],
      received:[],
      orders:[]
    };

  }
  componentWillMount() {
    this.loadBlockchainData(this.props.dispatch)
  }

  async loadBlockchainData(dispatch) {

    const web3 = await loadWeb3(dispatch)
    const networkId = await web3.eth.net.getId()
    await loadAccount(web3, dispatch)
    const pds = await loadPDS(web3, networkId, dispatch)
    if(!pds) {
      window.alert('PDS smart contract not detected on the current network. Please select another network with Metamask.')
      return
    }
    let transfers;
    try{
    //Shop Details.
    const shop = await pds.methods.shops(100).call();
    console.log('shopDetails',shop);

    //Transfered Bags.
    const transferHistory = await pds.getPastEvents('Transfered', { fromBlock: 0, toBlock: 'latest' })
    transfers = await transferHistory.map((event) => {
    const data =event.returnValues;
    return {
                fromId:data.fromId,
                toId:data.toId,
                Bags:data.bagIds,
                time:moment.unix(data.timestamp).format('dddd, MMMM Do, YYYY h:mm:ss A')
            }
    })
    console.log('transfers',transfers);

    // Received Bags
      const receivedHistory = await pds.getPastEvents('Received', { fromBlock: 0, toBlock: 'latest' })
      const received = await receivedHistory.map((event) => {
            const data =event.returnValues;
            return {
              fromId:data.fromId,
              toId:data.toId,
              Bags:data.bagIds,
              time:moment.unix(data.timestamp).format('dddd, MMMM Do, YYYY h:mm:ss A')
          }
      })
    console.log('received',received);

    //OrdersMade
    const ordersHistory = await pds.getPastEvents('Order', { fromBlock: 0, toBlock: 'latest' })
    const orders = await ordersHistory.map((event) => {
      const data =event.returnValues;
      return {
        customerMetamaskAccount:data.customerAddress,
        shopId:data.shopId,
        itemIds:data.itemIds,
        eachItemQuantities:data.quantities,
        time:moment.unix(data.timestamp).format('dddd, MMMM Do, YYYY h:mm:ss A'),

    }
    })
    console.log('orders',orders);    
    this.setState({
      transfered:transfers,
      received:received,
      orders:orders,
    })
    }catch(e){
      window.alert('Transactions not Fetching')
    }

  }

  render() {
    return (
      <div className='App'>
        <NavbarComp transfered={this.state.transfered} received={this.state.received} orders={this.state.orders}/>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    contractsLoaded: pdsLoadedSelector(state)
  }
}

export default connect(mapStateToProps)(App)
