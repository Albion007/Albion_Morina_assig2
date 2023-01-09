import React, { Component } from 'react'
import { Navbar, NavDropdown, Form, FormControl, Button, Nav } from 'react-bootstrap'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import Home from './Home';
import Wikipedia from './Wikipedia';
import Weather from './Weather';
import Profile from "./Profile";

export default class NavbarComp extends Component {
    render() {
        return (
            <Router>
                <div>

                    <Navbar bg="dark" variant={"dark"} expand="lg">
                        <Navbar.Brand href="#">MashUp Example</Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll">
                            <Nav
                                className="mr-auto my-2 my-lg-0"
                                style={{ maxHeight: '100px' }}
                                navbarScroll
                            >
                                <Nav.Link as={Link} to="/home">Home</Nav.Link>
                                <Nav.Link as={Link} to="/weather">Weather</Nav.Link>
                                <Nav.Link as={Link} to="/wikipedia">Wikipedia</Nav.Link>
                            </Nav>

                        </Navbar.Collapse>
                    </Navbar>
                </div>
                <div>
                    <Switch>
                        <Route path="/weather">
                            <Weather />
                        </Route>
                        <Route path="/wikipedia">
                            <Wikipedia />
                        </Route>
                        <Route path="/home">
                            <Home />
                        </Route>
                    </Switch>
                </div>
            </Router>
        )
    }
}
