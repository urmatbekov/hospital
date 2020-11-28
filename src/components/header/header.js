import React, {Component, Fragment} from 'react';
import {Navbar, Nav, Button, Form} from "react-bootstrap";
import "./header.css";
import {Link, NavLink} from "react-router-dom";
import Service from "../service";


class Header extends Component {
    service = new Service()

    render() {
        return (
            <Navbar bg="dark" variant="dark" expand="lg">
                <div className='container'>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="my-navbar">
                            <Nav.Item>
                                <NavLink className={"nav-link"} to={"/"}>
                                    <span className='home'>HOME</span>
                                </NavLink>
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
                <Form inline>
                    {this.props.user.username ?
                        <Fragment><p style={{color: "white", paddingRight: "10px"}}>{this.props.user.username}</p>

                            <Button onClick={() => {
                                this.service.deleteLogin().then(() => {
                                    this.props.logout()
                                })
                            }} variant="outline-primary">Выход</Button>

                        </Fragment>
                        :
                        <Fragment>
                            <Link to={'/register'}>
                                <Button variant="outline-primary">Регистрация</Button>
                            </Link>
                            <Link to={'/login'}>
                                <Button variant="outline-primary">Войти</Button>
                            </Link>
                        </Fragment>

                    }


                </Form>
            </Navbar>
        );
    }
}

export default Header;