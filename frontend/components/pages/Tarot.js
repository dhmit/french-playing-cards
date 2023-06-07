import React from "react";
import {useTranslation} from "react-i18next";

const Tarot = () => {

    React.useEffect(() => {
        document.title = "Tarot | French Playing Cards";        
    }, []);

    const {t} = useTranslation();

    return (
        <>
            <h2 className="page-header">{t("tarot.header")}</h2>

            <div className="material-subpage-intro">
                <img id="tarot-mascot" src={"/static/img/tarot/tarotMascot.jpeg"}/>
                <p>{t("tarot.blurb")}</p>
            </div>

            <div id='MaterialsMenu'>
                <div className='MaterialsMenuItem'>
                    <a href='tarot/tarot-deck'> 
                        <p>{t("tarot.deck.title")}</p>
                        <img src={"/static/img/tarot/tarotDeck.jpg"}/>
                    </a>
                </div>

                <div className='MaterialsMenuItem'>
                    <a href='tarot/tarot-history'>
                        <p>{t("tarot.cartomancy.title")}</p>
                        <img id='tarot-history-menu-img' src={"/static/img/tarot/tarotHistory.jpg"}/>
                    </a> 
                </div>
            </div>
        </>
    );
};

export default Tarot;