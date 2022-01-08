import Web3 from 'web3'
import {
  web3Loaded,
  web3AccountLoaded,
  pdsLoaded,
} from './actions'
import PDS from '../abis/PDS.json'

export const loadWeb3 = async (dispatch) => {
  if(typeof window.ethereum!=='undefined'){
    const web3 = new Web3(window.ethereum)
    dispatch(web3Loaded(web3))
    return web3
  } else {
    window.alert('Please install MetaMask')
    window.location.assign("https://metamask.io/")
  }
}

export const loadAccount = async (web3, dispatch) => {
  const accounts = await web3.eth.getAccounts()
  const account = await accounts[0]
  if(typeof account !== 'undefined'){
    dispatch(web3AccountLoaded(account))
    return account
  } else {
    window.alert('Please login with MetaMask')
    return null
  }
}

export const loadPDS = async (web3, networkId, dispatch) => {
  try {
    const pds = new web3.eth.Contract(PDS.abi, PDS.networks[networkId].address)
    dispatch(pdsLoaded(pds))
    return pds
  } catch (error) {
    console.log('Contract not deployed to the current network. Please select another network with Metamask.')
    return null
  }
}

// export const loadShops = async (pds, dispatch) => {
//   try {
//     const shops=
//     dispatch(pdsLoaded(pds))
//     return pds
//   } catch (error) {
//     console.log('Contract not deployed to the current network. Please select another network with Metamask.')
//     return null
//   }
// }
// export const addShop = async(dispatch, pds, order,account)=>{
//   await pds.methods.addShops(order.id,order.name,order.address,order.location).send({ from: account })
//   .on('transactionHash', (hash) => {

//     dispatch(addShopTo(order))
//   })
//   .on('error',(error) => {
//     console.error(error)
//     window.alert(`There was an error!`)
//   })
// }

