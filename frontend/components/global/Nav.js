import React from "react";
import {BrowserRouter, NavLink} from 'react-router-dom';

const Nav = () => {

    let activeStyle = {
        color: "black",
    };

    return (
        <ul className="nav">
            <li><NavLink to="/" style={({ isActive }) => isActive ? activeStyle : undefined}>Home</NavLink></li>
            <li><NavLink to="/about" style={({ isActive }) => isActive ? activeStyle : undefined}>About</NavLink></li>
            <li><NavLink to="/manufacture" style={({ isActive }) => isActive ? activeStyle : undefined}>Manufacture</NavLink></li>
            <div className="dropdown">
                <li className="dropdown"><NavLink to="/material-aspects" style={({ isActive }) => isActive ? activeStyle : undefined}>Material Aspects</NavLink></li>
                <div className="dropdown-content">
                    <li><NavLink to="/material-aspects/fronts" style={({ isActive }) => isActive ? activeStyle : undefined}>Fronts</NavLink></li>
                    <li><NavLink to="/material-aspects/backs" style={({ isActive }) => isActive ? activeStyle : undefined}>Backs</NavLink></li>
                    <li><NavLink to="/material-aspects/envelopes" style={({ isActive }) => isActive ? activeStyle : undefined}>Envelopes</NavLink></li>
                </div>
            </div>
            <li><NavLink to="/iconography" style={({ isActive }) => isActive ? activeStyle : undefined}>Face Card Iconography</NavLink></li>
            <li><NavLink to="/games" style={({ isActive }) => isActive ? activeStyle : undefined}>Play Games!</NavLink></li>
            <li><NavLink to="/bibliography" style={({ isActive }) => isActive ? activeStyle : undefined}>Bibliography</NavLink></li>
        </ul>
    );
};

export default Nav;
