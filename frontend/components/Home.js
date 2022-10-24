import React from "react";
import CardSearch from "./CardSearch";
import Select from "react-select";
import Tabs from "./Tabs";


const Home = () => {
    return (
        <>
            <h2>(FALL 2022 BRANCH) 17th-19th Century French Playing Cards</h2>

            <Tabs>

                <div label="Home">
                    <p>HOME PAGE</p>
                </div>

                <div label="Manufacture">
                    <p>TODO: MANUFACTURE PAGE, insert component here later</p>
                </div>

                <div label="Taxation">
                    <p>TODO: TAXATION PAGE, insert component here later</p>
                </div>

                <div label="Material Aspects">
                    <p>TODO: MATERIAL ASPECTS PAGE, insert component here later</p>
                </div>

                <div label="Face Card Iconography">
                    <CardSearch/>
                </div>

                <div label="Play Games!">
                    <p>TODO: GAMES PAGE, insert component here later</p>
                </div>

                <div label="Bibliography">
                    <p>TODO: BIB PAGE, insert component here later</p>
                </div>

                <div label="Search">
                </div>

            </Tabs>

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

export default Home;
