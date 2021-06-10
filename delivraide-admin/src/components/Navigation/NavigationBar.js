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
                <Container>
                    <Container fluid="xl">
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <h1>{HeaderView()}</h1>
                        <Navbar.Brand href="/"><img src={logoDelivraide} width="250" alt="logo Delivr'aide"></img></Navbar.Brand>
                    </Container>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Row>
                                <Col xs={5}><Image src={profilePictureDelivraide} width="100" /></Col>
                                <Col><h1 className="account-name">Didier Deschamps</h1></Col>
                            </Row>
                            <Nav.Link as={Link} to="/">Accueil</Nav.Link>
                            <NavDropdown title="Livreurs" id="basic-nav-dropdown">
                                <NavDropdown.Item as={Link} to="/livreur/candidature">Candidatures</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/livreur/ajouter">Ajouter</NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="News" id="basic-nav-dropdown">
                                <NavDropdown.Item as={Link} to="/news/liste">Liste</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/news/ajouter">Ajouter</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default NavigationBar