
import {
    Navbar,
    Button,
    ButtonGroup,
    Container,
    Nav,
    NavbarBrand,
    Accordion,
    NavLink,
    NavDropdown, Collapse, Row, Col
} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import NavbarCollapse from "react-bootstrap/NavbarCollapse";
import DropdownItem from "react-bootstrap/DropdownItem";

const NavigationBar = () => {
    const [count, setCount] = useState(0);

    return (
        <Container>
            <Row>
                <Navbar bg='light' expand='lg'>
                    <Container>
                        <NavbarBrand>B+</NavbarBrand>
                        <Col className='col-10'>
                            <Container>
                                <Nav className='md-auto'>
                                    <NavLink>Home</NavLink>
                                    <NavLink>Books</NavLink>
                                </Nav>
                            </Container>
                        </Col>
                        <Col className='col-2'>
                            <NavbarCollapse aria-controls='basic-dropdown'>
                                <NavDropdown className='' id='basic-dropdown' title='Worlds'>
                                    <DropdownItem href='#'>Test World</DropdownItem>
                                    {/*<NavDropdown.Divider />*/}
                                    <DropdownItem href='#'>World of Goo</DropdownItem>
                                </NavDropdown>
                            </NavbarCollapse>
                        </Col>
                    </Container>
                </Navbar>
            </Row>
        </Container>
    );
}

// Default export removes the need for {}
export default NavigationBar;