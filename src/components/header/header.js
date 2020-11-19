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
                        <Nav className="mr-auto ">
                            <Nav.Link href="#link"><span className="home">HOME</span></Nav.Link>
                            <Nav.Link href="#link"><span className='my-link'>ABOUT US</span></Nav.Link>
                            <Nav.Link href="#link"><span className='my-link'>TREATMENTS</span></Nav.Link>
                            <Nav.Link href="#link"><span className='my-link'>BLOG</span></Nav.Link>
                            <Nav.Link href="#link"><span className='my-link'>CONTACT</span></Nav.Link>
                            <Nav.Link href="#link"><span className='my-link'>PAGES</span></Nav.Link>
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