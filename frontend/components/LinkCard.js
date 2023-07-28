import React from "react";
import { Link } from "react-router-dom";

const LinkCard = ({ img, title, subtitle, link }) => {
    return (
        <Link to={link} className="link-card" style={{ backgroundImage: `url(${img})` }}>
            <div className="link-card-content">
                <h3 className="link-card-title">{title}</h3>
                <p className="link-card-text">{subtitle}</p>
            </div>
        </Link>
    );
};

export default LinkCard;
