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
            <p> { t("about.about_initial_blurb_1") } </p>
            <p className="About-initial-blurb">
                <br/>
                <br/>
                { t("about.about_initial_blurb_2") } <a href="https://history.mit.edu/people/jeffrey-s-ravel/">Jeffrey Ravel</a> { t("about.about_initial_blurb_3") }
                <br/>
                <br/>
                { t("about.about_initial_blurb_4") } <a href="https://www.bnf.fr/en/bibliotheque-nationale-de-france-catalogue-general">Bibliothèque nationale de France</a>
                { t("about.about_initial_blurb_5") } <a href="https://gallica.bnf.fr/accueil/en/content/accueil-en?mode=desktop">Gallica web site</a>.{ t("about.about_initial_blurb_6") }
                <a href="https://digitalhumanities.mit.edu/">MIT Programs in the Digital Humanities</a> { t("about.about_initial_blurb_7") }<a href="https://www.performantsoftware.com">Performant Software</a> { t("about.about_initial_blurb_8") }
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