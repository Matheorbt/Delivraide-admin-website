import React from 'react'
import {
    Link,
    useLocation
} from "react-router-dom";

import logoDelivraide from '../../assets/logo/logo.png'
import profilePictureDelivraide from '../../assets/logo/delivraide-icon-192.png'

// React Bootstrap import
import { Image, Navbar, Container, Nav, NavDropdown, Row, Col } from 'react-bootstrap';

function HeaderView() {
    const location = useLocation();
    if (location.pathname === "/")
        return <span>Accueil</span>
    else {
        let currentPage = location.pathname.split('/')[2];
        currentPage = currentPage.charAt(0).toUpperCase() + currentPage.slice(1)
        return <span>{currentPage}</span>
    }
}
function NavigationBar() {
    return (
        <>
            <Navbar bg="light" expand="never">
                <Container fluid>
                    <Container className="d-flex justify-content-around" fluid>
                        <Row className="d-flex justify-content-between">
                            <Row className="d-flex align-items-center">
                                <Col><Navbar.Toggle aria-controls="basic-navbar-nav" /></Col>
                                <Col><h1>{HeaderView()}</h1></Col>
                            </Row>
                        </Row>
                        <Navbar.Brand href="/"><img src={logoDelivraide} width="250" alt="logo Delivr'aide"></img></Navbar.Brand>
                        <Row className="d-flex align-items-center">
                            <Col className="d-flex align-items-start flex-column">
                                <Row><h1 className="font-weight-bold">Yovann Pigenet</h1></Row>
                                <Row><p className="font-weight-light">Président</p></Row>
                            </Col>
                        </Row>
                    </Container>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav>
                            <Col>
                                <Nav.Link as={Link} to="/">Accueil</Nav.Link>
                                <NavDropdown title="Livreurs" id="basic-nav-dropdown">
                                    <NavDropdown.Item as={Link} to="/livreur/liste">Liste</NavDropdown.Item>
                                    <NavDropdown.Item as={Link} to="/livreur/ajouter">Ajouter</NavDropdown.Item>
                                </NavDropdown>
                                <NavDropdown title="News" id="basic-nav-dropdown">
                                    <NavDropdown.Item as={Link} to="/news/liste">Liste</NavDropdown.Item>
                                    <NavDropdown.Item as={Link} to="/news/ajouter">Ajouter</NavDropdown.Item>
                                </NavDropdown>
                                <NavDropdown title="Livraisons" id="basic-nav-dropdown">
                                    <NavDropdown.Item as={Link} to="/livraison/liste">Liste</NavDropdown.Item>
                                    <NavDropdown.Item as={Link} to="/livraison/ajouter">Ajouter</NavDropdown.Item>
                                </NavDropdown>
                            </Col>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default NavigationBar