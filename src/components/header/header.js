import React, {Component} from 'react';
import {Navbar, Nav, Form, FormControl, Button} from "react-bootstrap";
import "./header.css";

class Header extends Component {
    render() {
        return (
            <Navbar bg="dark" expand="lg">
                <div className='container'>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="my-navbar">
                            <Nav.Link href="#link">
                                <div className="nav-link">
                                    <span className="home th-list col-xl-12">HOME</span>
                                    <ul className='my-ul col'>
                                        <li>
                                            <a href="">HOME ON</a>
                                        </li>
                                        <li>
                                            <a href="">HOME TWO</a>
                                        </li>
                                        <li>
                                            <a href=''>HOME THREE</a>
                                        </li>
                                    </ul>
                                </div>
                            </Nav.Link>
                            <Nav.Link href="#link"><span className='my-link'>ABOUT US</span></Nav.Link>
                            <Nav.Link className='nav-link' href="#link">
                                <div className='nav-link'>
                                    <span className='my-link th-list col-xl-12'>TREATMENTS</span>
                                    <ul className='my-ul col'>
                                        <li>
                                            <a href=''>TREATMENT V1</a>
                                        </li>
                                        <li>
                                            <a href=''>TREATMENT V2</a>
                                        </li>
                                        <li>
                                            <a href=''>TREATMENT FULLWIDTH</a>
                                        </li>
                                        <li>
                                            <a href=''>TREATMENT MASONRY</a>
                                        </li>
                                        <li>
                                            <a href="">TREATMENT DETAIL</a>
                                        </li>
                                    </ul>
                                </div>
                            </Nav.Link>
                            <Nav.Link href="#link">
                                <div className="nav-link">
                                    <span className='my-link th-list col-xl-12'>BLOG</span>
                                    <ul className='my-ul col'>
                                        <li>
                                            <a href=''>BLOG V1</a>
                                        </li>
                                        <li>
                                            <a href="">BLOG V2</a>
                                        </li>
                                        <li>
                                            <a href="">BLOG DETAIL</a>
                                        </li>
                                    </ul>
                                </div>
                            </Nav.Link>
                            <Nav.Link href="#link">
                                <div className="nav-link">
                                    <span className='my-link th-list col-xl-12'>CONTACT</span>
                                    <ul className='my-ul col'>
                                        <li>
                                            <a href="">CONTACTUS</a>
                                        </li>
                                        <li>
                                            <a href="">CONTACTUS2</a>
                                        </li>
                                    </ul>
                                </div>
                            </Nav.Link>
                            <Nav.Link href="#link">
                                <div className="nav-link">
                                    <span className='my-link th-list col-xl-12'>PAGES</span>
                                    <ul className='my-ul col'>
                                        <li>
                                            <a href="">SERVICES</a>
                                        </li>
                                        <li>
                                            <a href="">DEPARTMENTS</a>
                                        </li>
                                        <li>
                                            <a href="">APPOINTMENT</a>
                                        </li>
                                        <li>
                                            <a href="">404 PAGE</a>
                                        </li>
                                        <li>
                                            <a href="">COMING SOON</a>
                                        </li>
                                    </ul>
                                </div>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>

                <Form inline>
                    <FormControl type="text" placeholder="Search Your Queries" className="mr-sm-2"/>
                    <Button variant="outline-success">Search</Button>
                </Form>
                </div>
            </Navbar>
        );
    }
}

export default Header;