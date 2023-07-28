
import React from 'react';
import { Link } from 'react-router-dom';
import Breadcrumb from 'react-bootstrap/Breadcrumb';

const Breadcrumbs = ({ crumbs }) => {
    // Don't render a single breadcrumb.
    if (crumbs.length <= 1) {
        return null;
    }

    return (
        <Breadcrumb>
            {crumbs.map(({ name, path }, key) =>
                key + 1 === crumbs.length ? (
                    <Breadcrumb.Item active key={key}>{name}</Breadcrumb.Item>
                ) : (
                    <Breadcrumb.Item linkAs={Link} linkProps={{ to: path }} key={key}>
                        {name}
                    </Breadcrumb.Item>
                )
            )}
        </Breadcrumb>
    );
};

export default Breadcrumbs;
