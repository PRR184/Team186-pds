import React  from 'react'
import { Table} from 'react-bootstrap'


const Transactions = ({transfered,received})=>{
    if(!transfered || !received)
        window.alert('Error in transactions!');
    return(
            <div>
                <div className='heading1'>
                    <h2 className='head'> Transfered Transactions </h2>
                </div>
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
                        <td>{transfer.Bags.map(bag=><td>{`| ${bag} |`}</td>)}</td>
                        <td>{transfer.time}</td>
                    </tr>
                    )
                    })}
                </tbody>
                </Table>

                <div className='heading1'>
                    <h2 className='head'> Received Transactions </h2>
                </div>
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
                    {received.map(transfer=>{
                    return (
                    <tr>
                        <td>{transfer.fromId}</td>
                        <td>{transfer.toId}</td>
                        <td>{transfer.Bags.map(bag=><td>{`| ${bag} |`}</td>)}</td>
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