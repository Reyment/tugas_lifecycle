import React, { Component } from 'react'
import { Button, Container, Form, Nav, Navbar } from 'react-bootstrap'

export default class NavbarComponent extends Component {
    render() {
        return (
            <Navbar expand="lg" className="bg-warning px-5 py-3">
                <Container fluid>
                    <Navbar.Brand href="#"><h3>Portal Berita</h3></Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >

                        </Nav>
                        <Form className="d-flex">
                            <Form.Control
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                            />
                            <Button variant="outline-success bg-dark text-white">Search</Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        )
    }
}
