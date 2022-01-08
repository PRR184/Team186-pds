import React, { Component } from 'react'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
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
import Addconsumer from './Addconsumer';
import Adddistrict from './Adddistrict';
import Districtres from './Districtres';
import Shopres from './Shopres';

const NavbarComp=({transfered,received, orders})=>{
        return (
            <Router>
                <div>

                    <Navbar bg="dark" variant={"dark"} expand="lg">
                        <Navbar.Brand>Public Distribution System</Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll">
                            <Nav
                                className="mr-auto my-2 my-lg-0"
                                style={{ maxHeight: '100px' }}
                                navbarScroll
                            >
                                <Nav.Link as={Link} to="/home">Home</Nav.Link>
                                <Nav.Link as={Link} to="/details">Shop Details</Nav.Link>
                                <Nav.Link as={Link} to="/order">Make Order</Nav.Link>
                                <Nav.Link as={Link} to="/transactions">Transactions</Nav.Link>
                                <Nav.Link as={Link} to="/usertrans">User Transactions</Nav.Link>

                                <NavDropdown
                                    id="nav-dropdown-dark-example"
                                    title="Result"
                                    menuVariant="dark"
                                >
                                    <NavDropdown.Item>                                 
                                        <Nav.Link as={Link} to="/districtres">View District Results</Nav.Link>
                                    </NavDropdown.Item>
                                    <NavDropdown.Item> 
                                        <Nav.Link as={Link} to="/shopres">View Shop Results</Nav.Link>
                                    </NavDropdown.Item> 
                                </NavDropdown>
                                


                                <NavDropdown
                                    id="nav-dropdown-dark-example"
                                    title="Add"
                                    menuVariant="dark"
                                >
                                    <NavDropdown.Item>                                 
                                        <Nav.Link as={Link} to="/adddistrict">Add a District</Nav.Link>
                                    </NavDropdown.Item>
                                    <NavDropdown.Item> 
                                        <Nav.Link as={Link} to="/addconsumer">Add a Consumer</Nav.Link>
                                    </NavDropdown.Item> 
                                </NavDropdown>


                            </Nav>

                        </Navbar.Collapse>
                    </Navbar>
                </div>
                <div>
                    <Switch>

                    <Route path="/shopres">
                            <Shopres />
                        </Route>

                    <Route path="/districtres">
                            <Districtres />
                        </Route>

                    <Route path="/adddistrict">
                            <Adddistrict />
                        </Route>

                    <Route path="/addconsumer">
                            <Addconsumer />
                        </Route>

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
