import React from "react";
import { NavLink } from 'react-router-dom';
import { Nav, Navbar } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import i18next from "i18next";

const NavBar = () => {
    let activeStyle = {
        color: "black",
    };

    const close = () => {
        expanded = false;
    };

    const { t } = useTranslation();

    return (
        <>
        <Navbar collapseOnSelect expand="xl" variant="light" id="nav-bar">
            <Navbar.Toggle id="nav-toggle" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="nav">
                    <NavLink onClick={() => close()} to="/" style={({ isActive }) => isActive ? activeStyle : undefined}>{t("navigation.home")}</NavLink>
                    <NavLink onClick={() => close()} to="/about" style={({ isActive }) => isActive ? activeStyle : undefined}>{t("navigation.about")}</NavLink>
                    <NavLink onClick={() => close()} to="/manufacture" style={({ isActive }) => isActive ? activeStyle : undefined}>{t("navigation.manufacture")}</NavLink>
                    
                    <div className="dropdown">
                        <NavLink className="dropdown-title" onClick={() => close()} to="/material-aspects" style={({ isActive }) => isActive ? activeStyle : undefined}>{t("navigation.material")}</NavLink>
                        <div className="dropdown-content">
                            <NavLink onClick={() => close()} to="/material-aspects/fronts" style={({ isActive }) => isActive ? activeStyle : undefined}>{t("navigation.fronts")}</NavLink>
                            <NavLink onClick={() => close()} to="/material-aspects/backs" style={({ isActive }) => isActive ? activeStyle : undefined}>{t("navigation.backs")}</NavLink>
                            <NavLink onClick={() => close()} to="/material-aspects/envelopes" style={({ isActive }) => isActive ? activeStyle : undefined}>{t("navigation.envelopes")}</NavLink>
                        </div>
                    </div>
                    
                    <NavLink onClick={() => close()} to="/iconography" style={({ isActive }) => isActive ? activeStyle : undefined}>{t("navigation.iconography")}</NavLink>
                    
                    <div className="dropdown">
                        <NavLink className="dropdown-title" onClick={() => close()} to="/tarot" style={({ isActive }) => isActive ? activeStyle : undefined}>Tarot</NavLink>
                        <div className="dropdown-content">
                            <NavLink onClick={() => close()} to="/tarot/tarot-deck" style={({ isActive }) => isActive ? activeStyle : undefined}>The Tarot Deck</NavLink>
                            <NavLink onClick={() => close()} to="/tarot/tarot-history" style={({ isActive }) => isActive ? activeStyle : undefined}>A Brief History of Cartomancy</NavLink>
                        </div>
                    </div>
                    
                    <NavLink onClick={() => close()} to="/games" style={({ isActive }) => isActive ? activeStyle : undefined}>{t("navigation.games")}</NavLink>
                    <NavLink onClick={() => close()} to="/bibliography" style={({ isActive }) => isActive ? activeStyle : undefined}>{t("navigation.bibliography")}</NavLink>
                </Nav>
            </Navbar.Collapse>
        <p className="lang-button"><a id={i18next.language === "en" ? "active" : ""} onClick={() => i18next.changeLanguage('en')}>en</a> / <a id={i18next.language === "fr" ? "active" : ""} onClick={() => i18next.changeLanguage('fr')}>fr</a></p>
        </Navbar>
        </>
    );
};

export default NavBar;
