import React, {Component} from 'react';
import {Navbar, Nav, Form, FormControl, Button} from "react-bootstrap";
import "./header.css";

class Header extends Component {
    render() {
        return (
            <Navbar bg="dark" expand="lg">
                <div className='container my-navbar'>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto my-navbar">
                            <Nav.Link href="#link">
                                <span className="home">HOME</span>
                                <ul className='my-ul'>
                                    <li>HOME ON</li>
                                    <li>HOME TWO</li>
                                    <li>HOME THREE</li>
                                </ul>
                            </Nav.Link>
                            <Nav.Link href="#link"><span className='my-link'>ABOUT US</span></Nav.Link>
                            <Nav.Link href="#link">
                                <span className='my-link'>TREATMENTS</span>
                                <ul className='my-ul'>
                                    <li>TREATMENT V1</li>
                                    <li>TREATMENT V2</li>
                                    <li>TREATMENT FULLWIDTH</li>
                                    <li>TREATMENT MASONRY</li>
                                    <li>TREATMENT DETAIL</li>
                                </ul>
                            </Nav.Link>
                            <Nav.Link href="#link">
                                <span className='my-link'>BLOG</span>
                                <ul className='my-ul'>
                                    <li>BLOG V1</li>
                                    <li>BLOG V2</li>
                                    <li>BLOG DETAIL</li>
                                </ul>
                            </Nav.Link>
                            <Nav.Link href="#link">
                                <span className='my-link'>CONTACT</span>
                                <ul className='my-ul'>
                                    <li>CONTACTUS</li>
                                    <li>CONTACTUS2</li>
                                </ul>
                            </Nav.Link>
                            <Nav.Link href="#link">
                                <span className='my-link'>PAGES</span>
                                <ul className='my-ul'>
                                    <li>SERVICES</li>
                                    <li>DEPARTMENTS</li>
                                    <li>APPOINTMENT</li>
                                    <li>404 PAGE</li>
                                    <li>COMING SOON</li>
                                </ul>
                            </Nav.Link>
                        </Nav>
                        <Form inline>
                            <FormControl type="text" placeholder="Search Your Queries" className="mr-sm-2"/>
                            <Button variant="outline-success">Search</Button>
                        </Form>
                    </Navbar.Collapse>
                </div>
            </Navbar>
        );
    }
}

export default Header;