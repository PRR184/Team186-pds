import React from 'react'
import { Table} from 'react-bootstrap'


const Usertrans = ({orders})=>{
    if(!orders)
        window.alert('Error in orders!');
    return(
        <div>
                <h2> Consumers Transactions </h2>
                <Table striped bordered hover>
                <thead>
                    <tr>
                    {/* <th>#</th> */}
                    <th>Consumer Account</th>
                    <th>ShopId</th>
                    <th>Items</th>
                    <th>Quantity(Kg)</th>
                    <th>Transaction Time</th>
                    </tr>
                </thead>
                <tbody>
                    {orders.map(transfer=>{
                    return (
                    <tr>
                        <td>{transfer.customerMetamaskAccount}</td>
                        <td>{transfer.shopId}</td>
                        <td>{transfer.itemIds.map(item=><td>{`| ${item} |`}</td>)}</td>
                        <td>{transfer.eachItemQuantities.map(quantity=><td>{`| ${quantity} |`}</td>)}</td>
                        <td>{transfer.time}</td>
                    </tr>
                    )
                    })}
                    
                </tbody>
                </Table>
            </div>
    );
}

export default Usertrans;