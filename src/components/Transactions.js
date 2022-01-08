import React, { Component } from 'react'
import { Form, Button ,Table} from 'react-bootstrap'


const Transactions = ({transfered,received})=>{
    if(!transfered || !received)
        window.alert('Error in transactions!');
    return(
            <div>
                <h2> Transfered Transactions </h2>
                <Table striped bordered hover>
                <thead>
                    <tr>
                    {/* <th>#</th> */}
                    <th>From</th>
                    <th>To</th>
                    <th>Bag List</th>
                    <th>Transaction Time</th>
                    </tr>
                </thead>
                <tbody>
                    {transfered.map(transfer=>{
                    return (
                    <tr>
                        <td>{transfer.fromId}</td>
                        <td>{transfer.toId}</td>
                        <td>{transfer.Bags.map(bag=><td>{`   ${bag}  `}</td>)}</td>
                        <td>{transfer.time}</td>
                    </tr>
                    )
                    })}
                    {received.map(transfer=>{
                    return (
                    <tr>
                        <td>{transfer.fromId}</td>
                        <td>{transfer.toId}</td>
                        <td>{transfer.Bags.map(bag=><td>{`   ${bag}  `}</td>)}</td>
                        <td>{transfer.time}</td>
                    </tr>
                    )
                    })}
                    
                </tbody>
                </Table>
            </div>
    );
}


export default Transactions;