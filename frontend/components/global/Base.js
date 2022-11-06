import React from "react";
import Nav from "./Nav";
import STYLES from "./Base.module.scss";
import * as PropTypes from "prop-types";

const Base = ({children}) => {
    return (
        <>
            <Nav/>
            <div className={STYLES.body} id={"main-container"}>
                <main role={"main"}>{children}</main>
            </div>
            <span id={'Logos'}>
                <a id={'BnF_container'}
                   href={'https://www.bnf.fr/en/bibliotheque-nationale-de-france-catalogue-general'}>
                    <img id={'BnF_logo'} src={'/static/img/bnf_logo.jpg'}/>
                </a>
                <a id={'MIT_container'} href={'https://www.mit.edu/'}>
                    <img id={'MIT_logo'} src={'/static/img/MIT-modern-logo.jpg'}/>
                </a>
                <a id={'DH_container'} href={'https://digitalhumanities.mit.edu/'}>
                    <img id={'DH_logo'} src={'/static/img/dh_logo.png'}/>
                </a>
                <a id={'Performant_container'} href={'https://www.performantsoftware.com/'}>
                    <img id={'Performant_logo'} src={'/static/img/performant-logo.png'}/>
                </a>
            </span>
        </>
    );
};

Base.propTypes = {
    children: PropTypes.object
};


export default Base;
