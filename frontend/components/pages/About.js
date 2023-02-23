import React from "react";
import { useTranslation } from "react-i18next";

const About = () => {

    React.useEffect(() => {
        document.title = 'About | French Playing Cards';        
    }, []);

    const { t } = useTranslation();

    return (
        <>
        <h2 className="page-header"> About This Web Site </h2>
        
        <div id={"AboutIntro"}>
            <img src={'/static/img/misc/mascot.jpg'}/>
            <p> { t("about_initial_blurb_1") } </p>
            <p className="About-initial-blurb">
                <br/>
                <br/>
                This web site is one outcome of a larger project by <a href="https://history.mit.edu/people/jeffrey-s-ravel/">Jeffrey Ravel</a>, Professor of History at MIT, to write this history.  At a later date, we hope to add a feature that will allow users to play popular Old Regime and Revolutionary card games online, selecting the historical deck with which they will play.
                <br/>
                <br/>
                Professor Ravel and his team wish to thank the <a href="https://www.bnf.fr/en/bibliotheque-nationale-de-france-catalogue-general">Bibliothèque nationale de France</a> (BnF), 
                which has provided the digital versions of playing cards and the metadata we make available on our site. Users are 
                invited to explore the extensive digital reproductions of playing cards in the collections of the BnF, which the 
                Library makes available on its <a href="https://gallica.bnf.fr/accueil/en/content/accueil-en?mode=desktop">Gallica web site</a>. We are also grateful to 
                the <a href="https://digitalhumanities.mit.edu/">MIT Programs in the Digital Humanities</a> and <a href="https://www.performantsoftware.com">Performant Software</a> for technical support.
            </p>
        </div>

        <div id={'AboutProfiles'}>
            <h3>Playing Card Web Site Development Team Members</h3>
            <p>Rhea Bhattacharjee, MIT Class of 2025</p>
            <p>Alyssa Choi, Wellesley College Class of 2024</p>
            <p>Nyana Wright, Wellesley College Class of 2024</p>
        </div>
        </>
    );
};

export default About;