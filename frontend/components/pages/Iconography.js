import React from "react";
import ImagePopup from "../ImagePopup";
import {Trans, useTranslation} from "react-i18next";

const Iconography = () => {

    React.useEffect(() => {
        document.title = "Face Card Iconography | French Playing Cards";
    }, []);

    const {t} = useTranslation();

    return (
        <>
            <h2 className="page-header"> {t("iconography.header")} </h2>

            <p className="search-link"><Trans i18nKey="iconography.linkUpper">Click <a href="/explore">HERE</a> to explore our face card database</Trans></p>

            <h3 className="iconography-header">{t("iconography.introduction.header")}</h3>
            <div id='IconographyIntro'>
                <img src={"/static/img/misc/iconography-image.jpeg"}/>
                <p>
                    <Trans i18nKey="iconography.introduction.blurb">
                Our page on the changing “<a href="../material-aspects/fronts">fronts</a>” of playing cards offers variations on the Queen of Hearts
                manufactured in France from the Old Regime to the middle of the nineteenth century. In
                addition, we have a compiled a database of face card images for kings, queens, jacks, and
                some aces in all four suits during this time period, along with the accompanying metadata
                from the web site of the Bibliothèque nationale de France. Our database contains images and
                data from 24 decks of cards created during this period. The accompanying search tool allows
                users to search these images by filtering for time period, face card, suit, town, maker, and
                the fronts and backs of the cards. Users can thus customize comparisons of French face card
                iconography during the 1644-1848 time period.
                    </Trans>
                    <br /> <br />
                    <Trans i18nKey="iconography.linkLower">
                Click <a href="/explore">here</a> to explore our face card database
                    </Trans>
                </p>
            </div>

            <div id="iconography-deck">
                <h3 className="iconography-header">{t("iconography.contents.header")}</h3>
                <p>
                    {t("iconography.contents.blurb")}
                </p>

                <div className="iconography-deck-row">
                    <div className="iconography-deck-col">
                        <div className="iconography-deck-card">
                            <ImagePopup src="/static/img/iconography/1600-1789/1644 geography.jpeg" />
                            <p>1644 <br /> {t("iconography.decks.geography")}</p>
                        </div>
                        <div className="iconography-deck-card">
                            <ImagePopup src="/static/img/iconography/1600-1789/heraldry.jpeg" />
                            <p>1698-1708 <br />{t("iconography.decks.heraldry")}</p>
                        </div>
                        <div className="iconography-deck-card">
                            <ImagePopup src="/static/img/iconography/1600-1789/Provence.jpeg" />
                            <p>1721-1751 <br />{t("iconography.decks.provence")}</p>
                        </div>
                        <div className="iconography-deck-card">
                            <ImagePopup src="/static/img/iconography/1600-1789/Guyenne.jpeg" />
                            <p>1750 <br />{t("iconography.decks.guyenne")}</p>
                        </div>
                        <div className="iconography-deck-card">
                            <ImagePopup src="/static/img/iconography/1789-1799/Elements Seasons, Farmers.jpeg" />
                            <p>1791-1794 <br /> {t("iconography.decks.elements")}</p>
                        </div>
                        <div className="iconography-deck-card">
                            <ImagePopup src="/static/img/iconography/1789-1799/Bézu.jpeg" />
                            <p>1794 <br />{t("iconography.decks.bezu")}</p>
                        </div>
                        <div className="iconography-deck-card">
                            <ImagePopup src="/static/img/iconography/1800-1899/J-L David.jpeg" />
                            <p>1810 <br />{t("iconography.decks.david")}</p>
                        </div>
                        <div className="iconography-deck-card">
                            <ImagePopup src="/static/img/iconography/1800-1899/Fantasy.JPEG" />
                            <p>1830 <br /> {t("iconography.decks.fantasy")}</p>
                        </div>
                    </div>

                    <div className="iconography-deck-col">
                        <div className="iconography-deck-card">
                            <ImagePopup src="/static/img/iconography/1600-1789/1644 queens.jpeg" />
                            <p>1644 <br />{t("iconography.decks.queens")}</p>
                        </div>
                        <div className="iconography-deck-card">
                            <ImagePopup src="/static/img/iconography/1600-1789/Auvergne.jpeg" />
                            <p>1700-1750 <br />{t("iconography.decks.auvergne")}</p>
                        </div>
                        <div className="iconography-deck-card">
                            <ImagePopup src="/static/img/iconography/1600-1789/Dauphiné.jpeg" />
                            <p>1746-1777 <br />{t("iconography.decks.dauphine")}</p>
                        </div>
                        <div className="iconography-deck-card">
                            <ImagePopup src="/static/img/iconography/1600-1789/Lyon.jpeg" />
                            <p>1778-1789 <br />{t("iconography.decks.lyon")}</p>
                        </div>
                        <div className="iconography-deck-card">
                            <ImagePopup src="/static/img/iconography/1789-1799/Counter-Revolutiuonary.jpeg" />
                            <p>1792 <br /> {t("iconography.decks.counter-rev")}</p>
                        </div>
                        <div className="iconography-deck-card">
                            <ImagePopup src="/static/img/iconography/1789-1799/Year II philosophes.png" />
                            <p>1794 <br /><Trans i18nKey="iconography.decks.philosophes"> Year II <i>philosophes</i></Trans></p>
                        </div>
                        <div className="iconography-deck-card">
                            <ImagePopup src="/static/img/iconography/1800-1899/Gatteaux.jpeg" />
                            <p>1816 <br /> {t("iconography.decks.gatteaux")}</p>
                        </div>
                        <div className="iconography-deck-card">
                            <ImagePopup src="/static/img/iconography/1800-1899/Heros.jpeg" />
                            <p>1831 <br />{t("iconography.decks.heros")}</p>
                        </div>
                    </div>

                    <div className="iconography-deck-col">
                        <div className="iconography-deck-card">
                            <ImagePopup src="/static/img/iconography/1600-1789/War Games.jpeg" />
                            <p>1698 <br /> {t("iconography.decks.war-games")}</p>
                        </div>
                        <div className="iconography-deck-card">
                            <ImagePopup src="/static/img/iconography/1600-1789/Languedoc.jpeg" />
                            <p>1702-1720 <br /> {t("iconography.decks.languedoc")}s</p>
                        </div>
                        <div className="iconography-deck-card">
                            <ImagePopup src="/static/img/iconography/1600-1789/Paris.jpeg" />
                            <p>1750 <br />{t("iconography.decks.paris")}</p>
                        </div>
                        <div className="iconography-deck-card">
                            <ImagePopup src="/static/img/iconography/1789-1799/Modified Old Regime.jpeg" />
                            <p>1789-1799 <br />{t("iconography.decks.modified")}</p>
                        </div>
                        <div className="iconography-deck-card">
                            <ImagePopup src="/static/img/iconography/1789-1799/Genius Liberty Equality.jpeg" />
                            <p>1793 <br />{t("iconography.decks.genius")}</p>
                        </div>
                        <div className="iconography-deck-card">
                            <ImagePopup src="/static/img/iconography/1789-1799/Wise Men Virtuous Women.jpeg" />
                            <p>1794 <br />{t("iconography.decks.wise-virtuous")}</p>
                        </div>
                        <div className="iconography-deck-card">
                            <ImagePopup src="/static/img/iconography/1800-1899/Barricades.jpeg" />
                            <p>1830 <br />{t("iconography.decks.barricades")}</p>
                        </div>
                        <div className="iconography-deck-card">
                            <ImagePopup src="/static/img/iconography/1800-1899/Liberators.jpeg" />
                            <p>1848 <br />{t("iconography.decks.liberators")}</p>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Iconography;
