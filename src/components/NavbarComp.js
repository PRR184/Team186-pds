import React from 'react'
import { Navbar, Nav} from 'react-bootstrap'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import Home from './Home';
import Order from './Order';
import Details from './Details';
import Transactions from './Transactions';
import Usertrans from './Usertrans';
import Results from './Results';
// import Addconsumer from './Addconsumer';
// import Adddistrict from './Adddistrict';
import Districtres from './Districtres';
// import Shopres from './Shopres';
import Transfer from './Transfer';
import AddReceivedBags from './AddReceivedBags';
import img from '../pds_logo.png';

const NavbarComp=({transfered,received, orders})=>{
        return (
            <Router>
                <div className='navb'>

                    <Navbar bg="dark" variant={"dark"} expand="lg" className='nvb'>
                        <Navbar.Brand><img src={img} width='12%' alt='PDS'/></Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll">
                            <Nav
                                className="mr-auto my-2 my-lg-0"
                                style={{ maxHeight: '100px' }}
                                navbarScroll
                            >
                                <Nav.Link as={Link} to="/home" className='header'>Home</Nav.Link>
                                <Nav.Link as={Link} to="/details" className='header'>Shop&nbsp;Details</Nav.Link>
                                <Nav.Link as={Link} to="/order" className='header'>Make&nbsp;Order</Nav.Link>
                                <Nav.Link as={Link} to="/transfer" className='header'>Add&nbsp;TransferedBags</Nav.Link>
                                <Nav.Link as={Link} to="/AddReceivedBags" className='header'>Add&nbsp;ReceivedBags</Nav.Link>
                                <Nav.Link as={Link} to="/transactions" className='header'>Transactions</Nav.Link>
                                <Nav.Link as={Link} to="/usertrans" className='header'>User&nbsp;Transactions</Nav.Link>
                                <Nav.Link as={Link} to="/districtres" className='header'>View&nbsp;District&nbsp;Results</Nav.Link>
                                {/* <NavDropdown
                                    id="nav-dropdown-dark-example"
                                    title="Result"
                                    menuVariant="dark" className='header'
                                >
                                    <NavDropdown.Item>                                 
                                        
                                    </NavDropdown.Item> */}
                                    {/* <NavDropdown.Item> 
                                        <Nav.Link as={Link} to="/shopres" className='header'>View Shop Results</Nav.Link>
                                    </NavDropdown.Item>  */}
                                {/* </NavDropdown> */}
                                


                                {/* <NavDropdown
                                    id="nav-dropdown-dark-example"
                                    title="Add"
                                    menuVariant="dark" className='header'
                                >
                                    <NavDropdown.Item>                                 
                                        <Nav.Link as={Link} to="/adddistrict" className='header'>Add a District</Nav.Link>
                                    </NavDropdown.Item>
                                    <NavDropdown.Item> 
                                        <Nav.Link as={Link} to="/addconsumer" className='header'>Add a Consumer</Nav.Link>
                                    </NavDropdown.Item> 
                                </NavDropdown> */}


                            </Nav>

                        </Navbar.Collapse>
                    </Navbar>
                </div>
                <div>
                    <Switch>

                    <Route path="/transfer">
                            <Transfer />
                        </Route>
                    <Route path="/AddReceivedBags">
                            <AddReceivedBags />
                    </Route>

                    {/* <Route path="/shopres">
                            <Shopres />
                        </Route> */}

                    <Route path="/districtres">
                        <Districtres transfered={transfered} received={received} orders={orders}/>
                        </Route>

                    {/* <Route path="/adddistrict">
                            <Adddistrict />
                        </Route>

                    <Route path="/addconsumer">
                            <Addconsumer />
                        </Route> */}

                    <Route path="/results">
                            <Results />
                        </Route>

                        <Route path="/usertrans">
                            <Usertrans orders={orders} />
                        </Route> 

                        <Route path="/transactions">
                            <Transactions transfered={transfered} received={received}/>
                        </Route>

                        <Route path="/details">
                            <Details />
                        </Route>

                        <Route path="/order">
                            <Order />
                        </Route>

                        <Route path="/">
                            <Home />
                        </Route>
                        
                    </Switch>
                </div>
            </Router>
)}

export default NavbarComp;
