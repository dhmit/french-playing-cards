import React from "react";
import ImagePopup from "../ImagePopup";

const Iconography = () => {

    React.useEffect(() => {
        document.title = 'Face Card Iconography | French Playing Cards';        
    }, []);

    return (
        <>
        <h2 className="page-header"> Face Card Iconography </h2>

        <p className="search-link">Click <a href="iconography/search">HERE</a> to search our face card database</p>

        <h3 className="iconography-header">Introduction to the database</h3>
        <div id='IconographyIntro'>
            <img src={'/static/img/misc/iconography-image.jpeg'}/>
            <p>
                Our page on the changing “fronts” of playing cards offers variations on the Queen of Hearts 
                manufactured in France from the Old Regime to the middle of the nineteenth century. In 
                addition, we have a compiled a database of face card images for kings, queens, jacks, and 
                some aces in all four suits during this time period, along with the accompanying metadata 
                from the web site of the Bibliothèque nationale de France. Our database contains images and 
                data from 24 decks of cards created during this period. The accompanying search tool allows 
                users to search these images by filtering for time period, face card, suit, town, maker, and 
                the fronts and backs of the cards. Users can thus customize comparisons of French face card 
                iconography during the 1644-1848 time period.`

                <br /> <br />

                Click <a href="iconography/search">here</a> to search our face card database
            </p>
        </div>

        <div id="iconography-deck">
            <h3 className="iconography-header">Contents of the database</h3>
            <p>
                Below we reproduce the Jack of Clubs from each deck in our database to give you a sense of 
                the variety of face card design:
            </p>

            <div className="iconography-deck-row">
                <div className="iconography-deck-col">
                    <div className="iconography-deck-card">
                        <ImagePopup src="/static/img/iconography/1600-1789/1644 geography.jpeg" />
                        <p>1644 <br /> World Geography</p>
                    </div>
                    <div className="iconography-deck-card">
                        <ImagePopup src="/static/img/iconography/1600-1789/heraldry.jpeg" />
                        <p>1698-1708 <br />Heraldry</p>
                    </div>
                    <div className="iconography-deck-card">
                        <ImagePopup src="/static/img/iconography/1600-1789/Provence.jpeg" />
                        <p>1721-1751 <br /> Provence Old Regime face cards</p>
                    </div>
                    <div className="iconography-deck-card">
                        <ImagePopup src="/static/img/iconography/1600-1789/Guyenne.jpeg" />
                        <p>1750 <br /> Guyenne Old Regime face cards</p>
                    </div>
                    <div className="iconography-deck-card">
                        <ImagePopup src="/static/img/iconography/1789-1799/Elements Seasons, Farmers.jpeg" />
                        <p>1791-1794 <br /> Elements, seasons, farmers face cards</p>
                    </div>
                    <div className="iconography-deck-card">
                        <ImagePopup src="/static/img/iconography/1789-1799/Bézu.jpeg" />
                        <p>1794 <br /> Bézu revolutionary cards</p>
                    </div>
                    <div className="iconography-deck-card">
                        <ImagePopup src="/static/img/iconography/1800-1899/J-L David.jpeg" />
                        <p>1810 <br /> Jacques-Louis David design</p>
                    </div>
                    <div className="iconography-deck-card">
                        <ImagePopup src="/static/img/iconography/1800-1899/Fantasy.JPEG" />
                        <p>1830 <br /> Fantasy deck</p>
                    </div>
                </div>

                <div className="iconography-deck-col">
                    <div className="iconography-deck-card">
                        <ImagePopup src="/static/img/iconography/1600-1789/1644 queens.jpeg" />
                        <p>1644 <br />Queens, ancient and modern</p>
                    </div>
                    <div className="iconography-deck-card">
                        <ImagePopup src="/static/img/iconography/1600-1789/Auvergne.jpeg" />
                        <p>1700-1750 <br /> Auvergne Old Regime face cards</p>
                    </div>
                    <div className="iconography-deck-card">
                        <ImagePopup src="/static/img/iconography/1600-1789/Dauphiné.jpeg" />
                        <p>1746-1777 <br /> Dauphiné Old Regime face cards</p>
                    </div>
                    <div className="iconography-deck-card">
                        <ImagePopup src="/static/img/iconography/1600-1789/Lyon.jpeg" />
                        <p>1778-1789 <br /> Lyon Old Regime face cards</p>
                    </div>
                    <div className="iconography-deck-card">
                        <ImagePopup src="/static/img/iconography/1789-1799/Counter-Revolutiuonary.jpeg" />
                        <p>1792 <br /> Counter-revolutionary cards</p>
                    </div>
                    <div className="iconography-deck-card">
                        <ImagePopup src="/static/img/iconography/1789-1799/Year II philosophes.png" />
                        <p>1794 <br /> Year II <i>philosophes</i></p>
                    </div>
                    <div className="iconography-deck-card">
                        <ImagePopup src="/static/img/iconography/1800-1899/Gatteaux.jpeg" />
                        <p>1816 <br /> Nicolas-Edme Gatteaux design</p>
                    </div>
                    <div className="iconography-deck-card">
                        <ImagePopup src="/static/img/iconography/1800-1899/Heros.jpeg" />
                        <p>1831 <br /> Heros deck</p>
                    </div>
                </div>

                <div className="iconography-deck-col">
                    <div className="iconography-deck-card">
                        <ImagePopup src="/static/img/iconography/1600-1789/War Games.jpeg" />
                        <p>1698 <br /> War Games</p>
                    </div>
                    <div className="iconography-deck-card">
                        <ImagePopup src="/static/img/iconography/1600-1789/Languedoc.jpeg" />
                        <p>1702-1720 <br /> Languedoc Old Regime face cards</p>
                    </div>
                    <div className="iconography-deck-card">
                        <ImagePopup src="/static/img/iconography/1600-1789/Paris.jpeg" />
                        <p>1750 <br /> Paris Old Regime face cards</p>
                    </div>
                    <div className="iconography-deck-card">
                        <ImagePopup src="/static/img/iconography/1789-1799/Modified Old Regime.jpeg" />
                        <p>1789-1799 <br /> Modified Old Regime Paris face cards</p>
                    </div>
                    <div className="iconography-deck-card">
                        <ImagePopup src="/static/img/iconography/1789-1799/Genius Liberty Equality.jpeg" />
                        <p>1793 <br /> Genius, liberty, equality face cards</p>
                    </div>
                    <div className="iconography-deck-card">
                        <ImagePopup src="/static/img/iconography/1789-1799/Wise Men Virtuous Women.jpeg" />
                        <p>1794 <br /> Wise men, virtuous women, brave men face cards</p>
                    </div>
                    <div className="iconography-deck-card">
                        <ImagePopup src="/static/img/iconography/1800-1899/Barricades.jpeg" />
                        <p>1830 <br /> Barricades deck</p>
                    </div>
                    <div className="iconography-deck-card">
                        <ImagePopup src="/static/img/iconography/1800-1899/Liberators.jpeg" />
                        <p>1848 <br /> Liberators deck</p>
                    </div>
                </div>
            </div>

            <p className="search-link">Click <a href="iconography/search">here</a> to search our face card database</p>
        </div>

        </>
    );
};

export default Iconography;