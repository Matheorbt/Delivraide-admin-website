import React from 'react'
import {
    Link
} from "react-router-dom";

import logoDelivraide from 'assets/img'

function Navbar() {
    return (
        <>
        <nav className="navbar-main-container">
            <section className="navbar-left-section">
                <div className="logo-container">
                    <image src={ logoDelivraide } alt="delivr'aide logo"></image>
                </div>
                <ul className="list-container">
                    <li className="list-element">
                        <Link to="/">Accueil</Link>
                    </li>
                    <li className="list-element">
                        <Link to="/livreur">Livreur</Link>
                    </li>
                    <li className="list-element">
                        <Link to="/news">News</Link>
                    </li>
                </ul>
            </section>
            <section className="navbar-top-section">
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
            </section>
        </nav>
        </>
    )
}

export default Navbar