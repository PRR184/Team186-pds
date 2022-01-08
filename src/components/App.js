import React, { Component } from 'react'
import './App.css'
// import Navbar from './Navbar'
// import Content from './Content'
import { connect } from 'react-redux'
import {
  loadWeb3,
  loadAccount,
  loadPDS,
  loadShops,
} from '../store/interactions'
import { pdsLoadedSelector } from '../store/selectors'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComp from './NavbarComp';

class App extends Component {
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

    await loadShops(pds,dispatch)

    try{
    //Fetching State Admin.
    // const ans  = await pds.methods.stateAdmin('0x1b41588Ca988788dD5247Dde28aAcbCF5f13B7f8').call()
    // console.log(ans);

    //Shop Details.
    const shop = await pds.methods.shops(100).call();
    console.log('shopDetails',shop);
    //Transfered Bags.
    const transferHistory = await pds.getPastEvents('Transfered', { fromBlock: 0, toBlock: 'latest' })
    const transfers = await transferHistory.map((event) => event.returnValues)
    console.log('transfers',transfers);

    //Received Bags
    const receivedHistory = await pds.getPastEvents('Received', { fromBlock: 0, toBlock: 'latest' })
    const received = await receivedHistory.map((event) => event.returnValues)
    console.log('received',received);

    //OrdersMade
    const ordersHistory = await pds.getPastEvents('Order', { fromBlock: 0, toBlock: 'latest' })
    const orders = await ordersHistory.map((event) => event.returnValues)
    console.log('orders',orders);    
    }catch(e){
      window.alert('Not State Admin')
    }

  }

  render() {
    return (
      <div className='App'>
        <NavbarComp/>
        {/* <Navbar /> */}
        { this.props.contractsLoaded ? <div>ContractLoaded(show content)</div>  : <div >Failure</div> }
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
