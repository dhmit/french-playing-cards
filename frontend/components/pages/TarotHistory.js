import React from "react";
import ImagePopup from "../ImagePopup";
import { Trans, useTranslation } from "react-i18next";

const TarotHistory = () => {

    React.useEffect(() => {
        document.title = 'A Brief History of Cartomancy | French Playing Cards';        
    }, []);

    const { t } = useTranslation();

    return (
    <>
        <h2 className="page-header">{t("tarot.cartomancy.title")}</h2>

        <div className="material-subpage-intro">
            <img id="tarot-mascot" src={'/static/img/tarot/tarotMascot.jpeg'}/>
            <p className="material-subpage-blurb"><Trans i18nKey="tarot.cartomancy.intro">
                Hints abound regarding the use of playing cards for divinatory purposes, but 
                such uses were informal enough that a word for it was not coined until the end of 
                the eighteenth century when <a href='https://en.wikipedia.org/wiki/Etteilla'>Jean-Baptiste Alliette</a> (1738-1791) started discussing 
                “cartonomancy” which he later shortened to “cartomancy.”  One early hint came from 
                the famous roué Giovanni Casanova who writes in his memoir about chastising a young, 
                Russian peasant girl named Zaïre who practiced divination with a regular deck of 
                cards and apparently used them to predict his infidelities (a feat which probably 
                did not require any sort of magical ability).  
                <br/>
                <br/>
                While historians have identified some similar references in the eighteenth century, 
                the use of Tarot cards for divinatory purposes really took off only after <a href='https://en.wikipedia.org/wiki/Antoine_Court_de_G%C3%A9belin'>Antoine 
                Court de Gébelin</a> (1725-1784) makes a claim for the Egyptian origins of Tarot and 
                their uses in divination in his multi-volume <u>Le monde primatif</u>.  In the eighth 
                volume of this work, appearing in 1781, Court de Gébelin claimed the seventy-eight 
                “pages” of the Tarot held, in allegorical form, theknowledge once found in the lost 
                library of Alexandria.  All people needed was an appropriate key to unlock this 
                knowledge. 
            </Trans></p>
        </div>

        <div className='tarot-subpage-item'>
            <div className='tarot-subpage-item-contents'>
                <div className='tarot-subpage-item-images'>
                <div className='tarot-subpage-item-image-caption'>
                    <ImagePopup src={'/static/img/tarot/history/court.jpg'}/>
                    <p><Trans i18nKey="tarot.cartomancy.images.gebelin">
                    Antoine Court de Gébelin, <i>Le Monde primitif analysé et comparé avec le monde moderne</i> (Paris, 1777-1781) Vol. 8, plate VIII.  The images represent the following tarots, moving clockwise from the upper left: The Devil; Death; The Wheel of Fortune; The House of God.  Courtesy of the Bibliothèque nationale de France. 
                    </Trans></p>
                </div>
                </div>
        </div>
        </div>

        <div className='tarot-subpage-item'>
            <div className='tarot-subpage-item-contents'>
                <p>{t("tarot.cartomancy.para1")}</p>
                <div className='tarot-subpage-item-images'>
                <div className='tarot-subpage-item-image-caption'>
                    <ImagePopup src={'/static/img/tarot/history/Etteilla.Frontispiece.jpg'}/>
                    <p><Trans i18nKey="tarot.cartomancy.images.alliette">
                    Alliette writing his book on Tarot divination (frontispiece).  Jean-Baptiste Alliette, <i>Etteilla, ou Manière de se recréer avec un jeu de cartes</i>.  (Amsterdam, 1770). Bibliothèque de l’Arsenal, 8-S-14395. 
                    </Trans></p>
                </div>
                <div className='tarot-subpage-item-image-caption'>
                    <ImagePopup src={'/static/img/tarot/history/Etteilla.Fortune.jpg'}/>
                    <p><Trans i18nKey="tarot.cartomancy.images.fortune">
                    “Wheel of Fortune” card formation (after p. 64).  Jean-Baptiste Alliette, <i>Etteilla, ou Manière de se recréer avec un jeu de cartes</i>.  (Amsterdam, 1770).  Bibliothèque de l’Arsenal, 8-S-14395.
                    </Trans></p>
                </div>
                <div className='tarot-subpage-item-image-caption'>
                    <ImagePopup src={'/static/img/tarot/history/Etteilla.horoscope.jpg'}/>
                    <p><Trans i18nKey="tarot.cartomancy.images.horoscope">
                    “Horoscope” card formation (after p. 72).  Jean-Baptiste Alliette, <i>Etteilla, ou Manière de se recréer avec un jeu de cartes</i>.  (Amsterdam, 1770).  Bibliothèque de l’Arsenal, 8-S-14395. 
                    </Trans></p>
                </div>
                </div>
        </div>
        </div>

        <div className='tarot-subpage-item'>
            <div className='tarot-subpage-item-contents'>
                <p>{t("tarot.cartomancy.para2")}</p>
                <div className='tarot-subpage-item-images'>
                <div id='tarot-revolutionary-card-reading'>
                    <img src={'/static/img/tarot/history/revolutionary-card-reading.jpg'}/>
                    <p><Trans i18nKey="tarot.cartomancy.images.tirer">
                    <i>Nouvelle manière de tirer les cartes inventé en 1792</i>.  (Paris, Mondhare et Jean, 1792).  Bibliothèque nationale de France, Cabinet des estampes, RESERVE FOL-QB-201 (129). 
                    </Trans></p>
                </div>
                </div>
        </div>
        </div>

        <div className='tarot-subpage-item'>
            <div className='tarot-subpage-item-contents'>
                <p>{t("tarot.cartomancy.para3")}</p>
                <div className='tarot-subpage-item-images'>
                <div className='tarot-subpage-item-image-caption'>
                    <ImagePopup src={'/static/img/tarot/history/Egyptomania.jpg'}/>
                    <p><Trans i18nKey="tarot.cartomancy.images.toth">
                    “Table of cards from the Book of Toth that were placed in the Temple of Fire at Memphis,” from <i>Livre de Thot, ou Collection précieuse des tableaux de la doctrine de Mercure dans laquelle se trouve le chemin royal de la vie humaine</i> (Paris: Basan and Poignant, 1788).  Bibliothèque nationale, Cabinet des estampes, BOITE FT 4-KH-34 (E).
                    </Trans></p>
                </div>
                </div>
        </div>
        </div>

        <div className='tarot-subpage-item'>
            <div className='tarot-subpage-item-contents'>
                <p>{t("tarot.cartomancy.para4")}</p>
                <div className='tarot-subpage-item-images'>
                <div className='tarot-subpage-item-image-caption'>
                    <ImagePopup src={'/static/img/tarot/history/prelate.jpg'}/>
                    <p><Trans i18nKey="tarot.cartomancy.images.prelate">
                    “The Prelate,” from <i>Jeu de cartomancie pour l’amusement des Dames</i> (Paris, 1788).  Bibliothèque nationale de France, Cabinet des estampes, RESERVE KH-34 (3, 25)-BOITE ECU.
                    </Trans></p>
                </div>
                <div className='tarot-subpage-item-image-caption'>
                    <ImagePopup src={'/static/img/tarot/history/temple.jpg'}/>
                    <p><Trans i18nKey="tarot.cartomancy.images.temple">
                    “Temple of Love,” from <i>Jeu de cartomancie pour l’amusement des Dames</i> (Paris, 1788).  Bibliothèque nationale de France, Cabinet des estampes, RESERVE KH-34 (3, 25)-BOITE ECU. 
                    </Trans></p>
                </div>
                <div className='tarot-subpage-item-image-caption'>
                    <ImagePopup src={'/static/img/tarot/history/Liberty.jpg'}/>
                    <p><Trans i18nKey="tarot.cartomancy.images.liberty">
                    “Liberty” from <i>Jeu de cartomancie pour l’amusement des Dames</i> (Paris, 1788).  Bibliothèque nationale de France, Cabinet des estampes, RESERVE KH-34 (3, 25)-BOITE ECU. 
                    </Trans></p>
                </div>
                </div>
        </div>
        </div>

        <div className='tarot-subpage-item'>
            <div className='tarot-subpage-item-contents'>
                <p>{t("tarot.cartomancy.para5")}</p>
                <div className='tarot-subpage-item-images'>
                <div className='tarot-subpage-item-image-caption'>
                    <ImagePopup src={'/static/img/tarot/history/LeNormand.jpg'}/>
                    <p><Trans i18nKey="tarot.cartomancy.images.normand">
                    Frontispiece from Marie-Anne Adelaïde Le Normand, <i>Les Souvenirs prophétiques d’une sibylle sur les causes sécrètes de son éarrestation, le 11 décembre 1811</i>. (Paris, 1814).  The caption below the engraving reads: “’Our visit must surprise you?’  ‘Not at all, my cards had foretold it….’” Bibliothèque de l’Arsenal, 8-NF-8589. 
                    </Trans></p>
                </div>
                </div>
        </div>
        </div>
        
        <p id='TarotHistoryNote'><Trans i18nKey="tarot.cartomancy.note">For more on Tarot cards and Cartomancy, please the relevant citations on our <a href="../bibliography">Bibliography</a> page.</Trans></p>
               
    </>
    );
};

export default TarotHistory;