import React from "react";
import {NavLink} from "react-router-dom";
import {Nav, Navbar } from "react-bootstrap";
import {useTranslation} from "react-i18next";
import i18next from "i18next";

const NavBar = () => {
    const {t} = useTranslation();

    return (
        <Navbar collapseOnSelect expand="xl" variant="light">
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="w-100">
                    <Nav.Link as={NavLink} to="/">{t("navigation.home")}</Nav.Link>
                    <Nav.Link as={NavLink} to="/about">{t("navigation.about")}</Nav.Link>
                    <Nav.Link as={NavLink} to="/history">{t("navigation.history")}</Nav.Link>
                    <Nav.Link as={NavLink} to="/explore">{t("navigation.explore")}</Nav.Link>
                    <Nav.Link as={NavLink} to="/games">{t("navigation.games")}</Nav.Link>
                    <Nav.Link as={NavLink} to="/bibliography">{t("navigation.bibliography")}</Nav.Link>
                </Nav>
                <Nav className="ml-auto lang-button">
                    <Nav.Link onClick={() => i18next.changeLanguage("en")} active={i18next.language === "en"}>EN</Nav.Link>
                    <Nav.Link onClick={() => i18next.changeLanguage("fr")} active={i18next.language === "fr"}>FR</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default NavBar;
