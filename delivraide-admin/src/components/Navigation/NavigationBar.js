import React from 'react'
import {
    Link
} from "react-router-dom";

import logoDelivraide from '../../assets/logo/logo.png'

// React Bootstrap import
import { Button, Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';

function NavigationBar() {
    return (
        <>
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="/"><img src={logoDelivraide} width="250" alt="logo Delivr'aide"></img></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
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
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link to="/">Accueil</Link>
                        </li>
                        <li className="nav-item active">
                            <Link to="/livreur">Livreur</Link>
                        </li>
                        <li className="nav-item active">
                            <Link to="/news">News</Link>
                        </li>
                    </ul>
                </div>
                <div className="navbar-top-section">
                    <div className="left-section">
                        <div className="dropdown-menu">
                            <h1>Drop down menu</h1>
                        </div>
                        <div className="current-page-name">
                            <h1>Current page</h1>
                        </div>
                    </div>
                    <div className="middle-section">
                        <div></div>
                    </div>
                    <div className="right-section">
                        <h1 className="profile-picture-preview">pp</h1>
                        <h1 className="account-name">Didier Deschamps</h1>
                    </div>
                </div>
            </Navbar>
        </>
    )
}

export default NavigationBar