import React, {Component} from 'react';
import {Navbar, Nav} from "react-bootstrap";
import "./header.css";

class Header extends Component {
    render() {
        return (
            <Navbar bg="dark" variant="dark" expand="lg">
                <div className='container'>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="my-navbar">
                            <Nav.Item>
                                <Nav.Link href="#link">
                                    <span className='home'>HOME</span>
                                </Nav.Link>
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
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href="#link">ABOUT US</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link className='nav-link' href="#link">
                                    TREATMENTS
                                </Nav.Link>
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
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href="#link">
                                    BLOG
                                </Nav.Link>
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
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href="#link">
                                    CONTACT
                                </Nav.Link>
                                <ul className='my-ul col'>
                                    <li>
                                        <a href="">CONTACTUS</a>
                                    </li>
                                    <li>
                                        <a href="">CONTACTUS2</a>
                                    </li>
                                </ul>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href="#link">
                                    PAGES
                                </Nav.Link>
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
                            </Nav.Item>
                        </Nav>
                    </Navbar.Collapse>
                </div>
            </Navbar>
        );
    }
}

export default Header;