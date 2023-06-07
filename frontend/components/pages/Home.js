import React from "react";
import {Trans, useTranslation} from "react-i18next";

const Home = () => {

    React.useEffect(() => {
        document.title = "Home | French Playing Cards";        
    }, []);

    const {t} = useTranslation();

    return (
        <>
            <h2 className="page-header"> {t("home.header")} </h2>

            <span id="Collage">
                <img id="HomeImage" src={"/static/img/misc/homepageImg.png"}/>
            </span>

            <p id="HomeBlurb">
                <Trans i18nKey="home.blurb">
            From 1650 to 1850, the French spread enlightenment, gained and lost one empire and 
            began another, and overthrew a centuries-old monarchy.  They also played card games.  This site explores 
            the history of French playing cards in this period as an unusual and insightful source 
            for the history of the Old Regime, the French Revolution, and early nineteenth-century 
            France.  You will find details about <a href='manufacture'>manufacturing procedures</a>, 
            the <a href='material-aspects'>material aspects</a> of the playing cards, the changing <a href='iconography'>iconography</a> of 
            French face cards, and <a href='tarot'>tarot cards</a> and the history of <a href='tarot/tarot-history'>cartomancy</a>.  A <a href='bibliography'>bibliography</a> provides suggestions for further reading.  And for 
            those of you interested in gaming, we will offer the opportunity to play a few of the most 
            popular <a href='games'>card games</a> of the period, using the historical deck of cards of your choice!
                </Trans>
            </p>
            <br />
            <p id="home-divider">******************************************</p>
            <br />
            <p>
                <b>{t("home.trans")}</b>
            </p>
        </>
    );
};

export default Home;
