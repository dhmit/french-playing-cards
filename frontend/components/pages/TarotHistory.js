import React from "react";
import ImagePopup from "../ImagePopup";

const TarotHistory = () => {

    React.useEffect(() => {
        document.title = 'A Brief History of Cartomancy | French Playing Cards';        
    }, []);

    return (
    <>
        <h2 className="page-header"> A Brief History of Cartomancy </h2>

        <div className="material-subpage-intro">
            <img id="tarot-mascot" src={'/static/img/tarot/tarotMascot.jpeg'}/>
            <p className="material-subpage-blurb">
                Hints abound regarding the use of playing cards for divinatory purposes, but 
                such uses were informal enough that a word for it was not coined until the end of 
                the eighteenth century when <a href='https://en.wikipedia.org/wiki/Etteilla'>Jean-Baptiste Alliette</a> (1738-1791) started discussing 
                “cartonomancy” which he later shortened to “cartomancy.”  One early hint comes from 
                the famous roué Giovanni Casanova who writes in his memoir about chastising a young, 
                Russian peasant girl named Zaïre who practiced divination with a regular deck of 
                cards and apparently used them to predict his infidelities (a feat which probably 
                did not require any sort of magical ability).  
                <br/>
                <br/>
                While historians have identified some similar references in the eighteenth century, 
                the use of Tarot cards for divinatory purposes really takes off only after <a href='https://en.wikipedia.org/wiki/Antoine_Court_de_G%C3%A9belin'>Antoine 
                Court de Gébelin</a> (1725-1784) makes a claim for the Egyptian origins of Tarot and 
                their uses in divination in his multi-volume <u>Le monde primatif</u>.  In the eighth 
                volume of this work, appearing in 1781, Court de Gébelin claimed the seventy-eight 
                “pages” of the Tarot held, in allegorical form, the knowledge once found in the lost 
                library of Alexandria.  All people needed was an appropriate key to unlock this 
                knowledge. 
            </p>
        </div>

        <div className='tarot-subpage-item'>
            <div className='tarot-subpage-item-contents'>
                <div className='tarot-subpage-item-images'>
                <div className='tarot-subpage-item-image-caption'>
                    <ImagePopup src={'/static/img/tarot/history/court.jpg'}/>
                    <p>
                    Antoine Court de Gébelin, <i>Le Monde primitif analysé et comparé avec le monde moderne</i> (Paris, 1777-1781) Vol. 8, plate VIII.  The images represent the following tarots, moving clockwise from the upper left: The Devil; Death; The Wheel of Fortune; The House of God.  Courtesy of the Bibliothèque nationale de France. 
                    </p>
                </div>
                </div>
        </div>
        </div>

        <div className='tarot-subpage-item'>
            <div className='tarot-subpage-item-contents'>
                <p>
                    Once Court de Gébelin turned everyone's attention to this possibility, 
                    Alliette thoroughly adopted the practice and even tried to claim priority.  
                    Alliette – a teacher of algebra, print seller, and all-around purveyor of 
                    magical information, predictions, and objects – created his own Tarot deck, 
                    sold books on how to use cards for divination (both regular decks and full, 
                    Tarot decks), and gave lectures at his School of Magic on the topic.  Several 
                    of his books had detailed diagrams and instructions on card reading. 
                </p>
                <div className='tarot-subpage-item-images'>
                <div className='tarot-subpage-item-image-caption'>
                    <ImagePopup src={'/static/img/tarot/history/Etteilla.Frontispiece.jpg'}/>
                    <p>
                    Alliette writing his book on Tarot divination (frontispiece).  Jean-Baptiste Alliette, <i>Etteilla, ou Manière de se recréer avec un jeu de cartes</i>.  (Amsterdam, 1770). Bibliothèque de l’Arsenal, 8-S-14395. 
                    </p>
                </div>
                <div className='tarot-subpage-item-image-caption'>
                    <ImagePopup src={'/static/img/tarot/history/Etteilla.Fortune.jpg'}/>
                    <p>
                    “Wheel of Fortune” card formation (after p. 64).  Jean-Baptiste Alliette, <i>Etteilla, ou Manière de se recréer avec un jeu de cartes</i>.  (Amsterdam, 1770).  Bibliothèque de l’Arsenal, 8-S-14395.
                    </p>
                </div>
                <div className='tarot-subpage-item-image-caption'>
                    <ImagePopup src={'/static/img/tarot/history/Etteilla.horoscope.jpg'}/>
                    <p>
                    “Horoscope” card formation (after p. 72).  Jean-Baptiste Alliette, <i>Etteilla, ou Manière de se recréer avec un jeu de cartes</i>.  (Amsterdam, 1770).  Bibliothèque de l’Arsenal, 8-S-14395. 
                    </p>
                </div>
                </div>
        </div>
        </div>

        <div className='tarot-subpage-item'>
            <div className='tarot-subpage-item-contents'>
                <p>
                    Cartomancy continued to find practitioners and enthusiasts into the period of 
                    the French Revolution with revolutionary versions of Tarot cards appearing, 
                    some conveniently containing hints for the user added as a sort of cheat-sheet. 
                </p>
                <div className='tarot-subpage-item-images'>
                <div id='tarot-revolutionary-card-reading'>
                    <ImagePopup src={'/static/img/tarot/history/Revolutionary-card-reading.jpg'}/>
                    <p>
                    <i>Nouvelle manière de tirer les cartes inventé en 1792</i>.  (Paris, Mondhare et Jean, 1792).  Bibliothèque nationale de France, Cabinet des estampes, RESERVE FOL-QB-201 (129). 
                    </p>
                </div>
                </div>
        </div>
        </div>

        <div className='tarot-subpage-item'>
            <div className='tarot-subpage-item-contents'>
                <p>
                    The practice continued to inspire innovation with various methods for laying 
                    down the cards, some of which claimed to go back to Egypt, an assertion that 
                    received positive feedback in this time of Egyptomania.  
                </p>
                <div className='tarot-subpage-item-images'>
                <div className='tarot-subpage-item-image-caption'>
                    <ImagePopup src={'/static/img/tarot/history/Egyptomania.jpg'}/>
                    <p>
                    “Table of cards from the Book of Toth that were placed in the Temple of Fire at Memphis,” from <i>Livre de Thot, ou Collection précieuse des tableaux de la doctrine de Mercure dans laquelle se trouve le chemin royal de la vie humaine</i> (Paris: Basan and Poignant, 1788).  Bibliothèque nationale, Cabinet des estampes, BOITE FT 4-KH-34 (E).
                    </p>
                </div>
                </div>
        </div>
        </div>

        <div className='tarot-subpage-item'>
            <div className='tarot-subpage-item-contents'>
                <p>
                    Certainly, cartomancy drew considerable attention at the end of the 
                    eighteenth century and into the nineteenth century.  Some Tarot games were 
                    adapted to serve as amusements such as the Cartomancy Game for the Amusement 
                    of Ladies.  
                </p>
                <div className='tarot-subpage-item-images'>
                <div className='tarot-subpage-item-image-caption'>
                    <ImagePopup src={'/static/img/tarot/history/prelate.jpg'}/>
                    <p>
                    “The Prelate,” from <i>Jeu de cartomancie pour l’amusement des Dames</i> (Paris, 1788).  Bibliothèque nationale de France, Cabinet des estampes, RESERVE KH-34 (3, 25)-BOITE ECU.
                    </p>
                </div>
                <div className='tarot-subpage-item-image-caption'>
                    <ImagePopup src={'/static/img/tarot/history/temple.jpg'}/>
                    <p>
                    “Temple of Love,” from <i>Jeu de cartomancie pour l’amusement des Dames</i> (Paris, 1788).  Bibliothèque nationale de France, Cabinet des estampes, RESERVE KH-34 (3, 25)-BOITE ECU. 
                    </p>
                </div>
                <div className='tarot-subpage-item-image-caption'>
                    <ImagePopup src={'/static/img/tarot/history/Liberty.jpg'}/>
                    <p>
                    “Liberty” from <i>Jeu de cartomancie pour l’amusement des Dames</i> (Paris, 1788).  Bibliothèque nationale de France, Cabinet des estampes, RESERVE KH-34 (3, 25)-BOITE ECU. 
                    </p>
                </div>
                </div>
        </div>
        </div>

        <div className='tarot-subpage-item'>
            <div className='tarot-subpage-item-contents'>
                <p>
                    The fashion for cartomancy continued into the nineteenth century.  In Le 
                    Nouveau Paris (1798) Louis-Sebastien Mercier, for example, describes his 
                    encounter with a cartomancer named Martin who worked in Paris and whose shop 
                    drew a constant stream of customers.  Mlle. Le Normand (1772-1843) received 
                    considerable fame (or perhaps infamy) for her card readings throughout the 
                    Napoleonic period in the first part of the nineteenth century.  
                </p>
                <div className='tarot-subpage-item-images'>
                <div className='tarot-subpage-item-image-caption'>
                    <ImagePopup src={'/static/img/tarot/history/LeNormand.jpg'}/>
                    <p>
                    Frontispiece from Marie-Anne Adelaïde Le Normand, <i>Les Souvenirs prophétiques d’une sibylle sur les causes sécrètes de son éarrestation, le 11 décembre 1811</i>. (Paris, 1814).  The caption below the engraving reads: “’Our visit must surprise you?’  ‘Not at all, my cards had foretold it….’” Bibliothèque de l’Arsenal, 8-NF-8589. 
                    </p>
                </div>
                </div>
        </div>
        </div>

    </>
    );
};

export default TarotHistory;