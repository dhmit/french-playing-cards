import React from "react";
import { NavLink } from 'react-router-dom';
import { Nav, Navbar } from "react-bootstrap";

const NavBar = () => {
    let activeStyle = {
        color: "black",
    };

    const close = () => {
        expanded = false;
    };

    return (
        <Navbar collapseOnSelect expand="xl" variant="light" id="nav-bar">
            <Navbar.Toggle />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="nav">
                    <NavLink onClick={() => close()} to="/" style={({ isActive }) => isActive ? activeStyle : undefined}>Home</NavLink>
                    <NavLink onClick={() => close()} to="/about" style={({ isActive }) => isActive ? activeStyle : undefined}>About</NavLink>
                    <NavLink onClick={() => close()} to="/manufacture" style={({ isActive }) => isActive ? activeStyle : undefined}>Manufacture</NavLink>
                    
                    <div className="dropdown">
                        <NavLink className="dropdown-title" onClick={() => close()} to="/material-aspects" style={({ isActive }) => isActive ? activeStyle : undefined}>Material Aspects</NavLink>
                        <div className="dropdown-content">
                            <NavLink onClick={() => close()} to="/material-aspects/fronts" style={({ isActive }) => isActive ? activeStyle : undefined}>Fronts</NavLink>
                            <NavLink onClick={() => close()} to="/material-aspects/backs" style={({ isActive }) => isActive ? activeStyle : undefined}>Backs</NavLink>
                            <NavLink onClick={() => close()} to="/material-aspects/envelopes" style={({ isActive }) => isActive ? activeStyle : undefined}>Envelopes</NavLink>
                        </div>
                    </div>

                    <NavLink onClick={() => close()} to="/iconography" style={({ isActive }) => isActive ? activeStyle : undefined}>Face Card Iconography</NavLink>
                    <NavLink onClick={() => close()} to="/games" style={({ isActive }) => isActive ? activeStyle : undefined}>Play Games!</NavLink>
                    <NavLink onClick={() => close()} to="/bibliography" style={({ isActive }) => isActive ? activeStyle : undefined}>Bibliography</NavLink>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default NavBar;
